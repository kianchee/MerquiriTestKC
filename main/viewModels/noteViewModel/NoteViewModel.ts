import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    INoteModel,
    noteData,
    noteType,
} from '../../models/noteModel/NoteModel';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {
    noteState,
    setNote
} from '../../reducers/NoteSlice';
import {
  Alert,
  Keyboard
} from 'react-native';

import { DropdownItem, displayName, defaultCategoryData, staticText } from '../../utils/Constants';
const categoryArray = Object.values(noteType);

const maxLength = 200;
export const NoteViewModel = (model: INoteModel, dispatch: any) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noteList, setNoteList] = useState<noteData>();
  const [selectedValue, setSelectedValue] = useState<noteType>();
  const [dropDownData, setDropDownData] = useState<DropdownItem[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [text, setText] = useState('');
  const noteData: noteState = useSelector((state: any) => state.noteData);
  const isFocused = useIsFocused();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    if(!dropDownData || dropDownData.length == 0){
        const noteTypeDropDown: DropdownItem[] = [];
        categoryArray.map(type=>noteTypeDropDown.push({label: type.toString(), value: defaultCategoryData[type].homeText }));
        setDropDownData(noteTypeDropDown);
    }
  }, []);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const onTextInputchange = (inputText: string) => {
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };
  const saveNote = async (): Promise<void> => {
    try {
      setIsLoading(true);
      if( selectedValue == undefined){
        Alert.alert('Alert', staticText.dropDownValidationMsg)
      }else if(text == ""){
        Alert.alert('Alert', staticText.contentInputValidationMsg)
      }else{
        const currentDate = new Date();
        console.log(currentDate.toISOString());
        let response = await model.saveNoteData({noteType: selectedValue,
            content: text,
            created_at: currentDate.toISOString()})
            setIsLoading(false);
        if(response){
            dispatch(
                setNote({noteList:response})
            );
            Alert.alert(
                staticText.NoteSuccessAdd,
                '',
                [
                  { 
                    text: staticText.OK, 
                    onPress: () => {
                        navigation.goBack();
                        setSelectedValue(undefined);
                        setText("");
                    }
                  }
                ],
                { cancelable: false }
              );
        }else{
            Alert.alert('Alert', staticText.errorSaveNote);
        }
      }
        
    } catch (error: any) {
        setIsLoading(false);
        Alert.alert('Alert', error.toString());
    }
  };

  return {
    setNoteList,
    keyboardVisible,
    dropDownData,
    selectedValue,
    saveNote,
    setSelectedValue,
    text,
    maxLength,
    onTextInputchange,
    isLoading,
    setIsLoading,
  };
};

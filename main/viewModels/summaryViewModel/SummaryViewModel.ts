import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    INoteModel,
    noteData,
    noteType,
    summaryNote
} from '../../models/noteModel/NoteModel';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {
    noteState,
    setNote
} from '../../reducers/NoteSlice';
import {
  Alert,
} from 'react-native';
const categoryArray = Object.values(noteType);

const maxLength = 200;
export const SummaryViewModel = (model: INoteModel, dispatch: any) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [summaryList, setSummaryList] = useState<summaryNote[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const noteData: noteState = useSelector((state: any) => state.noteData);
  const isFocused = useIsFocused();


  useEffect(() => {
    if (isFocused) {
        getNoteDataAction();
    }
  }, [isFocused]);

  const getNoteDataAction = async (): Promise<void> => {
    try {
      setIsLoading(true);
        let response: noteData[] = noteData.noteList;
        if(noteData && noteData.noteList.length == 0){
            response = await model.getNoteData();
        }
        setIsLoading(false);
        if(response){
            let resultArr: summaryNote[] = []
            categoryArray.map(e=>{
                let filteredData = response.filter(t=> t.noteType == e);
                resultArr.push({
                    noteType: e,
                    count: filteredData.length
                })
            })
            setSummaryList(resultArr);
            
            dispatch(
                setNote({noteList:response})
            );
            
        }else{
          if(response == null){
            let resultArr: summaryNote[] = []
            categoryArray.map(e=>{
                resultArr.push({
                    noteType: e,
                    count: 0
                })
            })
            setSummaryList(resultArr);
          }
          dispatch(
            setNote({noteList:[]})
          );
        }
      
        
    } catch (error: any) {
        setIsLoading(false);
      Alert.alert('Alert', error.toString());
    }
  };

  return {
    summaryList,
    isLoading,
    setIsLoading,
  };
};

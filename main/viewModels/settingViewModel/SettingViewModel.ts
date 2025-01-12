import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    INoteModel,
    noteData,
    noteType,
    summaryNote
} from '../../models/noteModel/NoteModel';
import Images from '../../utils/Images';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {
    noteState,
    setNote
} from '../../reducers/NoteSlice';
import {
  Alert,
  Animated,

} from 'react-native';
import { ImageSourcePropType } from 'react-native';
import { displayName } from '../../utils/Constants';
const categoryArray = Object.values(noteType);
interface settingList {
    name: string,
    icon: ImageSourcePropType
}

const TypeTitle: settingList[] = [
    { 
        name: displayName.ONLINECUSTOMER,
        icon: Images.onlineCustomerIcon
    },
    { 
        name: displayName.USERAGREEMENT,
        icon: Images.userAgreementIcon
    },
    { 
        name: displayName.PRIVACYPOLICY,
        icon: Images.privacyPolicyIcon
    },
    { 
        name: displayName.ABOUTUS,
        icon: Images.aboutUsIcon
    }
]
export const SettingViewModel = (model: INoteModel, dispatch: any) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successDelete, setSuccessDelete] = useState<boolean>();
  const opacity = useState(new Animated.Value(0))[0];
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    if(successDelete == true){
        triggerPopup();
    }
  }, [successDelete]);


  const deleteAll = async (): Promise<void> => {
    try {
        setIsLoading(true);
        setSuccessDelete(false);
        let response = await model.deleteNoteData()
            setIsLoading(false);
        if(response){
            setSuccessDelete(true);
            dispatch(
                setNote({noteList:[]})
            );
        }else{
            setSuccessDelete(false);
        }
    } catch (error: any) {
        setSuccessDelete(false);
    }
  };
  const triggerPopup = () => {
    setShowPopup(true);

    // Trigger Animated function which will shows and auto hide it after 2 seconds.
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setShowPopup(false));
    }, 2000);
  };

  return {
    deleteAll,
    TypeTitle,
    showPopup,
    opacity,
    successDelete,
    isLoading,
    setIsLoading,
  };
};

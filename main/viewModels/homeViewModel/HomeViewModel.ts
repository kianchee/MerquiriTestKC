import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    INoteModel,
    noteData,
    noteType,
    summaryNote
} from '../../models/noteModel/NoteModel';
import { useNavigation, useIsFocused} from '@react-navigation/native';
import {
    noteState,
    setNote
} from '../../reducers/NoteSlice';
import {
  Alert,
} from 'react-native';
const categoryArray = Object.values(noteType);


export const HomeViewModel = (model: INoteModel, dispatch: any) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recentNoteArr, setRecentNoteArr] = useState<Record<string, noteData[]>>({});
  const isFocused = useIsFocused();
  const noteData: noteState = useSelector((state: any) => state.noteData);

useEffect(() => {
    if (isFocused) {
        getNoteDataAction();
    }
  }, [isFocused]);

  const getNoteDataAction = async (): Promise<void> => {
    try {
      setIsLoading(true);
        // Since redux variable are read-only, so cannot do data massaging directly, hence we create another variable and copy value over.
        let response: noteData[] = [...noteData.noteList];
        // To check if data is existed, no need to call getNoteDate, coz data entry since once success added note, will always update the noteData state.
        if(noteData && noteData.noteList.length == 0){
            response = await model.getNoteData();
        }
        setIsLoading(false);
        if(response){
            filterNoteData(response);
            dispatch(
                setNote({noteList:response})
            );
            
        }else{
          if(response == null){
            let resultArr: noteData[] = [];
            categoryArray.map(e=>{
                resultArr.push({
                    noteType: e,
                    content: "",
                    created_at : ""
                })
            })
            setRecentNoteArr({});
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

  const filterNoteData = (response: noteData[]) => {
        // Sort the response by the latest Date.
        response.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        // take NoteType as a key, and group all the array based on key for easily loop out the result.
        let resultArr = response.reduce((keyObj, record) => {
            keyObj[record.noteType] = keyObj[record.noteType] || [];
            if(keyObj[record.noteType].length < 3){
                keyObj[record.noteType].push(record);
            }
            return keyObj;
          }, {} as Record<string, noteData[]>);
          setRecentNoteArr(resultArr);
    };

  return {
    recentNoteArr,
    isLoading,
    setIsLoading,
  };
};

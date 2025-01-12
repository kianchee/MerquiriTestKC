import axios, {AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageSourcePropType } from 'react-native';
import Images from '../../utils/Images';
export enum noteType {
    WORK = "WORK",
    LIFE = "LIFE",
    HEALTH = "HEALTH"
}

export interface noteData {
  noteType: noteType;
  content: string;
  created_at: string;
}

export interface summaryNote {
    noteType: noteType;
    count: number;
}


export interface INoteModel {
    saveNoteData(noteObj: noteData): Promise<noteData[] | null>;
    getNoteData(): Promise<noteData[] | []>;
    deleteNoteData(): Promise<boolean>;
  }
  

  export class NoteModel implements INoteModel {
    async getNoteData(): Promise<any[] | []> {
      
      try {
        const storedArray = await AsyncStorage.getItem('myNotes');
        if (storedArray) {
            return JSON.parse(storedArray);
        }else{
            return [];
        }
      } catch (error) {
        throw [];
      }
    }
    async saveNoteData(noteObj: noteData): Promise<noteData[] | null> {
      
        try {
            const storedArray = await AsyncStorage.getItem('myNotes');
            let newObjStore: noteData[] = []
            if(storedArray){
                newObjStore = JSON.parse(storedArray)
            }
            newObjStore.push(noteObj)
            await AsyncStorage.setItem('myNotes', JSON.stringify(newObjStore));
            return newObjStore;
        } catch (error) {
          throw null;
        }
      }
      async deleteNoteData(): Promise<boolean> {
        try {
            const storedArray = await AsyncStorage.getItem('myNotes');
            if(storedArray){
                await AsyncStorage.removeItem('myNotes');
            }
            return true;
        } catch (error) {
          return false;
        }
      }
  }


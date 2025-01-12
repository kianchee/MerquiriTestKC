import { combineReducers } from 'redux';

import NoteSlice from './NoteSlice';
const rootReducer = combineReducers({
    noteData: NoteSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

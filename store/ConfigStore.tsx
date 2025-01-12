import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    REGISTER,
    PERSIST,
    PURGE,
    PAUSE,
    REHYDRATE,
    FLUSH
  } from 'redux-persist';

import RootReducer from '../main/reducers/RootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        //add this to avoid debugger serializableCheck error in debuger terminal 
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ImageSourcePropType, Platform, Text } from 'react-native';
import Images from '../main/utils/Images';
import { BottomTabParamList, headerName, tabButtonList } from '../main/utils/Constants';
import CustomHeader from '../main/utils/Header';
import CustomTabBar from '../main/utils/TabBar';
import HomeView from '../main/views/homeView/HomeView';
import NoteView from '../main/views/noteView/NoteView';
import SummaryView from '../main/views/summaryView/SummaryView';
import SettingView from '../main/views/settingView/SettingView';
import LinearGradient from 'react-native-linear-gradient';
import {HomeRoute, AddNoteRoute, NoteSummaryRoute, SettingsRoute, ListNoteRoute} from '../rootNavigation/Routes';
const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator();

export interface emailParams {
  email?: string;
  newPassword: string;
  currentPassword: string;
}
const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name={HomeRoute} component={HomeView} options={{ header: (props) => <CustomHeader type={1} title={headerName[HomeRoute]} navigation={props.navigation} /> }} />
      <Stack.Screen name={SettingsRoute} component={SettingView} options={{ header: (props) => <CustomHeader type={2} title={headerName[SettingsRoute]} navigation={props.navigation} /> }} />
    </Stack.Navigator>
  );
};


const AddNoteStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AddNoteRoute} component={NoteView} options={{
            header: (props) => <CustomHeader type={2} title={headerName[AddNoteRoute]} navigation={props.navigation}  />,
          }} />
    </Stack.Navigator>
  );
};

const SummaryStack: React.FC = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={NoteSummaryRoute} component={SummaryView} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  };


const BottomNavigator: React.FC = () => {
    let tabName: string = '';
    let iconName: ImageSourcePropType = Images.homeActive;
  return (
    <Tab.Navigator
      initialRouteName={tabButtonList.Home}
      
      screenOptions={({ route }) => ({
        tabBarStyle: {
            display: route.name === tabButtonList.AddNote ? 'none' : 'flex',
          },
        headerShown: false,
      })}
      tabBar={props => <CustomTabBar state={props.state} descriptors={props.descriptors} navigation={props.navigation}  />}>
      <Tab.Screen name={tabButtonList.Home} component={HomeStack} />
      <Tab.Screen name={tabButtonList.AddNote} component={AddNoteStack} />
      <Tab.Screen name={tabButtonList.NoteSummary} component={SummaryStack} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

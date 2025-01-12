import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { rp } from '../utils/Helpers';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Images from '../utils/Images';
import { tabConfig } from '../utils/Constants';
import { GradientHeaderAndTabConfig } from '../defaultStyle/DefaultStyle';
import type {
    ParamListBase,
    TabNavigationState,
  } from '@react-navigation/native';
interface CustomTabProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: any;
    navigation: any;
}

interface routeObject{
    key: string;
    name: string;
}

const CustomTabBar: React.FC<CustomTabProps> = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const { display } = focusedOptions?.tabBarStyle as {
        display: "none" | "flex";
      };
      
      if(state.routes[state.index].state?.index == 1){
        return  null;
      }
      if (display === "none") {
        return null;
      }else{
        return (
            <View style={[styles.header]}>
                <LinearGradient
                    colors={GradientHeaderAndTabConfig.colors}
                    start={GradientHeaderAndTabConfig.start}
                    end={GradientHeaderAndTabConfig.end}
                    style={[styles.headerWithLinear]}>
                    <View style={[styles.mainView]}>
                        {state.routes.map((route: routeObject, index: number) => {
                            const isFocused = state.index === index;
                            let imageToShow = Images.home
                            const nameToShow = tabConfig[route.name].displayName
                            if(isFocused){
                                imageToShow = tabConfig[route.name].icon
                            }else{
                                imageToShow =  tabConfig[route.name].outFocusIcon
                            }
                            return (
                                <TouchableOpacity
                                    key={route.key}
                                    onPress={() => navigation.navigate(route.name)}
                                    style={[styles.buttonStyle]} activeOpacity={0.7}>
                                        <Image
                                            source={imageToShow}
                                            style={[styles.buttonImageSize]}
                                            resizeMode="cover"
                                        />
                                    <Text style={[ isFocused ? styles.tabNameFocus : styles.tabName]} numberOfLines={2}>{nameToShow}</Text>
                                </TouchableOpacity>

                            );
                        })}
                    </View>
                </LinearGradient>
            </View> 
        );
      }
    
    };

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonStyle: {
    paddingBottom: rp(35),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3
  },
  headerWithLinear: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: rp(112),
    width: '100%',
    borderTopRightRadius: rp(20), 
    borderTopLeftRadius: rp(20), 
    borderColor:'rgba(235, 235, 240, 1)',
  },
  buttonImageSize: {
    height: rp(45),
    width: rp(45),
  },
  mainView: {
    flexGrow: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: rp(50),
    marginHorizontal: rp(20)
  },
  tabNameFocus: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: rp(10),
    fontSize: rp(12),
    fontWeight: 500,
    color: 'rgba(249, 70, 149, 1)',
  },
  tabName: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: rp(10),
    fontSize: rp(12),
    fontWeight: 500,
    color: 'rgba(145, 141, 172, 1)',
  },
});

export default CustomTabBar;

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { rp } from '../utils/Helpers';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Images from '../utils/Images';
import { SettingsRoute } from '../../rootNavigation/Routes';
import { GradientHeaderAndTabConfig } from '../defaultStyle/DefaultStyle';
import { defaultStyles } from '../defaultStyle/DefaultStyle';
interface CustomHeaderProps {
    title: string;
    type: number;
    navigation: any;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, type, navigation }) => {
  return (
    <View style={defaultStyles.gradientLayerBody}>
        <LinearGradient
        colors={GradientHeaderAndTabConfig.colors}
        start={GradientHeaderAndTabConfig.start}
        end={GradientHeaderAndTabConfig.end}
        style={styles.linearGradient}>
            {type == 1 ?
                <View style={[styles.mainView]}>
                    <View style={[defaultStyles.contentFlexAdjustment]}>
                        <Text style={[defaultStyles.mainTitleText]} numberOfLines={2}>{title}</Text>
                    </View>
                    <View style={[defaultStyles.iconFlexAdjustment]}>
                        <TouchableOpacity style={[styles.settingButton]} activeOpacity={0.7} onPress={() =>
                                    navigation.navigate(SettingsRoute)
                                  }>
                        <Image
                            source={Images.setting}
                            style={styles.settingButtonSize}
                            resizeMode="cover"
                        />
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={[styles.mainView]}>
                    <View style={[defaultStyles.iconFlexAdjustment]}>
                        <TouchableOpacity style={[styles.backButton]} activeOpacity={1} onPress={() =>
                                    navigation.goBack()
                                  }>
                        <Image
                            source={Images.back}
                            style={styles.backButtonSize}
                            resizeMode="cover"
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={[defaultStyles.contentFlexAdjustment, styles.alinTextWithButton]}>
                        <Text style={[defaultStyles.mainTitleText]} numberOfLines={2}>{title}</Text>
                    </View>
                </View>
            }
            
        </LinearGradient>

        

        </View>  
  );
};

const styles = StyleSheet.create({
  settingButton:{
    alignItems: 'flex-end',
    justifyContent: 'flex-end', 
    paddingVertical: rp(5)
  },
  backButton:{
    marginTop: rp(20),
    paddingBottom: rp(20)
  },
  alinTextWithButton:{
    paddingTop: rp(12)
  },
  linearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: rp(112),
    width: '100%',
    borderBottomRightRadius: rp(20), 
    borderBottomLeftRadius: rp(20), 
    borderColor:'rgba(235, 235, 240, 1)',
  },
  settingButtonSize: {
    height: rp(24),
    width: rp(24),
  },
  backButtonSize: {
    height: rp(14),
    width: rp(9),
  },
  mainView: {
    flexGrow: 1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: rp(50),
    marginHorizontal: rp(20)
  },
});

export default CustomHeader;

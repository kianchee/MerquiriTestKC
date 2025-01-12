import React from 'react';
import { Animated, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { rp } from './Helpers';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Images from './Images';
import { SettingsRoute } from '../../rootNavigation/Routes';
import { GradientAlertBoxConfig } from '../defaultStyle/DefaultStyle';
import { ImageSourcePropType } from 'react-native';
import { defaultStyles } from '../defaultStyle/DefaultStyle';
interface alertBoxProps {
  keys: string,
  content: string
  textLimit: number,
  rightIcon?: ImageSourcePropType,
  leftIcon?: ImageSourcePropType,
  isDisabledButton?: boolean
}

const ListButton: React.FC<alertBoxProps> = ({keys, content, textLimit, rightIcon, leftIcon, isDisabledButton }) => {
  return (
    <View style={[styles.cardView]} key={keys}>
        <View style={[styles.cardContentView]}>
            {leftIcon &&
                <View style={[defaultStyles.iconFlexAdjustment]}>
                    <Image
                        source={leftIcon}
                        style={[defaultStyles.standardIconSize]}
                        resizeMode="cover"
                    />
                </View>
            }
            <View style={[leftIcon ? defaultStyles.contentBetweenAdjustment : defaultStyles.contentFlexAdjustment]}>
                <Text style={[isDisabledButton ==true ? defaultStyles.smallBlurTextStyle : defaultStyles.smallTextStyle]}>{textLimit > -1 && content.length > textLimit ?  content.substring(0,textLimit) + " ..." : content }</Text>
            </View>
            {rightIcon &&
                <View style={[styles.buttonView]}>
                <Image
                    source={rightIcon}
                    style={[defaultStyles.standardIconSize]}
                    resizeMode="cover"
                />
            </View>
            }
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    cardView:{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: rp(16),
        marginHorizontal: rp(20),
        marginTop: rp(10),
        borderWidth: rp(1),
        borderColor: "rgba(255, 255, 255, 0.12)",
        borderStyle: 'solid'
    },
    cardContentView: {
        flexGrow: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: rp(16),
        marginVertical: rp(16)
    },
    buttonView: {
      flex: 0.2,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
});

export default ListButton;

import React from 'react';
import { Animated, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { rp } from './Helpers';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Images from './Images';
import { SettingsRoute } from '../../rootNavigation/Routes';
import { GradientHeaderAndTabConfig, GradientButtonConfig } from '../defaultStyle/DefaultStyle';
import { defaultStyles } from '../defaultStyle/DefaultStyle';

interface alertBoxProps {
    buttonOnPress?: () => void;
    displayText: string;
    autoSize?: boolean; 
}

const DefaultButton: React.FC<alertBoxProps> = ({buttonOnPress, displayText, autoSize}) => {
  return (
    <TouchableOpacity onPress={buttonOnPress} >
        <LinearGradient
          colors={GradientButtonConfig.colors}
          start={GradientButtonConfig.start}
          end={GradientButtonConfig.end}
          style={autoSize==true ? styles.buttonGradientAutoSize : styles.buttonGradientWithSize}
        >
            <View style={styles.ButtonTextView}>
                <Text style={defaultStyles.normalTextStyle}>{displayText}</Text>
            </View>
          
        </LinearGradient>
    </TouchableOpacity> 
  );
};

const styles = StyleSheet.create({
    ButtonTextView:{
        paddingHorizontal:rp(16), 
        marginVertical: rp(6)
    },
    buttonGradientWithSize: {
        width: rp(200),
        height: rp(34),
        borderRadius: rp(24), 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    buttonGradientAutoSize: {
        borderRadius: rp(24),
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default DefaultButton;

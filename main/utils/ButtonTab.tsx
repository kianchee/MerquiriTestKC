import React from 'react';
import { Animated, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { rp } from './Helpers';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Images from './Images';
import { SettingsRoute } from '../../rootNavigation/Routes';
import { GradientHeaderAndTabConfig, GradientButtonConfig } from '../defaultStyle/DefaultStyle';
import DefaultButton from './DefaultButton';

interface alertBoxProps {
    buttonOnPress: () => void;
    displayText: string;
}

const ButtonTab: React.FC<alertBoxProps> = ({buttonOnPress, displayText}) => {
  return (
    <View style={[styles.card]}>
        <LinearGradient
            colors={GradientHeaderAndTabConfig.colors}
            start={GradientHeaderAndTabConfig.start}
            end={GradientHeaderAndTabConfig.end}
            style={[styles.cardContent]}>
                <DefaultButton buttonOnPress={buttonOnPress} displayText={displayText} />
        </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderStyle: 'solid',
        height: rp(112),
        borderTopLeftRadius: rp(20),
        borderTopRightRadius: rp(20),
        overflow: 'hidden',
    },
    cardContent: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    }
});

export default ButtonTab;

import React from 'react';
import { Animated, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { rp } from './Helpers';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Images from './Images';
import { SettingsRoute } from '../../rootNavigation/Routes';
import { GradientAlertBoxConfig } from '../defaultStyle/DefaultStyle';

interface alertBoxProps {
  opacity: Animated.Value,
  displayText: string

}

const AlertBox: React.FC<alertBoxProps> = ({opacity, displayText}) => {
  return (
    <Animated.View style={[styles.popupContainer, { opacity}]}>
        <LinearGradient
          colors={GradientAlertBoxConfig.colors}
          start={GradientAlertBoxConfig.start}
          end={GradientAlertBoxConfig.end}
          style={styles.linearGradient}
        >
          <Text style={styles.popupText}>{displayText}</Text>
        </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  popupContainer:{
    
    borderRadius: rp(10),
    overflow: 'hidden',
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient:{
    marginHorizontal: rp(20),
    marginVertical: rp(10),
    borderRadius: rp(10),
    flex: 1,
    height: rp(60),
    width: '40%',
    alignItems: "center",
    justifyContent: "center",
  },
  popupText:{
    color: "rgba(255, 255, 255, 1)",
    fontWeight: 400,
    fontSize: rp(16),
    alignItems: "center",
    textAlign: 'center',
    justifyContent: "center",
  }
});

export default AlertBox;

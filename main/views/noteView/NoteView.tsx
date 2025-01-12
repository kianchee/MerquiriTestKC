import React, {useState} from 'react';
import { View, Text, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StatusBar, FlatList, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../utils/Images';
import { rp } from '../../utils/Helpers';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientBodyConfig } from '../../utils/Constants';
import { Dropdown } from 'react-native-element-dropdown';
import { NoteModel } from '../../models/noteModel/NoteModel';
import {NoteViewModel} from '../../viewModels/noteViewModel/NoteViewModel';
import ButtonTab from '../../utils/ButtonTab'
import { defaultStyles } from '../../defaultStyle/DefaultStyle';
const NoteView: React.FC = () => {
    const dispatch = useDispatch();
    const viewModel = NoteViewModel(new NoteModel(), dispatch);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <LinearGradient
        colors={GradientBodyConfig.colors}
        start={GradientBodyConfig.start}
        end={GradientBodyConfig.end}
        locations={GradientBodyConfig.locations}
      style={defaultStyles.gradientLayerBody}>
        <SafeAreaView style={defaultStyles.safeAreaStyle}>
        <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
        <ScrollView style={{flex: 1}}>
        <Dropdown
            style={styles.dropdown}
              data={viewModel.dropDownData}
              labelField="value"
              valueField="label"
              placeholder="Choose a category"
              placeholderStyle={styles.selectedText} 
              value={viewModel.selectedValue}
              onChange={(item) => viewModel.setSelectedValue(item.label)}
              selectedTextStyle={styles.selectedText}
              renderItem={(item) => 
                <View style={styles.dropDownItemSelectionView}>
                  <Text >{item.value}</Text>
                </View>
              }
            />
        <View style={[styles.textInputView]}>

            <TextInput
                style={styles.textInput}
                value={viewModel.text}
                onChangeText={viewModel.onTextInputchange}
                multiline={true} 
                placeholder="Please input note content"
                placeholderTextColor="rgba(255, 255, 255, 0.9)" 
                maxLength={viewModel.maxLength} 
              />
              <View style={styles.characterView}>
              <Text style={styles.characterCount}>
                {`${viewModel.text.length}/${viewModel.maxLength}`}
              </Text>
              </View>
              
        </View>
        
        </ScrollView>
        
        
        </SafeAreaView>
        {viewModel.keyboardVisible == false &&
          <ButtonTab buttonOnPress={()=>viewModel.saveNote()}  displayText={"Save"} />
        }
            
        </LinearGradient>  
        </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
    characterCount: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: rp(14),
    },
    characterView: {
      alignItems: 'flex-end'
    },
    textInputView:{
        marginHorizontal: rp(12)
    },
    dropDownItemSelectionView :{
      margin: rp(10), 
      backgroundColor: "transparent"
    },
    textInput: {
      width: '100%',
      height: rp(260),
      borderColor: 'rgba(255, 255, 255, 0.12)',
      color: "rgba(255, 255, 255, 0.9)",
      borderWidth: 1,
      padding: rp(16),
      textAlignVertical: 'top', 
      borderRadius: rp(16),
      marginBottom: rp(10),
      overflow: 'hidden',
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    dropdown: {
      height: rp(50),
      borderColor: 'rgba(255, 255, 255, 0.05)',
      borderWidth: 1,
      color: "rgba(255, 255, 255, 0.9)",
      borderRadius: rp(16),
      marginHorizontal: rp(12),
      paddingHorizontal: rp(12),
      marginVertical: rp(12),
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      width: 'auto',
    },
    selectedText: {
      color: "rgba(255, 255, 255, 0.9)",
    },
});

export default NoteView;

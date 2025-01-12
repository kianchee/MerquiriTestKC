import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../utils/Images';
import { rp } from '../../utils/Helpers';
import AlertBox from '../../utils/AlertBox'
import { SafeAreaView } from 'react-native-safe-area-context';
import { NoteModel } from '../../models/noteModel/NoteModel';
import {SettingViewModel} from '../../viewModels/settingViewModel/SettingViewModel';
import ButtonTab from '../../utils/ButtonTab';
import { GradientBodyConfig } from '../../utils/Constants';
import ListButton from '../../utils/ListButtom';
import { defaultStyles } from '../../defaultStyle/DefaultStyle';

const SettingView: React.FC = () => {
    const dispatch = useDispatch();
    const viewModel = SettingViewModel(new NoteModel(), dispatch);
    return (
        <LinearGradient
        colors={GradientBodyConfig.colors}
        start={GradientBodyConfig.start} 
        end={GradientBodyConfig.end} 
        locations={GradientBodyConfig.locations} 
        style={defaultStyles.gradientLayerBody}>
            <SafeAreaView style={defaultStyles.safeAreaStyle}>
                <ScrollView bounces={false}>
                    {viewModel.TypeTitle.map((data) => {
                        return (
                            <TouchableOpacity style={[styles.listingButtonView]} key={data.name}>
                                <ListButton keys={data.name} content={data.name} textLimit={20} leftIcon={data.icon} rightIcon={Images.redArrowIcon} />
                            </TouchableOpacity>
                        );
                    })}
                    {viewModel.showPopup && (
                        <AlertBox opacity={viewModel.opacity} displayText={"All Notes have been cleared"} />
                    )}
                </ScrollView>
                
            </SafeAreaView>
                <ButtonTab buttonOnPress={()=>viewModel.deleteAll()} displayText={"Delete All Notes"}/>
        </LinearGradient>  
    );
};


const styles = StyleSheet.create({
    listingButtonView: {
      marginTop: rp(5)
    },
});

export default SettingView;

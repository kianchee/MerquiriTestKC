import React from 'react';
import { View, Text, Image, StatusBar, FlatList, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../utils/Images';
import { rp } from '../../utils/Helpers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GradientBodyConfig, categoryArray, defaultCategoryData  } from '../../utils/Constants';
import { NoteModel } from '../../models/noteModel/NoteModel';
import {HomeViewModel} from '../../viewModels/homeViewModel/HomeViewModel';
import ListButton from '../../utils/ListButtom';
import { defaultStyles } from '../../defaultStyle/DefaultStyle';

const HomeView: React.FC = () => {
    const dispatch = useDispatch();
    const viewModel = HomeViewModel(new NoteModel(), dispatch);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    return (
        <LinearGradient
        colors={GradientBodyConfig.colors}
        start={GradientBodyConfig.start} 
        end={GradientBodyConfig.end}
        locations={GradientBodyConfig.locations}
        style={defaultStyles.gradientLayerBody}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <SafeAreaView style={defaultStyles.safeAreaWithTabStyle}>
                <ScrollView style={defaultStyles.gradientLayerBody}>
                <View style={[defaultStyles.headerView]}>
                        <View style={[defaultStyles.iconFlexAdjustment]}>
                            <Image
                                source={Images.recentIcon}
                                style={defaultStyles.standardIconSize}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={[defaultStyles.contentFlexAdjustment]}>
                            <Text style={[defaultStyles.blurTextStyle]}>{"Recently created notes"}</Text>
                        </View>
                    </View>
                    {categoryArray.map((data) => {
                        return (
                            <View style={[defaultStyles.cardContent]} key={data}>
                                <View style={[defaultStyles.headerView]}>
                                    <View style={[defaultStyles.iconFlexAdjustment]}>
                                        <Image
                                            source={defaultCategoryData[data].homeIcon}
                                            style={defaultStyles.standardIconSize}
                                            resizeMode="cover"
                                        />
                                    </View>
                                    <View style={[defaultStyles.contentFlexAdjustment]}>
                                        <Text style={[defaultStyles.normalTextStyle]}>{defaultCategoryData[data].homeText}</Text>
                                    </View>
                                </View>
                                    {viewModel.recentNoteArr[data] && viewModel.recentNoteArr[data].map((objData) => {
                                        return(
                                            <TouchableOpacity key={objData.created_at}>
                                                <ListButton keys={objData.created_at} content={objData.content} textLimit={20} rightIcon={Images.redArrowIcon} />
                                            </TouchableOpacity>
                                            )
                                    })}
                                    {!viewModel.recentNoteArr[data] &&
                                        <ListButton keys={data} content={"No Notes in this Category"} textLimit={-1} isDisabledButton={true}/>
                                    }
                            </View>
                        );
                    })}
                    
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>  
    );
};


const styles = StyleSheet.create({
});

export default HomeView;

import React from 'react';
import { View, Text, Image, StatusBar, FlatList, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../utils/Images';
import { rp } from '../../utils/Helpers';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AddNoteRoute } from '../../../rootNavigation/Routes';
import { NoteModel } from '../../models/noteModel/NoteModel';
import { defaultCategoryData, staticText } from '../../utils/Constants';
import { GradientBodySummaryConfig, GradientButtonConfig } from '../../defaultStyle/DefaultStyle';
import {SummaryViewModel} from '../../viewModels/summaryViewModel/SummaryViewModel';
import ListButton from '../../utils/ListButtom';
import DefaultButton from '../../utils/DefaultButton';
import { defaultStyles } from '../../defaultStyle/DefaultStyle';
const SummaryView: React.FC = () => {
    const dispatch = useDispatch();
    const viewModel = SummaryViewModel( new NoteModel(), dispatch);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <LinearGradient
        colors={GradientBodySummaryConfig.colors}
        start={GradientBodySummaryConfig.start}
        end={GradientBodySummaryConfig.end}
        locations={GradientBodySummaryConfig.locations}
        style={[defaultStyles.gradientLayerBody]}>
            <View style={[defaultStyles.headerView]}>
                <View style={[styles.titleView]}>
                    <Text style={[defaultStyles.mainTitleText]}>{staticText.Summary}</Text>
                </View>
                <View>
                    <Image
                        source={Images.summaryRobotIcon}
                        style={[styles.headerIconSize]}
                        resizeMode="cover"
                    />
                </View>
            </View>
            <View style={[styles.card]}>
              <ScrollView style={[styles.scrollerView]}>
                {viewModel.summaryList && viewModel.summaryList.map(e=>{
                    return(
                        <View style={[defaultStyles.cardContent]} key={e.noteType}>
                            <View style={[styles.mainView]}>
                                <View style={[styles.buttonView]}>
                                    <Image
                                        source={defaultCategoryData[e.noteType].summaryIcon}
                                        style={[styles.typeButtonSize]}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View style={[styles.titleType]}>
                                    <Text style={[styles.headerText]}>{defaultCategoryData[e.noteType].summaryText}</Text>
                                </View>
                                <DefaultButton displayText={staticText.detailText} autoSize={true} />
                            </View>
                              <ListButton keys={e.noteType} content={staticText.resultText.replace("{{COUNT}}", e.count.toString())} textLimit={-1} isDisabledButton={true} />
                        </View>
                    )
                })
                }
                
                </ScrollView>
            </View>
            
        </LinearGradient>  
  );
};


const styles = StyleSheet.create({
    cardContent: {
        marginTop: rp(30),
    },
    titleType: {
      flex: 0.8,
    },
    scrollerView:{
      flex:1, 
      marginBottom: rp(180) 
    },
    mainView: {
      flexGrow: 1,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: rp(20),
    },
    buttonView: {
      flex: 0.2
    },
    headerText: {
      fontSize: rp(16),
      fontWeight: 400,
      color: 'rgba(255, 255, 255, 1)',
    },
    typeButtonSize: {
      height: rp(50),
      width: rp(50),
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.04)',
      borderColor: "rgba(255, 255, 255, 0.12)",
      borderStyle: 'solid',
      height: '100%', 
      borderRadius: rp(20),
      overflow: 'hidden', 
    },

    titleView: {
      marginVertical: rp(70),
    },
    headerIconSize: {
      height: rp(220),
      width: rp(270),
      marginVertical: rp(0),
      marginHorizontal: rp(0)
    },
});

export default SummaryView;

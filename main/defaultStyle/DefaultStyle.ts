import { StyleSheet } from "react-native";
import { rp } from "../utils/Helpers";

export const defaultStyles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1, 
        marginTop: rp(66)
    },
    safeAreaWithTabStyle: {
        flex: 1, 
        marginTop: rp(66),
        marginBottom: rp(90)
    },
    gradientLayerBody: {
        flex: 1,
        width: '100%',
    },
    cardContent: {
        marginTop: rp(30),
    },
    contentFlexAdjustment:{
        flex: 0.9
    },
    contentBetweenAdjustment:{
        flex: 0.8,
    },
    iconFlexAdjustment:{
        flex: 0.1
    },
    blurTextStyle: {
        fontSize: rp(16),
        fontWeight: 400,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    normalTextStyle: {
        fontSize: rp(16),
        fontWeight: 400,
        color: 'rgba(255, 255, 255, 1)',
    },
    smallTextStyle: {
        fontSize: rp(14),
        fontWeight: 400,
        color: 'rgba(255, 255, 255, 1)',
    },
    smallBlurTextStyle: {
        fontSize: rp(14),
        fontWeight: 400,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    mainTitleText: {
        fontSize: rp(24),
        fontWeight: 600,
        color: 'rgba(255, 255, 255, 1)',
    },
    standardIconSize: {
        height: rp(20),
        width: rp(20),
    },
    headerView: {
        flexGrow: 1,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: rp(20),
    },
});
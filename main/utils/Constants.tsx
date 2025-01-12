import { ImageSourcePropType } from 'react-native';
import Images from '../utils/Images';
import { noteType } from '../models/noteModel/NoteModel'

export enum displayName {
    ONLINECUSTOMER = "Online Customer",
    USERAGREEMENT = "User Agreement",
    PRIVACYPOLICY = "Privacy Policy",
    ABOUTUS = "About Us"
};

export enum tabButtonList {
    Home = "Home",
    AddNote = "AddNote",
    NoteSummary = "NoteSummary"
}

export const categoryArray = Object.values(noteType);

export interface DropdownItem {
    label: string;
    value: any;
  }

export interface categoryAttribute {
    noteType: noteType;
    summaryIcon: ImageSourcePropType;
    homeIcon: ImageSourcePropType;
    homeText: string
    summaryText: string
}

export interface tabAttribute {
    displayName: string;
    icon: ImageSourcePropType;
    outFocusIcon: ImageSourcePropType;
}

export type BottomTabParamList = {
    Home: undefined;
    AddNote: undefined;
    NoteSummary: undefined;
  };

export const tabConfig: Record<string, tabAttribute> = {
    "Home": {
        displayName: "Home",
        icon: Images.home,
        outFocusIcon: Images.homeNotFocus
    },
    "AddNote": {
        displayName: "",
        icon: Images.note,
        outFocusIcon: Images.note
    },
    "NoteSummary": {
        displayName: "Summary",
        icon: Images.summary,
        outFocusIcon: Images.summaryNotFocus
    },
}

export const headerName: Record<string, string> = {
    "Home": "Home",
    "Settings": "Settings",
    "AddNote": "Add Note",
    "NoteSummary": "Summary"
}

export const defaultCategoryData: Record<string, categoryAttribute> = {
    "WORK": {
        noteType: noteType.WORK,
        summaryIcon: Images.workSummaryIcon,
        homeIcon: Images.workIcon,
        homeText: "Work and study",
        summaryText: "Work and study"
    },
    "LIFE": {
        noteType: noteType.HEALTH,
        summaryIcon: Images.healthSummaryIcon,
        homeIcon: Images.healthIcon,
        homeText: "Health and wellness",
        summaryText: "Health and wellness"
    },
    "HEALTH": {
        noteType: noteType.LIFE,
        summaryIcon: Images.lifeSummaryIcon,
        homeIcon: Images.lifeIcon,
        homeText: "Life",
        summaryText: "Home life"
    },
}

export const textLimit: number = 20

export const staticText = {
    Summary: "Summary",
    NoNotes: "No Notes in this Category",
    recentNotes: "Recently created notes",
    inputContentPlaceholder: "Please input note content",
    dropDownPlaceholder: "Choose a category",
    save: "Save",
    NoteSuccessAdd: "Note Added Successfully",
    OK: "OK",
    errorSaveNote: "We encounter some issue while saving your data, Please try again.",
    dropDownValidationMsg: "Please ensure to select a category before proceeding.",
    contentInputValidationMsg: "Please ensure to fill out the note content fields before proceeding.",
    clearNoteMsg: "All Notes have been cleared",
    deleteBtnText: "Delete All Notes",
    detailText: "Detail",
    resultText : "This topic has a total of {{COUNT}} records.",
};
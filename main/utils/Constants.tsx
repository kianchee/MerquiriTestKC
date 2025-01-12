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

export const GradientHeaderAndTabConfig = {
    colors: ['#280947', '#280841'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }
};

export const GradientBodyConfig = {
    colors: ['#1B284F', '#351159', '#421C45', '#3B184E'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    locations: [0.1445, 0.4917, 0.7482, 1]
};

export const GradientBodySummaryConfig = {
    colors: ['#351159', '#1B284F', '#351159', '#421C45', '#3B184E'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    locations: [0.005, 0.1145, 0.4917, 0.7482, 1]
};

export const GradientAlertBoxConfig = {
    colors: ['#C724E1', '#4E22CC'],
    start: {x: 0.5, y: 0},
    end: { x: 0.5, y: 1 }
};

export const GradientButtonConfig = {
    colors: ['#F94695', '#F13A76'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
};
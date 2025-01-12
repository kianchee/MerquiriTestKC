import { Alert, Dimensions, Linking, PermissionsAndroid, PixelRatio, Platform } from 'react-native';

export const rp = (point: number): number => PixelRatio.roundToNearestPixel(point);
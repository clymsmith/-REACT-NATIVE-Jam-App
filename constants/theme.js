import { Dimensions } from "react-native";
import {scale} from 'react-native-size-matters';
const { width, height } = Dimensions.get("window");


export const customFonts = {
    'Pattaya': require('./fonts/Pattaya-Regular.ttf'),
    'Roboto-Regular': require('./fonts/Roboto-Regular.ttf'),
}

export const COLORS = {
    // base colours
    primary: "#473144", // dark purple
    secondary: "#85151D", // dark red

    white: "#FFFFFF",
    black: "#000000",
}

export const SIZES = {
    // font sizes
    largeTitle: scale(45),
    mediumTitle: scale(30),
    iconTitle: scale(23),
    iconTitle2: scale(19),
    text: scale(16),
    button: scale(25),

    // app dimensions
    width,
    height
}

export const FONTS = {
    largeTitle: {fontFamily: "Pattaya", fontSize: SIZES.largeTitle, lineHeight: scale(76.32)},
    title2: {fontFamily: "Pattaya", fontSize: SIZES.mediumTitle, lineHeight: scale(41.63)},
    mediumTitle: {fontFamily: "Roboto_700Bold", fontSize: SIZES.mediumTitle, lineHeight: scale(35.16)},
    iconTitle: {fontFamily: "Roboto_700Bold", fontSize: SIZES.iconTitle, lineHeight: scale(36.95)},
    iconTitle2: {fontFamily: "Roboto_700Bold", fontSize: SIZES.iconTitle2, lineHeight: scale(36.95)},
    text: {fontFamily: "Roboto_700Bold", fontSize: SIZES.text, lineHeight: scale(18.75)},
    text300: {fontFamily: "Roboto_300Light", fontSize: SIZES.text, lineHeight: scale(18.75)},
    button: {fontFamily: "Roboto_700Bold", fontSize: SIZES.button, lineHeight: scale(29.3)},
}
    
const appTheme = {COLORS, SIZES, FONTS, customFonts};
export default appTheme;
import { Platform } from "react-native"

type FontWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"

export const KanitFont = {
  regular: 'Kanit-Regular',
  medium: 'Kanit-Medium',
  light: 'Kanit-Light',
  thin: 'Kanit-Thin',
  bold: 'Kanit-Bold',
  
}

const fontWeight = (family: string): FontWeight => {
  if (family == 'bold') {
    return Platform.OS === 'android' ? '800' : 'bold'
  } 
  if (family == 'regular') {
    return Platform.OS === 'android' ? '100' : '400'
  } 
  if (family == 'medium') {
    return "500"
  }
  if (family == 'light' || family == 'thin') {
    return 'normal'
  }
  return 'normal'
}

export const GetKanitFont = (family: 'regular' | 'medium' | 'light' | 'thin' | 'bold'): {
  fontFamily: string,
  fontWeight: FontWeight
} => {
  return {
    fontFamily: KanitFont[family],
    fontWeight: fontWeight(family)
  }
}

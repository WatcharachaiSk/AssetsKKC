import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { heightOfWindow, widthOfWindow } from '../utils/getDimension';
import { colors } from './colors';
import { GetKanitFont } from './fonts';

const globleStyles = StyleSheet.create({
  headers: {
    padding: widthOfWindow*0.05,
    backgroundColor: colors.Gray,
    marginVertical: 15
  },
  texthead: {
    fontSize: RFPercentage(3.3),
    color: colors.black,
    ...GetKanitFont("medium")
  },
  fontTitleDT: {
    fontSize: RFPercentage(3.2),
    ...GetKanitFont('medium'),
    color: '#fff'
  },
  textID: {
    fontSize: RFPercentage(2.8), color: '#fff',
    ...GetKanitFont('regular')
  },
  status: {

    borderRadius: 50,
    width: widthOfWindow * 0.16,
    height: heightOfWindow * 0.08,
    alignSelf: 'center'
  },
  fontstatus: {
    fontSize: RFPercentage(2.5), color: '#fff',
    textAlign: 'center',
    ...GetKanitFont('regular')
  },
  line: {
    padding: 0.5,
    width: widthOfWindow * 0.8,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,

  },
  fonts: {
    fontSize: RFPercentage(2.5), color: '#fff',
    ...GetKanitFont('regular')
  },


});

export default globleStyles

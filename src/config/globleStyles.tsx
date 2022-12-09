import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import { heightOfWindow, widthOfWindow } from '../utils/getDimension';
import {colors} from './colors';
import { GetKanitFont } from './fonts';

const globleStyles = StyleSheet.create({
     headers:{
        padding: 25, 
        backgroundColor: colors.Gray, 
        marginVertical: 15 
     },
     texthead:{
        fontSize: 22, 
        color: colors.black,  
        ...GetKanitFont("medium") 
      },
      fontTitleDT:{
        fontSize: 24,
        ...GetKanitFont('medium'),
        color: '#fff' 
      },
      textID:{
        fontSize: 18, color: '#fff' ,
        ...GetKanitFont('regular')
      },
      status: {

        borderRadius: 50,
        width: widthOfWindow * 0.16,
        height: heightOfWindow * 0.08,
        alignSelf: 'center'
      },
      fontstatus: {
        fontSize: 18, color: '#fff', 
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
        fontSize: 16, color: '#fff',
        ...GetKanitFont('regular')
      },

    
});

export default globleStyles

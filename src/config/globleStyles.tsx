import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
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
      }

    
});

export default globleStyles

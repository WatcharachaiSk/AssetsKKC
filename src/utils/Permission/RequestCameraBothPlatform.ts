import { isIOS } from '@rneui/base'
import { PERMISSIONS, requestMultiple, RESULTS } from 'react-native-permissions'

export const requestCameraBothPlatform = async () => {
 let flag = false
 if (isIOS) {
  await requestMultiple([PERMISSIONS.IOS.CAMERA]).then((statuses) => {
   if (statuses[PERMISSIONS.IOS.CAMERA] === RESULTS.GRANTED) {
    flag = true
   }
  })
 } else if (!isIOS) {
  await requestMultiple([PERMISSIONS.ANDROID.CAMERA]).then((statuses) => {
   if (statuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.GRANTED) {
    flag = true
   }
  })
 }
 return flag
}

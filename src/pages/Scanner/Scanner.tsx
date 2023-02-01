import * as React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
// import { DBRConfig, decode, TextResult } from 'vision-camera-dynamsoft-barcode-reader';
// import * as REA from 'react-native-reanimated';
import {useEffect, useState} from 'react';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';
import {useIsFocused} from '@react-navigation/native';
import images from '../../config/img';
import axios from 'axios';
import configAxios from '../../axios/configAxios';
import {baseURL} from '../../axios/config';
import {colors} from '../../config/colors';
import {GetKanitFont} from '../../config/fonts';
import {checkMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';
//import { isIOS } from "@rneui/base";
import {requestCameraBothPlatform} from '../../utils/Permission/RequestCameraBothPlatform';
import {isIOS} from '@rneui/base';
// import LottieView from 'lottie-react-native';
// import json from '../../config/json';
import ModalBarcodeUndefined from './Modal/ModalBarcodeUndefined';
import {BlurView} from '@react-native-community/blur';
const {height} = Dimensions.get('window');

const Scanner = (props: any) => {
  const navigation = props.navigation;

  // const [isFinished, setIsFinished] = useState(false);
  const [permission, setPermission] = useState(false);
  // const [nameItem, setNameItem] = useState("");
  // const [itemRes, setItemRes] = useState<[]>([]);
  // const [oldItem, setoldItem] = useState<[]>([]);
  // const [locations_nameTH, setLocations_nameTH] = useState("");

  const devices = useCameraDevices();
  const device = devices.back;
  const isFocused = useIsFocused();
  // const [showModal, setShowModal] = React.useState(false);
  const [showbarcodeUndefined, setShowBarcodeUndefined] = useState(false);
  // console.log('isFocused is',isFocused);

  const onScanAgain = () => {
    setShowBarcodeUndefined(false);
  };

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  // useEffect(() => {
  //   (async () => {
  //     const status = await Camera.requestCameraPermission();
  //     setPermission(status === 'authorized');
  //   })();
  // }, []);

  useEffect(() => {
    checkMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.ANDROID.CAMERA]).then(
      async statuses => {
        const status = isIOS
          ? statuses[PERMISSIONS.IOS.CAMERA]
          : statuses[PERMISSIONS.ANDROID.CAMERA];

        if (status === RESULTS.GRANTED) {
          setPermission(true);
        } else if (status === RESULTS.DENIED) {
          const res = await requestCameraBothPlatform();
          if (res) {
            setPermission(true);
            //console.log('fekjhfqoiehfnqoiydq2odnjwqhd97y');
          }
        } else {
          setPermission(false);
          //console.log('123456');
        }
      },
    );
  }, [permission]);

  // const onClickSwap = () => {
  //   setIsFinished(false);
  // };
  // const renderSetting = () => {
  //   return (
  //     <View style={styles.req_perm_container}>
  //       <Text style={styles.req_perm_text}>
  //         กรุณาให้สิทธิ์การอนุญาตการใช้งานกล้อง
  //         เพื่อเข้าใช้งานฟังก์ชันหลักของแอปพลิเคชัน
  //       </Text>
  //       <TouchableOpacity
  //         style={styles.req_perm_button}
  //         onPress={() => {
  //           navigation.reset({
  //             index: 0,
  //             routes: [{ name: "BottomTab" }],
  //           });
  //           Linking.openSettings();
  //         }}
  //       >
  //         <Text style={styles.req_perm_text_button}>เปิดตั้งค่า</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  const renderScanner = () => {
    return (
      <>
        {
          // device != null &&
          permission && (
            <Camera
              style={[StyleSheet.absoluteFill, {marginVertical: height / 5}]}
              device={device}
              isActive={true}
              frameProcessor={frameProcessor}
              frameProcessorFps={3}
            />
          )
        }

        <View
          style={[
            styles.item_Line,
            {marginTop: props.route.params != undefined ? -20 : 0},
          ]}>
          <Image
            style={{
              flex: 1,
              margin: 15,
              width: undefined,
              top: height < 600 ? 12 : 5,
            }}
            source={{uri: images.scan_Web}}
            resizeMode="contain"
          />
        </View>
        {barcodes.map((barcode: any, id) => {
          let barC = '-';
          setTimeout(async () => {
            barC = barcode != undefined ? barcode.content.data : '-';
            // console.log(barC);
            //console.log( baseURL + `/${barC}`);
            if (barcode != undefined && barC != undefined) {
              try {
                // const fetchData = async () => {
                const res = await axios(
                  await configAxios('get', baseURL + `/${barC}`),
                );

                let getproduct = res.data;
                setTimeout(async () => {
                  navigation.navigate('DetailAfterScan', {
                    getproduct,
                  });
                  // console.log(res.status);
                }, 500);
                // };
                // fetchData();
              } catch (error) {
                setShowBarcodeUndefined(true);
                console.log('errorrrrrrrrrrrrr', error);
              }
            } else {
              setTimeout(async () => {
                // setItemRes(undefined);
                // setoldItem(undefined);
                //setIsFinished(true);
                //setShowBarcodeUndefined(true);
              }, 500);
            }
          });
        })}
      </>
    );
  };

  // const renderLoading = () => {
  //   return (
  //     <LottieView
  //       resizeMode="contain"
  //       style={{
  //         flex: 1,
  //         width: undefined,
  //       }}
  //       source={json.success}
  //       autoPlay
  //       loop={true}
  //     />
  //   );
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.black}}>
      <ModalBarcodeUndefined
        showbarcodeUndefined={showbarcodeUndefined}
        onScanAgain={onScanAgain}
        setShowBarcodeUndefined={setShowBarcodeUndefined}
      />
      {showbarcodeUndefined && (
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={1}
          reducedTransparencyFallbackColor="gray"
        />
      )}

      {device && permission && isFocused && renderScanner()}
      {!permission}
    </SafeAreaView>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  barcodeText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  item_Line: {
    flex: 1,
    opacity: 1 / 2,
    zIndex: 1,
    margin: 25,
  },
  req_perm_container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 30,
    justifyContent: 'center',
  },
  req_perm_button: {
    backgroundColor: 'rgba(200, 200, 200, 0.3)',
    borderRadius: 8,
  },
  req_perm_text: {
    color: colors.white,
    fontSize: 18,
    ...GetKanitFont('regular'),
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  req_perm_text_button: {
    color: colors.white,
    fontSize: 20,
    padding: 8,
    ...GetKanitFont('medium'),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
  },
});

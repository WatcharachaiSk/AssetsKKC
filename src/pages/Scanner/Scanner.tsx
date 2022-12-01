import * as React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { DBRConfig, decode, TextResult } from 'vision-camera-dynamsoft-barcode-reader';
import * as REA from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { BarcodeFormat, useScanBarcodes } from 'vision-camera-code-scanner';
import { useIsFocused } from '@react-navigation/native';
import images from '../../config/img';
import axios from 'axios';



const { height } = Dimensions.get("window");

const Scanner = (props: any) => {
  const navigation = props.navigation;

  const [hasPermission, setHasPermission] = useState(false);
  const [barcodeResults, setBarcodeResults] = useState([] as TextResult[]);

  const devices = useCameraDevices();
  const device = devices.back;
  const isFocused = useIsFocused();

  const [isFinished, setIsFinished] = useState(false);
  const [permission, setPermission] = useState(false);

  const [itemRes, setItemRes] = useState<[]>([]);
  const [oldItem, setoldItem] = useState<[]>([]);


  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet'
  //   const config: DBRConfig = {};
  //   config.template = "{\"ImageParameter\":{\"BarcodeFormatIds\":[\"BF_QR_CODE\"],\"Description\":\"\",\"Name\":\"Settings\"},\"Version\":\"3.0\"}"; //scan qrcode only

  //   const results: TextResult[] = decode(frame, config)
  //   REA.runOnJS(setBarcodeResults)(results);
  // }, [])

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });


  // const renderScanner = () => {
  //   return (
  //     <>
  //       {permission && (
  //         <Camera
  //           style={[StyleSheet.absoluteFill, { marginVertical: height / 5 }]}
  //           device={device}
  //           isActive={isFocused}
  //           frameProcessor={frameProcessor}
  //           frameProcessorFps={1}
  //         />
  //       )}
  //       <View
  //         style={[
  //           styles.item_Line,
  //           { marginTop: props.route.params != undefined ? -20 : 0 },
  //         ]}
  //       >
  //         <Image
  //           style={{
  //             flex: 1,
  //             margin: 15,
  //             width: undefined,
  //             top: height < 600 ? 12 : 5,
  //           }}
  //           source={{ uri: images.scan }}
  //           resizeMode="contain"
  //         />
  //       </View>
  //       {barcodes.map((barcode: any, idx) => {
  //         let barC = "-";
  //         setTimeout(async () => {
  //           barC = barcode != undefined ? barcode.content.data.url : "-";
  //           console.log(barcode);

  //         });
  //       })}
  //     </>
  //   );
  // };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      {device != null &&
        hasPermission && (
          <>
            <Camera
              style={[StyleSheet.absoluteFill, { marginVertical: height / 5 }]}
              device={device}
              isActive={true}
              frameProcessor={frameProcessor}
              frameProcessorFps={2}
            />
          </>
        )}

      {barcodes.map((barcode: any, idx) => {
        let barC = "-";
        setTimeout(async () => {
          barC = barcode != undefined ? barcode.content.data.url : "-";
          // console.log(barC);
          if (
            barcode != undefined && barC != undefined
              
          ) {
                  navigation.navigate("DetailAfterScan")
                
          }
        });
      })}
    </SafeAreaView>
  )
}

export default Scanner

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
})
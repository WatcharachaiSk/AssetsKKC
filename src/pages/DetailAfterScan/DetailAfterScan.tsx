import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useMemo, useEffect } from 'react'
import { colors } from '../../config/colors'
import { GetKanitFont } from '../../config/fonts'
import { SafeAreaView } from 'react-native-safe-area-context'
import globleStyles from '../../config/globleStyles'
import images from '../../config/img'
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension'
import AntDesign from 'react-native-vector-icons/AntDesign'
import StatusModal from './components/StatusModal'
import { BlurView } from '@react-native-community/blur'
import ChangeLocation from './components/ChangeLocation'
import axios from 'axios'
import configAxios from '../../axios/configAxios'
import { API } from '../../axios/swr/endpoint'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Entypo from "react-native-vector-icons/Entypo";
import { launchCamera } from "react-native-image-picker";
import { color } from '@rneui/base'
import ModalFinished from '../Scanner/Modal/ModalFinished'

const DetailAfterScan = (props: any) => {



  const navigation = props.navigation;


  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [location_nameTH, setLocation_nameTH] = useState("-");
  const [valueLocations, setValueLocations] = useState<any>();
  const [modalLocations, setModalLocations] = useState(false);
  const [getUpdateItem, setGetUpdateItem] = useState<[]>();

  const [statusNew, setStatusNew] = useState<boolean>();
  console.log('statusNew==== ', statusNew);


  const itemShow = props?.route?.params.getproduct || [""];
  //console.log('itemmmmmmm==', itemShow);





  //Set Status
  let statusItem;
  if (itemShow.status_item == true || statusNew == true) {
    //console.log('statusItem=', itemShow.status_item);
    statusItem = "ปกติ";
  } else if (itemShow.status_item == false || statusNew == false) {
    // console.log('statusItem==', itemShow.status_item);
    statusItem = "ชำรุด";
  }

  useEffect(() => {
    if (!statusNew) {
      setStatusNew(itemShow.status_item)
    } else {
      setStatusNew(statusNew)
    }
  }, [])

  // console.log('statusitem==== ', statusItem);



  const onScanAgain = () => {
    setShowSuccess(false);
    navigation.navigate("Scanner");
  }

  const onClickSave = async () => {
    setShowSuccess(true);
    var data = {
      itemItemId: itemShow?.item_id,
      locationLId: !valueLocations ? "" : valueLocations,
      status: statusNew,
      note: detailProblem + " แก้ไขโดย Mobile"
    };


    //const note = `${detailProblem} แก้ไขโดย Mobile`;
    const res = await axios(await configAxios('post', `${API.updateStetus}`, data));
    setResData(res);
    console.log('res== ', res);

    setAfterSelectStatus({
      ...afterSelectStatus,
    });

  };

  const onClickCheckStatus = () => {
    setShowModal(true);
  }
  const onConfirm = async () => {
    setShowSuccess(false);
  };

  const onClose = () => {
    setShowModal(false);
    setOpen({ ...open, showModalStatus: false })
  };

  const closeLocations = () => {
    setModalLocations(false);
  };

  const checkValueModal = (item: any) => {
    setModalLocations(false);
    setValueLocations(item.l_id);
    setLocation_nameTH(item.nameTH);
  };

  //let nameItem = itemShow?.nameTH

  const [imageProblem, setImageProblem] = useState({
    image1: null,

  });

  const [open, setOpen] = useState({
    showModalStatus: false,
    showExpanded: false,
  });

  const [detailProblem, setDetailProblem] = useState("");

  const [afterSelectStatus, setAfterSelectStatus] = useState({ showImageProblem: false, });




  useMemo(async () => {
    let res = await axios(await configAxios('get', `${API.getLocation}`));
    if (res != null || res != undefined || res.status != 200) {
      if (res.data[0].building != undefined || res.data[0].building != null) {
        setLocation_nameTH(
          res.data[0].nameTH +
          " " +
          res.data[0].building.nameTH +
          " ชั้น" +
          res.data[0].floor
        );
      } else {
        setLocation_nameTH(res.data[0].nameTH);
      }

      setValueLocations(res.data[0].id);
      //console.log('res.data =', res.data);
    } else {
      return Alert.alert("มีบางอย่างผิดปกติ");
    }
  }, []);




  const onPressConfirm = async () => {
    //setShowModal(true);


  };

  const setResData = async (res: any) => {
    setGetUpdateItem(res);
  };


  const boxImage = (image: any) => {
    return (
      <View style={styles.imageCamera}>
        {image ? (
          <View style={{ flex: 1 }}>
            <Entypo
              name="circle-with-cross"
              size={20}
              color={colors.red}
              style={styles.iconCancelImage}
              onPress={() => {
                image == imageProblem.image1
                setImageProblem({ ...imageProblem, image1: null })
              }}
            />
            <Image
              source={{ uri: image.uri }}
              style={{ flex: 1, borderRadius: 10 }}
            />
          </View>
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Entypo name="camera" size={40} />
          </View>
        )}
      </View>
    );
  };

  const openCamera = (index: any) => {
    const option: any = {
      mediaType: "photo",
      quality: 1,
    };
    launchCamera(option, (res) => {
      if (res.didCancel) {
        console.log("user cancelled image");
      } else if (res.errorCode) {
        Alert.alert(
          "เพิ่มรูปภาพไม่สำเร็จ",
          "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
          [{ text: "OK", onPress: () => { } }]
        );
      } else {
        const data = res.assets[0];
        {
          switch (index) {
            case 1:
              setImageProblem({ ...imageProblem, image1: data });
              break;
            default:
              break;
          }
        }
      }
    });
  };

  const showSelectImage = () => {
    return (
      <View>
        <View style={styles.line} />
        <View>
          <Text style={styles.titleProblem}>รูปประกอบการชำรุด</Text>
          <View style={styles.rowImages}>
            <Pressable onPress={() => openCamera(1)}>
              {boxImage(imageProblem.image1)}
            </Pressable>
          </View>
        </View>
        <View style={styles.description_Container}>
          <Text style={styles.titleProblem}>คำอธิบาย</Text>
          <TextInput
            placeholder="เพิ่มรายละเอียดอย่างน้อย 10 ตัวอักษร"
            onChangeText={setDetailProblem}
            value={detailProblem}
            multiline
            style={styles.inputDetailProblem}
          />
        </View>
      </View>
    );
  };

  // const conditionSave =
  //   detailProblem.length > 10 &&
  //   (imageProblem.image1);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      {/* BottomSheetเปลี่ยนสถานที่ */}
      <ChangeLocation
        location_Old={location_nameTH}
        modalLocations={modalLocations}
        closeLocations={closeLocations}
        checkValueModal={checkValueModal} />

      <StatusModal
        valueLocations={valueLocations}
        setResData={setResData}
        idItem={itemShow != undefined ? itemShow.id : 1}
        showModal={showModal}
        onClose={onClose}
        closeModal={() => setOpen({ ...open, showModalStatus: false })}
        setStatusNew={setStatusNew}

        showImportImages={(props: any) =>
          setAfterSelectStatus({
            ...afterSelectStatus,
            showImageProblem: true,
          })
        }
      />

      {showModal
        && (
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="gray"
          />
        )}
      <ModalFinished
        showSuccess={showSuccess}
        statusNew={statusNew}
        setShowSuccess={setShowSuccess}
        onClose={onClose}
        onScanAgain={onScanAgain}
        oldItem={itemShow}

      />{showSuccess
        && (
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="gray"
          />
        )}



      <ScrollView>
        <View style={globleStyles.headers}>
          <Text style={globleStyles.texthead}>รายละเอียดครุภัณฑ์</Text>
        </View>

        {/* ---content--- */}

        {/* image */}
        <View style={{ flex: 2, alignItems: 'center' }}>
          <View style={{ backgroundColor: colors.white, flex: 1, width: widthOfWindow * 0.9, height: heightOfWindow * 0.3, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={images.monitor} style={{ width: widthOfWindow * 0.8, height: heightOfWindow * 0.3 }} />
          </View>
        </View>


        <View style={{ alignItems: 'center' }}>
          <View style={{ backgroundColor: '#000', flex: 6, width: widthOfWindow * 0.95, borderRadius: 25 }}>
            {/* <View style={{ backgroundColor: colors.Gray, padding: 3, margin: 10, marginHorizontal: 150, borderRadius: 20 }}></View> */}

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <View style={{ flex: 1, margin: 20, }}>
                <Text style={globleStyles.fontTitleDT}>{itemShow?.name}</Text>

              </View>

              {/* status */}
              <View style={{ flex: 0, width: widthOfWindow * 0.3, alignItems: 'center' }}>
                <View style={{
                  width: widthOfWindow * 0.135, height: heightOfWindow * 0.07,
                  backgroundColor:
                    statusNew == true
                      ? colors.greenConfirm
                      : colors.red,
                  borderRadius: 60
                }}></View>
                <Text style={globleStyles.fontstatus}>{statusNew ? "ปกติ" : "ชำรุด"}</Text>
              </View>
            </View>

            <View style={globleStyles.line}></View>
            <View style={{ marginHorizontal: 15 }}>
              <View style={{ marginVertical: 5 }}>
                <Text style={globleStyles.fonts}>ผู้ดูแล : {itemShow?.profile?.firstname} {itemShow?.profile?.lastname}</Text>
              </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={globleStyles.fonts}>รหัสครุภัณฑ์ : {itemShow?.code}</Text>
              </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={globleStyles.fonts}>หมวดหมู่ครุภัณฑ์ : {itemShow?.typeitem?.name} </Text>
              </View>
            </View>

            {/* รายละเอียดเพิ่มเติม */}
            <View style={{ flex: 1 }}>
              <View style={styles.item_BoxDetail}>
                <View style={styles.rowDetail}>
                  <Text style={globleStyles.fonts}>รายละเอียดครุภัณฑ์ : {itemShow?.description} </Text>
                </View>
                <View style={styles.rowDetail}>
                  <Text style={globleStyles.fonts}>วันที่รับเข้า : {itemShow?.up_date_statuses[0].inspected_at}</Text>
                </View>

                <View style={styles.rowDetail}>
                  <Text style={globleStyles.fonts}>สถานที่ : {location_nameTH} </Text>
                </View>
                <View style={styles.rowDetail}>
                  <Text style={globleStyles.fonts}>ตรวจสอบครั้งล่าสุด : {itemShow?.up_date_statuses[0].updatedAt} </Text>
                </View>
                <View style={styles.rowDetail}>
                  <Text style={globleStyles.fonts}>หมายเหตุ : {itemShow?.up_date_statuses[0].note}</Text>
                </View>


                {/* List Detail */}
                {statusNew == false
                  &&
                  afterSelectStatus.showImageProblem && showSelectImage()
                }

                {/* button */}
                <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'center' }}>

                  {/* เปลี่ยนสถานที่ */}

                  <TouchableOpacity
                    onPress={() => this.Scrollable.open()}

                    style={[styles.buttonStatus, { backgroundColor: '#fff' }]}>
                    <Text style={styles.fontBTStatus}>เปลี่ยนสถานที่</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setTimeout(async () => {
                        //onPressConfirm();
                        onClickCheckStatus();

                      }, 500);
                    }}
                    style={[styles.buttonStatus,
                    {
                      backgroundColor: colors.Gray
                    }]}
                  >

                    <Text style={styles.fontBTStatus}>
                      ตรวจสอบสถานะ

                    </Text>
                  </TouchableOpacity>
                </View>

              </View>

            </View>

          </View>
        </View>


        {/* buttonSave */}
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              onPressConfirm();
              onClickSave()
            }}

            style={[styles.btnConfirm,
            {
              backgroundColor: colors.greenConfirm
            }]}
          >
            <Text style={[styles.fontBTStatus, {
              color: colors.white, fontSize: 20
            }
            ]}>
              บันทึก
            </Text>
          </TouchableOpacity>
        </View>



      </ScrollView>

    </SafeAreaView>
  )
}

export default DetailAfterScan

const styles = StyleSheet.create({
  item_BoxDetail: {
    marginBottom: 5,
    marginHorizontal: 15,

  },
  rowDetail: {
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  view_containerNote: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    borderColor: colors.Gray,
  },
  fontShow: {
    fontSize: 16,
    color: "gray",
    ...GetKanitFont("regular"),
  },
  titleProblem: {
    fontSize: 16,
    marginBottom: 10,
    ...GetKanitFont("regular"),
    color: '#fff'
  },
  rowImages: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputDetailProblem: {
    height: 65,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.Gray,
    ...GetKanitFont("regular"),
    backgroundColor: colors.white
  },
  iconCancelImage: {
    position: "absolute",
    right: 10,
    zIndex: 10,
    top: 3,
  },
  imageCamera: {
    backgroundColor: colors.Gray,
    width: 100,
    height: 100,
    elevation: 3,
    borderRadius: 10,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
  },
  buttonStatus: {
    //backgroundColor: colors.Gray,
    padding: 12,
    //marginHorizontal: 40,
    margin: 2,
    borderRadius: 10,
    width: widthOfWindow * 0.43,
    height: heightOfWindow * 0.07,


  },
  fontBTStatus: {
    fontSize: 18,
    ...GetKanitFont('regular'),
    textAlign: 'center',
    color: '#000'
  },
  centerView: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    zIndex: 999,
  },
  btnConfirm: {
    flex: 0,
    width: widthOfWindow * 0.9,
    height: heightOfWindow * 0.08,
    paddingVertical: 15,
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 10,
    elevation: 6,
    margin: 20,

  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 10,
  },
  textBtn: {
    fontSize: 18,
    ...GetKanitFont("medium"),
    color: colors.white,
  },
  description_Container: {
    marginVertical: 10,
  },

})
import { StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../config/colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { GetKanitFont } from '../../../config/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { heightOfWindow, widthOfWindow } from '../../../utils/getDimension';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios';
import configAxios from '../../../axios/configAxios';
import { API } from '../../../axios/swr/endpoint';

const { height, width } = Dimensions.get("window");

const StatusModal = (props: any) => {

  const { showModal,
    onClickCheckStatus,
    onConfirm,
    onClose,
    setShowModal,
    idItem,
    setResData,
    closeModal,
    valueLocations,
    showImportImages,
    setStatusNew, itemShow } = props;


  const productHaveProblem = () => {
    return onClose(), setStatusNew(false), showImportImages(true);
  };



  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true || false}
        visible={showModal}
        onRequestClose={onClose}>


        <View style={styles.containerModal}>
          <View style={styles.viewDetailModal}>
            <View style={{ alignSelf: 'flex-end', flex: 0, margin: 5 }}>
              <TouchableOpacity
                onPress={() => {
                  onClose();
                }}
              >
                <Ionicons name='close' size={40} />
              </TouchableOpacity>

            </View>

            <View style={{ justifyContent: "center" }}>
              <Text style={{ ...GetKanitFont('medium'), fontSize: 22, color: '#000' }}>กรุณาเลือกสถานะของครุภัณฑ์</Text>
            </View>


            {/* status */}
            <View style={{ flex: 1, margin: 5,alignItems:'center'}}>
              <View style={styles.status}>
                <TouchableOpacity
                  onPress={() => {
                    setStatusNew(true)
                    onClose()
                  }}
                  style={{flexDirection:'row'}}
                >
                  <View style={[styles.itemStatus, {
                    backgroundColor:
                      colors.greenConfirm,
                  }]}>
                    <View style={styles.viewIcon}>
                      <AntDesign name='check' size={30} color={'#000'} />
                    </View>
                  </View>
                  <View style={{ alignItems: 'center',justifyContent:'center' }} >
                    <Text style={styles.texts}>ปกติ</Text>
                  </View>

                </TouchableOpacity>

              </View>

              <View style={styles.status}>
                <TouchableOpacity
                  onPress={() => productHaveProblem()}
                  style={{flexDirection:'row'}}
                >
                  <View style={[styles.itemStatus, { backgroundColor: colors.red }]}>
                    <View style={styles.viewIcon}>
                      <FontAwesome5 name='tools' size={20} color={'#000'} />
                    </View>
                  </View>
                  <View style={{ alignItems: 'center',justifyContent:'center' }} >
                    <Text style={styles.texts}>ชำรุด</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.status}>
                <TouchableOpacity
                  onPress={() =>  
                   { setStatusNew(2)
                    onClose()}}
                  style={{flexDirection:'row'}}
                >
                  <View style={[styles.itemStatus, { backgroundColor: colors.statusColor2 }]}>
                    <View style={styles.viewIcon}>
                      <AntDesign name='CodeSandbox' size={25} color={'#000'} />
                    </View>
                  </View>
                  <View style={{ alignItems: 'center' ,justifyContent:'center'}} >
                    <Text style={styles.texts}>รอจำหน่าย</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.status}>
                <TouchableOpacity
                  onPress={() => { setStatusNew(3)
                    onClose()}}
                  style={{flexDirection:'row'}}
                >
                  <View style={[styles.itemStatus, { backgroundColor: colors.statusColor3 }]}>
                    <View style={styles.viewIcon}>
                      <MaterialCommunityIcons name='cart-check' size={25} color={'#000'} />
                    </View>
                  </View>
                  <View style={{ alignItems: 'center',justifyContent:'center' }} >
                    <Text style={styles.texts}>จำหน่ายแล้ว</Text>
                  </View>
                </TouchableOpacity>
              </View>


            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default StatusModal

const styles = StyleSheet.create({


  containerModal: {
    flex:2,
    alignItems: "center",
    justifyContent: "center",


  },
  viewDetailModal: {
    flex: 0,
    backgroundColor: colors.white,
    alignItems: "center",
    // backgroundColor:'red',
    //  margin: 30,
    borderRadius: 20,
    width: widthOfWindow * 0.9,
    height: heightOfWindow * 0.48,
   justifyContent:'center'


  },
  itemStatus: {
    width: widthOfWindow * 0.10,
    height: heightOfWindow * 0.05,
    borderRadius: 50,
    margin: 5,
    flex:0,

   

  },
  viewIcon: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  texts: {
    ...GetKanitFont('regular'), fontSize: RFPercentage(2.3)
  },
  status : {
    flex: 0,
    borderColor: colors.Gray ,
    borderWidth:1 ,
    margin:5,
    borderRadius:10,
    width:widthOfWindow*0.7,
  }
})
import { StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../config/colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { GetKanitFont } from '../../../config/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { heightOfWindow, widthOfWindow } from '../../../utils/getDimension';
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
    setStatusNew,itemShow } = props;


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
            <View style={{ flex: 0, flexDirection: 'row' }}>
              <View style={{ flex: 0, margin: 10, }}>
                <TouchableOpacity
                  onPress={() => {
                    setStatusNew(true)
                    onClose()
                  }}
                >
                  <View style={[styles.itemStatus, {
                    backgroundColor:
                      colors.greenConfirm
                  }]}>
                    <View style={styles.viewIcon}>
                      <AntDesign name='check' size={60} color={'#000'} />
                    </View>
                  </View>
                  <View style={{ alignItems: 'center' }} >
                    <Text style={styles.texts}>ปกติ</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <View style={{ flex: 0, margin: 10, }}>
                <TouchableOpacity
                  onPress={() => productHaveProblem()}
                >
                  <View style={[styles.itemStatus, { backgroundColor: colors.red }]}>
                    <View style={styles.viewIcon}>
                      <FontAwesome5 name='tools' size={40} color={'#000'} />
                    </View>
                  </View>
                  <View style={{ alignItems: 'center' }} >
                    <Text style={styles.texts}>ชำรุด</Text>
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",


  },
  viewDetailModal: {
    flex: 0,
    backgroundColor: colors.white,
    alignItems: "center",
    margin: 20,
    borderRadius: 20,
    width: widthOfWindow * 0.85,

  },
  itemStatus: {
    width: widthOfWindow * 0.24,
    height: heightOfWindow * 0.12,
    borderRadius: 50,
    margin: 10
  },
  viewIcon: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  texts: {
    ...GetKanitFont('regular'), fontSize: 18
  }
})
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useMemo, useState } from 'react'
import { GetKanitFont } from '../../../config/fonts'
import globleStyles from '../../../config/globleStyles'
import { widthOfWindow } from '../../../utils/getDimension'
import RBSheet from 'react-native-raw-bottom-sheet';
import DropDownPicker from 'react-native-dropdown-picker'
import Entypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from '../../../config/colors'
import _ from 'lodash'
import { API } from '../../../axios/swr/endpoint'
import { RFPercentage } from 'react-native-responsive-fontsize'
import axios from 'axios'
import configAxios from '../../../axios/configAxios'
import { ArrDropDownLocations } from '../../../config/arrDropDown'

// const { height } = Dimensions.get("window");
const ChangeLocation = (props: any) => {
    const { modalLocations, closeLocations, location_Old, checkValueModal, } =
        props;

    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
    };

    const [openLocations, setOpenLocations] = useState(false);
    const [valueLocations, setValueLocations] = useState(null);
    const [itemsLocations, setItemsLocations] = useState([]);
    const [location_New, setLocation_New] = useState("-");
    //const [getLocation, setGetLocation] = useState<any>();

    //console.log(valueLocations);
   // console.log(itemsLocations);



    useMemo(async () => {
        let res:any = await axios(await configAxios('get', `${API.getLocation}`));
        if (res != null || res != undefined || res.status != 200) {

            let dataJoin:any = await ArrDropDownLocations(res.data);
            setItemsLocations(dataJoin);
        } else {
            return Alert.alert("มีบางอย่างผิดปกติ");
        }
    }, []);


    const changeName = (value: number) => {
        //console.log(value);

        let nameNew = null;
        nameNew = _.filter(itemsLocations, (data: any) => {
            return data.value == value;
        });
        setLocation_New(nameNew[0].label);
    };
    //console.log(location_New);

    const sendDetail = (nameTH: string, l_id: number) => {
        let joinLocation = [];
        joinLocation.push({
            nameTH: nameTH,
            l_id: l_id,
        });
        checkValueModal(joinLocation[0]);
    };

    return (
        <View style={{ flex: 1, margin: 10 }}>

            <RBSheet
                closeDuration={350}
                // visible={modalLocations || false}
                ref={ref => {
                    this.Scrollable = ref;
                }}
                // closeOnPressMask={true}
                closeOnDragDown={true}
                openDuration={250}
                tionType='slide'
                customStyles={{
                    container: {
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: '#fff',
                        height:  550,
                    }

                }}


            >
                <View style={{ flex: 8 }} >
                    <View style={{ flex: 1, margin: 15, }}>
                        <Text style={[globleStyles.fontTitleDT, { color: '#000', textAlign: 'center' }]}>กรุณาเลือกสถานที่</Text>
                        <Text style={[globleStyles.textID, { color: '#000', textAlign: 'left', margin: 10 }]}>สถานที่เดิม</Text>

                        <View style={{ flex: 0, justifyContent: 'center', margin: 15 }}>
                            <Text style={{ fontSize: RFPercentage(3.2), textAlign: 'center', ...GetKanitFont('regular') }}>{location_Old}</Text>
                        </View>

                        <Text style={[globleStyles.textID, { color: '#000', textAlign: 'left', margin: 10 }]}>ต้องการเปลี่ยนเป็น</Text>
                        <View style={{ flex: 0, justifyContent: 'center', margin: 15 }}>

                            <DropDownPicker
                                // key={}
                                zIndex={999}
                                listMode="SCROLLVIEW"
                                textStyle={{
                                    ...GetKanitFont("light"),
                                    fontSize: 18,
                                }}
                                TickIconComponent={() => (
                                    <Icon
                                        name="checkcircleo"
                                        size={20}
                                        color={colors.greenConfirm}
                                    />
                                )}
                                tickIconStyle={{}}
                                open={openLocations}
                                value={valueLocations}
                                items={itemsLocations}
                                setOpen={setOpenLocations}
                                setValue={setValueLocations}
                                //setItems={setItemsLocations}
                                placeholder={"Locations"}
                                onChangeValue={() => {
                                    changeName(valueLocations);
                                }}
                                arrowIconContainerStyle={{ right: 10 }}
                                containerStyle={{}}
                                ArrowDownIconComponent={() => (
                                    <Entypo
                                        name="chevron-thin-down"
                                        size={20}
                                        color={colors.black}
                                    />
                                )}
                                ArrowUpIconComponent={() => (
                                    <Entypo
                                        name="chevron-thin-up"
                                        size={20}
                                        color={colors.black}
                                    />
                                )}
                            />




                            <View style={styles.view_Save}>
                                <TouchableOpacity
                                    onPress={() =>
                                        valueLocations != null &&
                                        [sendDetail(location_New, valueLocations),
                                        this.Scrollable.close(),
                                    ]
                                    }

                                    style={[
                                        styles.touch_Save,
                                        {
                                            backgroundColor:
                                                valueLocations != null
                                                    ? colors.greenConfirm
                                                    : colors.Gray,
                                        },
                                    ]}
                                >
                                    <Text style={styles.font_Save}>
                                        {valueLocations != null ? `บันทึก` : `กรุณาเลือก`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>

                </View>

            </RBSheet>
        </View>
    )
}

export default ChangeLocation

const styles = StyleSheet.create({
    line: {
        padding: 0.5,
        width: widthOfWindow * 0.9,
        backgroundColor: '#000',
        alignSelf: 'center',
        marginVertical: 10
    },
    view_Save: {
        flex: 0,
        marginTop: Dimensions.get("window").height / 5,
        // backgroundColor:'#000'
    },
    touch_Save: {
        zIndex: 550,
        borderRadius: 8,
        alignItems: "center",
        paddingVertical: 10,
    },
    font_Save: {
        color: colors.white,
        ...GetKanitFont("regular"),
        fontSize: RFPercentage(3),
    },

})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../config/colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { ScrollView } from 'react-native-gesture-handler';


const Touchtype = (props: any) => {
    const { isTouch, setTouchType } = props;
    return (
        <>
           
                <TouchableOpacity
                    onPress={() => setTouchType("office")}
                    style={[styles.types,
                    {
                        backgroundColor: isTouch == "office" ? colors.blackGray : colors.Gray
                    },
                    ]}
                >
                    <Text
                        style={[styles.textType, {
                            color: isTouch == "office" ? colors.white : colors.black
                        },
                        ]}
                    >
                        ครุภัณฑ์สำนักงาน
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setTouchType("computer")}
                    style={[styles.types,
                    {
                        backgroundColor: isTouch == "computer" ? colors.blackGray : colors.Gray
                    },
                    ]}
                >
                    <Text style={[styles.textType, {
                        color: isTouch == "computer" ? colors.white : colors.black
                    },
                    ]}
                    >
                        ครุภัณฑ์คอมพิวเตอร์</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTouchType("education")}
                    style={[styles.types,
                    {
                        backgroundColor: isTouch == "education" ? colors.blackGray : colors.Gray
                    },
                    ]}
                >
                    <Text style={[styles.textType, {
                        color: isTouch == "education" ? colors.white : colors.black
                    },
                    ]}
                    >
                        ครุภัณฑ์การศึกษา
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTouchType("advertise")}
                    style={[styles.types,
                    {
                        backgroundColor: isTouch == "advertise" ? colors.blackGray : colors.Gray
                    },
                    ]}
                >
                    <Text style={[styles.textType, {
                        color: isTouch == "advertise" ? colors.white : colors.black
                    },
                    ]}
                    >
                        ครุภัณฑ์โฆษณาและเผยแพร่
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTouchType("electric")}
                    style={[styles.types,
                    {
                        backgroundColor: isTouch == "electric" ? colors.blackGray : colors.Gray
                    },
                    ]}
                >
                    <Text style={[styles.textType, {
                        color: isTouch == "electric" ? colors.white : colors.black
                    },
                    ]}
                    >ครุภัณฑ์ไฟฟ้าและวิทยุ</Text>
                </TouchableOpacity>





                <TouchableOpacity onPress={() => setTouchType("electric2")}
                    style={[styles.types,
                    {
                        backgroundColor: isTouch == "electric2" ? colors.blackGray : colors.Gray
                    },
                    ]}
                >
                    <Text style={[styles.textType, {
                        color: isTouch == "electric2" ? colors.white : colors.black
                    },
                    ]}
                    >ครุภัณฑ์ไฟฟ้าและวิทยุ2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTouchType("electric21")}
                    style={[styles.types,
                    {
                        backgroundColor: isTouch == "electric21" ? colors.blackGray : colors.Gray
                    },
                    ]}
                >
                    <Text style={[styles.textType, {
                        color: isTouch == "electric21" ? colors.white : colors.black
                    },
                    ]}
                    >ครุภัณฑ์ไฟฟ้าและวิทยุ21</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTouchType("electric22")}
                    style={[styles.types,
                    {
                        backgroundColor: isTouch == "electric22" ? colors.blackGray : colors.Gray
                    },
                    ]}
                >
                    <Text style={[styles.textType, {
                        color: isTouch == "electric22" ? colors.white : colors.black
                    },
                    ]}
                    >ครุภัณฑ์ไฟฟ้าและวิทยุ22</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTouchType("electric23")}
                    style={[styles.types,
                    {
                        backgroundColor: isTouch == "electric23" ? colors.blackGray : colors.Gray
                    },
                    ]}
                >
                    <Text style={[styles.textType, {
                        color: isTouch == "electric23" ? colors.white : colors.black
                    },
                    ]}
                    >ครุภัณฑ์ไฟฟ้าและวิทยุ23</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTouchType("electric24")}
                    style={[styles.types,
                    {
                        backgroundColor: isTouch == "electric24" ? colors.blackGray : colors.Gray
                    },
                    ]}
                >
                    <Text style={[styles.textType, {
                        color: isTouch == "electric24" ? colors.white : colors.black
                    },
                    ]}
                    >ครุภัณฑ์ไฟฟ้าและวิทยุ24</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTouchType("electric25")}
                    style={[styles.types,
                    {
                        backgroundColor: isTouch == "electric25" ? colors.blackGray : colors.Gray
                    },
                    ]}
                >
                    <Text style={[styles.textType, {
                        color: isTouch == "electric25" ? colors.white : colors.black
                    },
                    ]}
                    >ครุภัณฑ์ไฟฟ้าและวิทยุ2</Text>
                </TouchableOpacity> 
          
        </>
    )
}

export default Touchtype

const styles = StyleSheet.create({
    types: {
        padding: 10, backgroundColor: colors.Gray,
        flex:0

    },
    textType: {
        // ...GetKanitFont("medium"),
        fontSize: RFPercentage(2.2),
        textAlign: 'left'
    },
})
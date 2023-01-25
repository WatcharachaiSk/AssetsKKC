import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { colors } from '../../../config/colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import configAxios from '../../../axios/configAxios';
import { API } from '../../../axios/swr/endpoint';
import _ from 'lodash';
import { items } from '../../../assets/json/items';
import { GetKanitFont } from '../../../config/fonts';


const Touchtype = (props: any) => {

    const { setGetItems } = props;

    const [isTouch, setIsTouch] = useState<any>("all");
    const [getCategory, setGetCategory] = useState<any>();



    useMemo(async () => {
        try {
            const res = await axios(await configAxios('get', `${API.getCategory}`))
            // console.log(res?.data);
            setGetCategory(res?.data);
            setIsTouch(res.data[0].cate_id)
            setGetItems(res.data[0]?.items)
        } catch (error) {
            console.log(error);

        }
    }, [])

    const switchCategory = (cate_id: number) => {

        let setData = _.filter(getCategory, (data: any) => {
            return data?.cate_id == cate_id;

        })
        setGetItems(setData[0]?.items)
        // console.log(setData);


    }

    return (
        <>

            {_.map(
                getCategory, item => {

                    return (

                        <TouchableOpacity

                            key={item?.cate_id}

                            onPress={() => {
                                setIsTouch(item?.cate_id)
                                switchCategory(item?.cate_id)

                            }}
                            style={[styles.types,
                            {
                                backgroundColor: isTouch == item?.cate_id
                                    ? colors.blackGray
                                    : colors.Gray
                            },
                            ]}
                        >
                            <Text
                                style={[styles.textType, {
                                    color: isTouch == item?.cate_id
                                        ? colors.white
                                        : colors.black
                                },
                                ]}
                            >
                                {item?.name}
                            </Text>
                            <Text style={[styles.textType, { fontSize: RFPercentage(2) }]}>หน่วยงาน {item?.department?.nameTH}</Text>

                        </TouchableOpacity>
                    )
                })}
        </>
    )
}

export default Touchtype

const styles = StyleSheet.create({
    types: {
        padding: 10, backgroundColor: colors.Gray,
        flex: 0

    },
    textType: {
        // ...GetKanitFont("medium"),
        fontSize: RFPercentage(2.2),
        textAlign: 'left',
        ...GetKanitFont("regular")
    },
})
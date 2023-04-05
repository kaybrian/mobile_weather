import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import * as Icons from "react-native-heroicons/solid";
import { useSelector } from 'react-redux';
import { getUserLocation,userCods } from '../Slices/LocationSlice';
import moment from 'moment';
import Weekly from '../Components/Weekly';
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "001",
        temp: 23,
        date: "21 Jan"
    },
    {
        id: "002",
        temp: 20,
        date: "22 Jan"
    },
    {
        id: "003",
        temp: 10,
        date: "23 Jan"
    },
    {
        id: "004",
        temp: 11,
        date: "24 Jan"
    },
    {
        id: "005",
        temp: 9,
        date: "25 Jan"
    },
    {
        id: "006",
        temp: 7,
        date: "26 Jan"
    }
]

const HomeScreen = () => {
    const getLocation = useSelector(getUserLocation);

    return (
        <SafeAreaView style={tw`bg-[#FFE142] pb-10 mb-10`}>

            <View style={tw`flex flex-row ml-2 px-3 flex-grow-1 py-6`}>
                <Icons.Bars2Icon
                    size={35}
                    color="#121212"
                />
                <Text style={tw`text-2xl grow font-extrabold items-center pl-28`}>{getLocation.city}</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} className="pb-10">

                <View style={tw`mt-3 px-4 items-center`}>
                    <View style={tw`bg-black py-2 px-5 rounded-full `}>
                        <Text style={tw`text-sm font-light text-[#FFE142] `}>Monday, 23 2023</Text>
                    </View>
                    <View style={tw`mt-2 mb-2`}>
                        <Text style={tw`text-lg font-semibold`}>Sunny</Text>
                    </View>
                    <View style={tw``}>
                        <Text style={tw`font-semibold -mr-9 text-[150px]`}>34{`\u00B0`}</Text>
                    </View>
                </View>

                <View style={tw`px-4`}>
                    <Text style={tw`text-lg font-bold py-2`}>Daily Summary</Text>
                    <Text style={tw`text-sm font-medium  mb-3 leading-5`}>If you do not see some of the parameters in your API response it means that these weather phenomena are just not happened for the time of measurement for the city or location chosen</Text>
                </View>

                <View style={tw` px-4 py-2`}>
                    <View style={tw`bg-black rounded-md mb-2 w-full p-3 flex flex-row items-center`}>
                        <View style={tw`px-4 pt-4 basis-1/3 items-center mb-3`}>
                            <Icon
                                name='flash-outline'
                                type='ionicon'
                                color="#FFE142"
                                size={35}
                            />
                            <Text style={tw`text-[#FFE142] pt-2 text-lg font-semibold`}>4 KM/h</Text>
                            <Text style={tw`text-[#FFE142] text-xs font-semibold`}>4 KM/h</Text>
                        </View>
                        <View style={tw`px-4 pt-4 basis-1/3 items-center mb-3`}>
                            <Icon
                                name='water-outline'
                                type='ionicon'
                                color="#FFE142"
                                size={35}
                            />

                            <Text style={tw`text-[#FFE142] pt-2 text-lg font-semibold`}>4 KM/h</Text>
                            <Text style={tw`text-[#FFE142] text-xs font-semibold`}>4 KM/h</Text>
                        </View>
                        <View style={tw`px-4 pt-4 basis-1/3 items-center mb-3`}>
                            <Icons.EyeIcon
                                color="#FFE142"
                                size={30}
                            />
                            <Text style={tw`text-[#FFE142] pt-2 text-lg font-semibold`}>4 KM/h</Text>
                            <Text style={tw`text-[#FFE142] text-xs font-semibold`}>4 KM/h</Text>
                        </View>
                    </View>
                </View>

                <View style={tw`mt-1 px-4`}>
                    <View style={tw`flex flex-row ml-2 items-center justify-between`}>
                        <Text style={tw`font-semibold text-lg pb-1`}>Weekly Forecast</Text>
                        <Icons.ArrowRightIcon
                            size={35}
                            color="black"
                        />
                    </View>
                    <ScrollView
                        style={tw`pb-10`}
                        horizontal
                        showsHorizontalScrollIndicator={false}

                    >
                        {
                            data?.map((item) => (
                                <Weekly
                                key={item.id}
                                />
                            ))
                        }

                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

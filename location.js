import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLocation, getLocationStatus, getUserLocation } from './Slices/LocationSlice';
import publicIP from 'react-native-public-ip';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


import tw from 'twrnc';


const Location = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const locationstatus = useSelector(getLocationStatus);
    const realLocation = useSelector(getUserLocation)
    const [userip, seUsertIp] = useState(null)

    useEffect(() => {
        publicIP()
            .then(ip => {
                // console.log(ip);
                seUsertIp(ip)
            })
            .catch(error => {
                console.log(error);
                // 'Unable to get IP address.'
            });

        if (locationstatus === "idle") {
            setTimeout(() => {
                console.log('fetching')
                dispatch(getLocation(userip))
            }, 5000)
        } else if (locationstatus === 'succeeded') {
            // console.log(realLocation)
            navigation.navigate('HomeScreen', {
                location:realLocation
            })
        } else if (locationstatus === 'failed') {
            console('error')
        }

    }, [locationstatus, dispatch])

    return (
        <SafeAreaView style={tw`bg-[#000] flex-1 justify-center items-center`}>
            <Animatable.Image
                source={require('./assets/loading.gif')}
                animation="slideInUp"
                iterationCount={1}
                style={tw`h-96 w-96`}
            />
            <Animatable.Text
                animation="pulse"
                easing="ease-out"
                iterationCount={1}
                style={{ textAlign: 'center', color: "white" }}
            >
                Just a moment ....
            </Animatable.Text>

        </SafeAreaView>
    )
}

export default Location

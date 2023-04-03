import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLocation, getLocationStatus, getUserLocation } from './Slices/LocationSlice';
import publicIP from 'react-native-public-ip';

const Location = () => {
    const dispatch = useDispatch();
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
            console.log(realLocation)
        } else if (locationstatus === 'failed') {
            console('error')
        }

    }, [locationstatus, dispatch])

    return (
        <View>
            <Text>just data</Text>
        </View>
    )
}

export default Location

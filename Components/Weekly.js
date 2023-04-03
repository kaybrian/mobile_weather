import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import * as Icons from "react-native-heroicons/solid";

const Weekly = () => {
    return (
        <View style={tw`border items-center border-2 rounded-md m-2 py-5 px-3`}>
            <Text>24{`\u00B0`}</Text>
            <Icons.SunIcon
                color="#121212"
                style={tw`py-1`}
            />
            <Text>24 Jan</Text>
        </View>
    )
}

export default Weekly

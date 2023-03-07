import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const ButtonRedux = () =>{

    return(
        <TouchableOpacity
            style={{
                backgroundColor: 'black',
                padding: 10,
                borderRadius: 5,
                margin: 10,
            }}
        >
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Increment</Text>
        </TouchableOpacity>
    );
};

export default ButtonRedux;
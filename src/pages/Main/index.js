import React from 'react'
import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Contador from '../../components/Contador'

function Main() {
    const navigator = useNavigation() 

    function nextScreen() {
        navigator.navigate('Users')
    }

    return(
        <View>
            <Contador />
            <Button title="Próxima tela" onPress={nextScreen} />
        </View>
    )
}

export default Main
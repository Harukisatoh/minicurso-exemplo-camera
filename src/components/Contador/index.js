import React, { useState } from 'react'
import { Text, Button, View } from 'react-native'

import styles from './styles'

function Contador() {
    const [value, setValue] = useState(0)

    function increment() {
        setValue((value) => (value + 1))
    }

    return(
        <View>
            <Text>Valor atual:</Text>
            <Text>{value}</Text>
            <Button title="Clique me!" onPress={increment} />
        </View>
    )
}

export default Contador
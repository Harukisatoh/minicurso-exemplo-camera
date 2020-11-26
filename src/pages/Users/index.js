import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, Image, ActivityIndicator } from 'react-native'

function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dummyapi.io/data/api/user', {
            headers: {
                'app-id': '5fbda228019ce38d6889dfa5'
            }
        })
            .then(response => response.json())
            .then(json => {
                setUsers(json.data)
                setLoading(false)
            }).catch(err => console.log(err))
    }, [])

    function renderItem({ item }) {
        return(
            <View style={{ margin: 10, alignItems: 'center' }}>
                <Image source={{ uri: item.picture }} style={{ width: 150, height: 150, borderRadius: 75 }}/>
                <Text>{item.firstName + ' ' + item.lastName}</Text>
            </View>
        )
    }

    return(
        <View style={{ justifyContent: 'center', flex: 1 }}>
            { loading === true ? (
                <ActivityIndicator size="large" color="#666" />
            ) : (
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            ) }

        </View>
    )
}

export default Users
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Movie = () => {
    const [searchText, setSearchText] = useState('');
    const handlesearchInput = (inputText) => {
        setSearchText(inputText);
    }
    const handlesearchPress = () => {
        console.log(searchText);
        setSearchText('');
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder='movie name'
                placeholderTextColor='#87CEEB'
                value={searchText}
                onChangeText={handlesearchInput}
            />
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.buttonText} onPress={handlesearchPress}>
                    search
                </Text>
            </TouchableOpacity>
            <Text>
                {searchText && searchText}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
        alignItems: 'center'
    },
    searchInput: {
        minWidth: '85%',
        borderBottomWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 10,
        fontWeight: '500'
    },
    searchButton: {
        marginTop: 1,
        backgroundColor: '#FF5733',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 5,

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
})
export default Movie;
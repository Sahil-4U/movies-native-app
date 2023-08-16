import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to MoviesHub </Text>
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={() => navigation.navigate('Movie')} >
                <Text style={styles.btnText}>Explore</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 25,
        backgroundColor: "#FFA500",
        color: 'white',
        paddingHorizontal: 35,
        paddingVertical: 20,
        marginBottom: 10,

    },
    btn: {
        backgroundColor: '#3498db', // Button background color
        borderRadius: 8, // Rounded corners
        paddingVertical: 12, // Vertical padding
        paddingHorizontal: 20, // Horizontal padding
        shadowColor: '#000', // Shadow color
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 3, // Shadow radius
        elevation: 5, // Android shadow elevation
    },
    btnText: {
        color: '#fff', // Text color
        fontSize: 16, // Text size
        textAlign: 'center', // Text alignment
    },
});
export default Home
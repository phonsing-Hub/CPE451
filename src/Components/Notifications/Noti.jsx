import React from 'react'
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Button, Image } from 'react-native';
import { Text } from '@rneui/themed';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Noti = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerBackground}>
                <Text style={styles.headerText}>ข่าวสารรายวัน</Text>
            </View>

            <View style={[styles.section1, styles.backButton]}>
                <View style={styles.circularButton}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name='left' size={36} color={'#CA9CAC'} />
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.section}>
                <Button title="คลิกเพื่อดูข่าวสาร" onPress={() => console.log('success')} color="#78A3D4" />
            </View>


            <View style={styles.imageContainer}>
                <Image
                    source={require('../../Images/New.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>






        </SafeAreaView>



    )
}
export default Noti;

const styles = StyleSheet.create({
    image: {
        width: 390,
        height: 300, 
        borderRadius: 10,
    },
    imageContainer: {
        borderRadius: '20',
        alignItems: 'center',
        marginBottom: 0,
        marginTop: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#e7eaf6',
    },
    label: {
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        backgroundColor: '#b39ddb',
        borderColor: '#b39ddb',
        borderRadius: 15,
        padding: 10,
    },
    detailsInput: {
        textAlignVertical: 'top',
        borderColor: '#CA9CAC',
        backgroundColor: '#CA9CAC',
        width: 370, // Set the desired width
        height: 220,
    },

    section1: {
        marginBottom: 20
    },



    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2eddd', // Background color
    },
    headerBackground: {
        backgroundColor: '#a2a8d3',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
        width: 380, // Set the desired width
        height: 70,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#f2eddd', // Header text color
    },
    section: {
        marginBottom: 20, marginTop: 20
    },
    backButton: {
        position: 'absolute',
        top: 35,
        left: 30,
    },
    circularButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f2eddd',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
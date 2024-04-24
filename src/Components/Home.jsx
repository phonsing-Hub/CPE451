import {StyleSheet, SafeAreaView, View, Image,TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Text } from '@rneui/themed';
import React from 'react'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon6 from 'react-native-vector-icons/FontAwesome6'
import Icon3 from 'react-native-vector-icons/Fontisto'

export default Home = ({navigation}) => {
    const [text, onChangeText] = React.useState('');
    let usename = 'Polsing'
  return (
    
     <View style={styles.container}>
        <View style={styles.header}>
            <SafeAreaView style={styles.imag_name}>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={ navigation.navigate('Profile')}>
            <Image
                style={styles.logo}
                source={require('../Images/phonsing_.jpg')}
            />
            <View style={{width: '100%', marginLeft:20}}>
                <Text h3>Wecome</Text>
                <Text h4>{usename}</Text>
            </View>
            </TouchableOpacity>
            </SafeAreaView>
            <View style={styles.search}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='Search ...'
            />
            <TouchableOpacity style={styles.Icon1}>
                <Icon1 name='search1' size={36} color={'#000000'} />
            </TouchableOpacity>
            </View>
        </View>

        <View style={styles.rooms}>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
        <Image style={styles.roomimg} source={require('../Images/room1.jpeg')} />
        <Image style={styles.roomimg} source={require('../Images/room2.jpeg')} />
        <Image style={styles.roomimg} source={require('../Images/room3.jpeg')} />
        </ScrollView>
        </View>
        <View style={styles.menu}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('security')}>
                    <Icon6 name='shield-heart' size={36} color={'#8594e4'}/>
                    <Text>ความปลอดภัย</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('chat')}>
                    <Icon1 name='wechat' size={36} color={'#8594e4'}/>
                    <Text>แชท</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('bills')}>
                    <Icon6 name='money-bill-transfer' size={36} color={'#8594e4'}/>
                    <Text>บิลรายเดือน</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('bells')}>
                <Icon3 name='bell' size={36} color={'#8594e4'}/>
                    <Text>การเเจ้งเตื่อน</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('contract')}>
                <Icon1 name='file1' size={36} color={'#8594e4'}/>
                    <Text>ข้อมูลการเช่า</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('service')}>
                <Icon6 name='people-arrows' size={36} color={'#8594e4'}/>
                    <Text>บริการ</Text>
                </TouchableOpacity>
            </View>
        </View>

     </View>
  )};

  
const styles  = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FAF0E6'
    },
    header:{
        width: '100%',
        height: 250,
        backgroundColor: '#A19DCA'
    },
    imag_name:{
        flexDirection: 'row',
        height: 150,
        alignItems: 'center',
    },
    logo:{
        width:90,
        height:90,
        borderRadius: 10*100/2,
        objectFit:'cover',
        marginLeft:10,
    },
    search:{
        flexDirection: 'row',
        alignItems:'center',
        margin: 20,
        backgroundColor: '#fefefe',
        borderRadius:20
    },
    input: {
        height: 50,
        borderWidth: 0,
        padding: 10,
        paddingRight:50,
        fontSize: 20,
    },
    Icon1:{
        position:'absolute',
        right: 5
    },
    rooms:{
        margin:20,
        backgroundColor: '#fefefe',
        borderRadius: 20,
        overflow: 'hidden'
    },
    roomimg:{
        width: 390, 
        height: 250, 
        resizeMode: 'cover' 
    },
    menu: {
        margin: 20,
        marginTop: 5,
        backgroundColor: '#A19DCA',
        borderRadius: 20,
        padding: 20,
        paddingTop:30
    
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15
    },
    menuIcon: {
        width: '27%', // ความกว้างของแต่ละไอคอนจะเป็น 30% ของพื้นที่ทั้งหมดในแนวนอน
        aspectRatio: 1, // ให้ขนาดของไอคอนเป็นสี่เหลี่ยมจตุรัส
        backgroundColor: '#FAF0E6',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems:'center'
    }
})
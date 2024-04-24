import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Text} from '@rneui/base';
import { Camera } from 'lucide-react-native';

const Profile = ({navigation}) => {
  const [text1, onChangeText1] = React.useState('Useless Text');
  const [text2, onChangeText2] = React.useState('Useless Text');
  const [text3, onChangeText3] = React.useState('Useless Text');
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={40} />
        </TouchableOpacity>
        <Text h4> Profile</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#FAF0E6'}}>
        <View
          style={{
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../Images/phonsing_.jpg')}
            style={styles.profile}
          />
            <TouchableOpacity>
            <Camera color="#000000" size={36}/>
            </TouchableOpacity>
        </View>

        <View style={{marginTop: 50, height: 300, justifyContent: 'space-evenly'}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText1}
            value={text1}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={text2}
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeText3}
            value={text3}
          />
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 70,
    paddingBottom: 10,
    zIndex: 99,
    backgroundColor: '#A19DCA',
    alignItems: 'center',
    width: '100%',
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: (10 * 100) / 2,
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#A19DCA',
    borderRadius: 30
  },
});

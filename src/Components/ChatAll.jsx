import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import {TouchableOpacity,View, SafeAreaView,StyleSheet} from 'react-native';
import { Text } from '@rneui/base';
import {GiftedChat,InputToolbar} from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from 'firebase/firestore';
import {auth, database} from '../../config/friebase';
import Entypo from 'react-native-vector-icons/Entypo';

export default function ChatAll({navigation}) {
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chatAll');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        })),
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    const {_id, createdAt, text, user} = messages[0];
    addDoc(collection(database, 'chatAll'), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);
  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          borderRadius:16,
          margin:10
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.contialner}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Entypo name='chevron-left' size={40}/>
      </TouchableOpacity>
      </View>
      <View style={styles.headerName}>
        <Text h3>Chat</Text>
      </View>
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&s',
      }}
      containerStyle={{
        borderRadius:16,
        margin:5
      }}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contialner:{
    flex:1,
    backgroundColor: '#e7eaf6',
  },
  header:{
    flexDirection: 'row',
    padding:10,
    zIndex:99
  },
  headerName:{
    width:'100%',
    position:'absolute',
    top: 70,
    justifyContent:'center',
    alignItems: 'center'
  },
  GiftedChat:{
    height:90
  }
})
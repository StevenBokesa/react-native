import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Loading from '../../components/Loading';
import MenuImage from '../../components/MenuImage/MenuImage';
import { auth } from '../../data/firebase'
import styles from "./styles";  
import { db } from '../../data/firebase'
import Separator from '../../components/Separator/Separator';

export default function HomeScreen(props: { navigation: any }) {
    const { navigation } = props;
    const [threads, setThreads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <MenuImage
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
        headerRight: () => <View />,
      });
    }, []);

    
  
    useEffect(() => {
      const unsubscribe = db
        .collection('Groups')
        .onSnapshot((querySnapshot: { docs: any[]; }) => {
          const threads = querySnapshot.docs.map(documentSnapshot => {
            return {
              _id: documentSnapshot.id,
              // give defaults
              name: '',
              ...documentSnapshot.data()
            };
          });
  
          setThreads(threads);
  
          if (loading) {
            setLoading(false);
          }
        });
  
      /**
       * unsubscribe listener
       */
      return () => unsubscribe();
    }, []);
  
    if (loading) {
      return <Loading />;
    }


  return (
    <View style={styles.container}>
      {/*<Text>Email: {auth.currentUser?.email}</Text>*/}

      <FlatList
        data={threads}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert('Open a message thread')}>
            <View style={styles.row}>
              <View style={styles.content}>
                <View style={styles.header}>
                  <Text style={styles.nameText}>{item.name}</Text>
                </View>
                <Text style={styles.contentText}>
                  {/*{item.latestMessage.text.slice(0, 90)}*/}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>

    
  )
}


function firestore() {
  throw new Error('Function not implemented.');
}


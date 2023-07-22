import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import {CreateUser} from './src/graphql/mutations';
import {getAllUsers} from './src/graphql/queries';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';

import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);



const initialFormState = {name: '', description: ''};

const App = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetchusers();
  }, []);

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  async function fetchusers() {
    try {
      const userData = await API.graphql(graphqlOperation(getAllUsers));
      const users = userData.data.getAllUsers.items;
      setusers(users);
    } catch (err) {
      console.log('error fetching users');
    }
  }

  async function adduser() {
    try {
      if (!formState.name || !formState.description) return;
      const user = {...formState};
      setusers([...users, user]);
      setFormState(initialFormState);
      await API.graphql(graphqlOperation(CreateUser, {input: user}));
    } catch (err) {
      console.log('error creating userssssss:', err);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Pressable onPress={adduser} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Create user</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
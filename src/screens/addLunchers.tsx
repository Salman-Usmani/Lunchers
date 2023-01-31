import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {useContext, useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {LunchersContext} from '../../App';

const AddLunchers = ({navigation}: any) => {
  const {setLunchers} = useContext(LunchersContext);
  const [name, setName] = useState('');
  function AddLuncher() {
    if (name.length < 3) {
      Alert.alert('Dont be silly, enter correct name');
    } else {
      setLunchers(luncher => [
        ...luncher,
        {name: name, lunchMoney: 0, withKhana: false},
      ]);
      Alert.alert('Alert Luuncher', 'New Luncher Added', [
        {
          text: 'Ok',
          onPress: () =>
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{name: 'Home'}],
              }),
            ),
          style: 'cancel',
        },
      ]);
    }
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 5,
          marginVertical: 50,
        }}>
        <TextInput
          placeholder="Lunchers Name"
          onChangeText={text => setName(text)}
        />
      </View>
      <Button title="Add Luncher" onPress={AddLuncher} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    flex: 1,
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  highlight: {
    fontWeight: '700',
  },
});
export default AddLunchers;

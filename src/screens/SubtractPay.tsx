import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {useContext, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import {Alert} from 'react-native';
import {LunchersContext} from '../../App';

const SubtractPayment = ({route, navigation}: any) => {
  const {name} = route.params.item;
  const {lunchers} = useContext(LunchersContext);
  const [pay, setPay] = useState<number>(0);

  function handleSubtraction() {
    for (const element of lunchers) {
      if (element.name === name) {
        element.lunchMoney = element.lunchMoney - pay;
        Alert.alert('Alert', 'Lunch money subtracted', [
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
        return;
      }
    }
  }

  return (
    <SafeAreaView>
      <Text>Subtract payment from {name}</Text>
      <TextInput
        placeholder="Lunchers Name"
        onChangeText={text => setPay(Number(text))}
        keyboardType="numeric"
      />
      <Button title="subtract Pay" onPress={handleSubtraction} />
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
export default SubtractPayment;

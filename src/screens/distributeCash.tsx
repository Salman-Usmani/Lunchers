import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {useContext, useState} from 'react';
import {Alert, Button, SafeAreaView, TextInput} from 'react-native';
import {LunchersContext} from '../../App';
import {Tlunchers} from '../types';

const DistributeCash = ({navigation}: any) => {
  const {todayLunchers, setTodayLunchers, lunchers, setLunchers} =
    useContext(LunchersContext);

  const [RotiCost, setRotiCost] = useState<number>(0);
  const [SalanCost, setSalanCost] = useState<number>(0);

  function handleRotiCostDistribution() {
    if (RotiCost < 100) {
      Alert.alert('Dont be silly', "there's no way its this less");
    } else {
      let filteredArray = todayLunchers.filter(
        item => item.withKhana === false,
      );
      let costPerPerson = SalanCost / filteredArray.length;

      const updatedArray = todayLunchers.map(item => {
        return {
          ...item,
          lunchMoney: item.withKhana
            ? Math.ceil(item.lunchMoney + RotiCost / todayLunchers.length)
            : Math.ceil(
                item.lunchMoney +
                  RotiCost / todayLunchers.length +
                  costPerPerson,
              ),
        };
      });
      setTodayLunchers(updatedArray);
      const updatedLunchersPay = lunchers.map((Lunchersitem: Tlunchers) => {
        const secondaryItem = updatedArray.find(
          updatedArrayitem => updatedArrayitem.name === Lunchersitem.name,
        );
        if (secondaryItem) {
          return {
            ...Lunchersitem,
            lunchMoney: Lunchersitem.lunchMoney + secondaryItem.lunchMoney,
          };
        }
        return Lunchersitem;
      });
      setLunchers(updatedLunchersPay);
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
    <SafeAreaView>
      <TextInput
        onChangeText={text => setRotiCost(Number(text))}
        placeholder="Roti total cost"
        keyboardType="numeric"
      />
      <TextInput
        onChangeText={text => setSalanCost(Number(text))}
        placeholder="Salan total cost"
        keyboardType="numeric"
      />

      <Button
        title="distribute Roti cost"
        onPress={handleRotiCostDistribution}
      />
    </SafeAreaView>
  );
};

export default DistributeCash;

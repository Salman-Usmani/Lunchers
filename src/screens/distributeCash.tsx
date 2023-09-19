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
      let salanCostPerPerson = SalanCost / filteredArray.length;
      let rotiCostPerPerson = RotiCost / todayLunchers.length;

      const updatedArray = todayLunchers.map(item => {
        return {
          ...item,
          lunchMoney: item.withKhana
            ? Math.ceil(rotiCostPerPerson)
            : Math.ceil(rotiCostPerPerson + salanCostPerPerson),
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
      Alert.alert(
        'Alert Luncher',
        `Full Lunch ${
          salanCostPerPerson + rotiCostPerPerson
        }, Single Lunch ${rotiCostPerPerson}`,
        [
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
        ],
      );
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Salan total cost"
          placeholderTextColor={'#000000'}
          keyboardType="numeric"
          onChangeText={text => setSalanCost(Number(text))}
          style={styles.inputStyle}
        />

        <TextInput
          placeholder="Roti total cost"
          placeholderTextColor={'#000000'}
          keyboardType="numeric"
          onChangeText={text => setRotiCost(Number(text))}
          style={styles.inputStyle}
        />

        <Button
          title="distribute Roti cost"
          onPress={handleRotiCostDistribution}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputView: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 50,
  },
  inputStyle: {
    borderWidth: 1,
    width: '100%',
    marginVertical: 10,
    color: '#000000',
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
export default DistributeCash;

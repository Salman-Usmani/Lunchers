import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {LunchersContext} from '../../App';

const Home = ({navigation}: any) => {
  const isfocus = useIsFocused();
  const {todayLunchers, lunchers} = useContext(LunchersContext);
  async function handleSave() {
    try {
      let alllunchersdata = JSON.stringify(lunchers);
      let alltodayslunchersdata = JSON.stringify(todayLunchers);
      await AsyncStorage.setItem('allLunchers', alllunchersdata);
      await AsyncStorage.setItem('allTodaysLunchers', alltodayslunchersdata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isfocus) {
      handleSave();
    }
  });

  return (
    <SafeAreaView style={styles.screenContainer}>
      <TouchableOpacity
        style={styles.bodyContainer}
        onPress={() => navigation.navigate('AddLunchers')}>
        <Text>Add Lunchers</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bodyContainer}
        onPress={() => navigation.navigate('DistributeCash')}>
        <Text>Lunch Cost</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bodyContainer}
        onPress={() => navigation.navigate('TodayLunchers')}>
        <Text>Today Lunchers</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bodyContainer}
        onPress={() => navigation.navigate('AllLunchers')}>
        <Text>All Lunchers</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {flex: 1},
  bodyContainer: {
    flex: 1,
    marginVertical: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    // alignSelf: 'center',
  },
});
export default Home;

import 'react-native-gesture-handler';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import React, {createContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RootStack} from './src/navigation/root/rootStack';
import {ILunchers, Tlunchers} from './src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LunchersContext = createContext<ILunchers>({
  lunchers: [
    {
      name: '',
      lunchMoney: 0,
      withKhana: false,
    },
  ],
  todayLunchers: [
    {
      name: '',
      lunchMoney: 0,
      withKhana: false,
    },
  ],
  setLunchers: () => {},
  setTodayLunchers: () => {},
});
function App(): JSX.Element {
  const [todayLunchers, setTodayLunchers] = useState<Tlunchers[]>([]);
  const [lunchers, setLunchers] = useState<Tlunchers[]>([
    {
      name: 'Salman',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Usman',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Ehtisham',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Adeel',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Saqib',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Muneeb',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Awais',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Kashif',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Umer',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Hammas',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Kabir',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Saad',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Ihtesham',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Sabahat',
      lunchMoney: 0,
      withKhana: false,
    },
    {
      name: 'Waqas',
      lunchMoney: 0,
      withKhana: false,
    },
  ]);

  // async function handleRetrieve() {
  //   try {
  //     const getAllLunchers = await AsyncStorage.getItem('allLunchers');
  //     const gettodayLunchers = await AsyncStorage.getItem('allTodaysLunchers');
  //     const getAllLunchersparse = getAllLunchers
  //       ? JSON.parse(getAllLunchers)
  //       : [];
  //     const gettodayLunchersparse = gettodayLunchers
  //       ? JSON.parse(gettodayLunchers)
  //       : [];

  //     setLunchers(getAllLunchersparse);
  //     setTodayLunchers(gettodayLunchersparse);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   handleRetrieve();
  // }, []);
  return (
    <LunchersContext.Provider
      value={{lunchers, setLunchers, todayLunchers, setTodayLunchers}}>
      <SafeAreaView style={styles.appContainer}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </LunchersContext.Provider>
  );
}

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

export default App;

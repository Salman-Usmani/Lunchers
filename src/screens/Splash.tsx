import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LunchersContext} from '../../App';

const SplashScreen = ({navigation}: any) => {
  const {setTodayLunchers, setLunchers} = useContext(LunchersContext);

  async function handleNavigation() {
    try {
      const getAllLunchers = await AsyncStorage.getItem('allLunchers');
      const gettodayLunchers = await AsyncStorage.getItem('allTodaysLunchers');
      console.log({getAllLunchers});
      const getAllLunchersparse = getAllLunchers
        ? JSON.parse(getAllLunchers)
        : [];
      const gettodayLunchersparse = gettodayLunchers
        ? JSON.parse(gettodayLunchers)
        : [];

      setLunchers(getAllLunchersparse);
      setTodayLunchers(gettodayLunchersparse);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Home'}],
        }),
      );
    }, 1500);
  }
  useEffect(() => {
    handleNavigation();
  }, []);
  return (
    <View style={styles.sectionContainer}>
      {/* <SvgXml xml={logoIcon} /> */}
      <Text style={styles.textLogo}>Lunchers</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'dark',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    marginTop: '30%',
    fontFamily: 'HarlowSolidPlain',
    fontSize: 42,
    color: '#fedcba',
  },
});

export default SplashScreen;

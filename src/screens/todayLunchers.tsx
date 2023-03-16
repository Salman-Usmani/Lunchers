import {useContext} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LunchersContext} from '../../App';
import {TitemProps, Tlunchers} from '../types/types';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React from 'react';

const TodayLunchers = () => {
  const {todayLunchers, lunchers, setTodayLunchers} =
    useContext(LunchersContext);

  const handleSelect = (item: Tlunchers, withKhana: boolean) => {
    const isSelected = todayLunchers.find(
      selectedItem => selectedItem.name === item.name,
    );
    if (isSelected) {
      const newSelected = todayLunchers.filter(
        selectedItem => selectedItem.name !== item.name,
      );
      setTodayLunchers(newSelected);
    } else {
      setTodayLunchers(prev => [...prev, {...item, withKhana}]);
    }
  };
  const Item = ({item, onPress, backgroundColor, textColor}: TitemProps) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5,
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.sectionDescription, {backgroundColor}]}>
        <Text style={[styles.sectionTitle, {color: textColor}]}>
          {item.name}
        </Text>
      </TouchableOpacity>

      <BouncyCheckbox
        style={{marginTop: 16}}
        isChecked={item.withKhana ? true : false}
        text="is Khana?"
        disableBuiltInState
        onPress={() => handleSelect(item, true)}
      />
    </View>
  );
  const renderItem = ({item}: {item: Tlunchers}) => {
    return (
      <Item
        item={item}
        onPress={() => {
          handleSelect(item, false);
        }}
        backgroundColor={
          todayLunchers.some(element => element.name === item.name)
            ? '#abcdef'
            : '#fedcba'
        }
        textColor={'black'}
      />
    );
  };
  const renderTodayItem = ({item}: {item: Tlunchers}) => {
    return (
      <Item
        item={item}
        onPress={() => {}}
        backgroundColor={'#abcdef'}
        textColor={'black'}
      />
    );
  };
  return (
    <SafeAreaView style={styles.appContainer}>
      <FlatList
        data={lunchers}
        renderItem={renderItem}
        style={{
          flex: 1,
          borderBottomColor: '#abcdef',
          borderBottomWidth: 1,
          paddingVertical: 5,
        }}
      />
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
export default TodayLunchers;

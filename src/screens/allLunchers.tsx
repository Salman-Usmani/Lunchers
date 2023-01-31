import React from 'react';
import {useContext, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LunchersContext} from '../../App';
import {TitemProps, Tlunchers} from '../types';

const Item = ({item, onPress, backgroundColor, textColor}: TitemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.sectionDescription, {backgroundColor}]}>
    <Text style={[styles.sectionTitle, {color: textColor}]}>{item.name}</Text>
    <Text style={[styles.sectionTitle, {color: textColor}]}>
      {item.lunchMoney}
    </Text>
  </TouchableOpacity>
);

const AllLunchers = ({navigation}: any) => {
  const {lunchers} = useContext(LunchersContext);
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: Tlunchers}) => {
    const backgroundColor = item.name === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.name === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('SubtractPayment', {item})}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList data={lunchers} renderItem={renderItem} />
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
export default AllLunchers;

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { warInfo } from '../../../api/index';

const Header = () => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const info = await warInfo();
    setInfo(info);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const monthName = monthNames[month - 1];
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
      <Text style={styles.titleBig}>
        Загальні бойові втрати російського окупанта
      </Text>

      <View style={styles.blockData}>
        <Text style={styles.data}>
          {day}
          {'  '}
          {monthName}
        </Text>
        <Text style={styles.day}> {info?.data?.current_day} день війни </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: 'black',
  },

  titleBig: {
    fontSize: 30,
    color: 'black',
  },
  blockData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    padding: 10,
  },

  day: {
    fontSize: 19,
    color: '#FFD600',
    fontWeight: '600',
  },
  data: {
    fontSize: 19,
    color: '#FFD600',
    fontWeight: '600',
  },
});

export default Header;

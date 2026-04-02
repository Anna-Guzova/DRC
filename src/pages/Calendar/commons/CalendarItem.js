import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../../redux/dateSlice';
function CalendarItem() {
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();

  const setDate = day => {
    setSelected(day.dateString);
    dispatch(changeDate(day.dateString));
  };

  return (
    <SafeAreaView style={styles.calendarBlock} edges={['top']}>
      <Text style={styles.calendarDay}>CalendarItem</Text>
      <View style={styles.calendar}>
        <Calendar
          onDayPress={day => {
            setDate(day);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'red',
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  calendarBlock: {
    padding: 5,
    display: 'flex',
    marginBottom: 70,
  },
  calendarDay: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    padding: 15,
  },
  calendar: {
    height: 250,

    backgroundColor: 'white',
  },
});

export default CalendarItem;

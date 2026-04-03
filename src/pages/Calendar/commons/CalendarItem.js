import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';

function CalendarItem({ selected, setSelected }) {
  return (
    <SafeAreaView style={styles.calendarBlock} edges={['top']}>
      <View style={styles.calendar}>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
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

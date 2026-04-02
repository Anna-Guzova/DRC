import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import CalendarItem from './commons/CalendarItem';
import DateInfo from './commons/DateInfo';

function Calendar() {
  return (
    <ScrollView>
      <View style={styles.calendar}>
        <LinearGradient
          colors={['#0057b8', '#ffffff', '#FFD600']}
          style={styles.linearGradient}
        >
          <CalendarItem />
          <DateInfo />
        </LinearGradient>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calendar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    width: '100%',
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
});

export default Calendar;

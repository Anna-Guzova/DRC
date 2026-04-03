import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Stats from './commons/Stats';
import Header from './commons/Header';
import { useDispatch } from 'react-redux';
import { addStats } from '../../redux/statsSlice';

function HomePage() {
  const dispatch = useDispatch();
  const test = 'test';
  useEffect(() => {
    dispatch(addStats(test));
  });

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <LinearGradient
        colors={['#0057b8', '#ffffff', '#FFD600']}
        style={styles.linearGradient}
      >
        <Header />
        <Stats />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
});

export default HomePage;

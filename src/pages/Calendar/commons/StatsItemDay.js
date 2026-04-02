import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const StatsItemDay = ({ statsAll, statsDay, terms }) => {
  return (
    <View style={styles.statsBlock}>
      <Image
        // source={terms.icon}
        source={require('../../../icon/unit.png')}
        defaultSource={require('../../../icon/unit.png')}
        style={styles.statsImage}
      />

      <View style={styles.stats}>
        <View style={styles.statsNumber}>
          <Text style={styles.statsAll}>{statsAll}</Text>
          <Text style={styles.statsDay}>(+{statsDay})</Text>
        </View>

        <Text style={styles.statsText}>{terms.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stats: {
    flex: 1,
  },
  statsBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    width: 200,
    height: 120,
    flex: 1,
  },

  statsImage: {
    width: 40,
    height: 35,
  },
  statsAll: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '900',
  },
  statsDay: {
    fontSize: 12,
    color: '#000000',
    marginLeft: 10,
    fontWeight: '600',
  },
  statsText: {
    fontSize: 12,
    color: '#000000',
  },
  statsNumber: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StatsItemDay;

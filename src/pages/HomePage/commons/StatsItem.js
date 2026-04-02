import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const StatsItem = ({ statsAll, statsDay, terms }) => {
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
    marginLeft: 20,
  },
  statsBlock: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
  },

  statsImage: {
    width: 85,
    height: 75,
  },
  statsAll: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '900',
  },
  statsDay: {
    fontSize: 20,
    color: '#000000',
    marginLeft: 10,
    fontWeight: '600',
  },
  statsText: {
    fontSize: 18,
    color: '#000000',
  },
  statsNumber: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StatsItem;

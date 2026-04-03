import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const StatsItemDay = ({ statsAll, statsDay, term }) => {
  return (
    <View style={styles.statsBlock}>
      <View style={styles.iconWrapper}>
        <SvgUri width={40} height={35} uri={term?.icon} />
      </View>

      <View style={styles.stats}>
        <View style={styles.statsNumber}>
          <Text style={styles.statsAll}>{statsAll}</Text>
          <Text style={styles.statsDay}>(+{statsDay})</Text>
        </View>

        <Text style={styles.statsText}>{term?.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stats: {
    flex: 1,
  },

  statsBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 12, //
    backgroundColor: '#ffffffaa',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  statsAll: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },

  statsDay: {
    fontSize: 14,
    color: '#444',
    marginLeft: 6,
  },
  statsText: {
    fontSize: 14,
    color: '#555',
  },
  statsNumber: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default StatsItemDay;

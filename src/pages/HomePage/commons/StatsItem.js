import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const StatsItem = ({ statsAll, statsDay, term }) => {
  return (
    <View
      style={[
        styles.statsBlock,
        {
          borderLeftColor: statsDay > 0 ? '#4caf50' : '#ccc',
        },
      ]}
    >
      <View style={styles.iconWrapper}>
        <SvgUri width={65} height={55} uri={term?.icon} />
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
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginVertical: 6,
    marginHorizontal: 10,
    backgroundColor: '#ffffffcc',
    borderRadius: 10,

    borderLeftWidth: 4,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  statsAll: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111',
  },

  statsDay: {
    fontSize: 14,
    marginLeft: 6,
    color: '#2e7d32',
    fontWeight: '600',
  },
  statsText: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
  statsNumber: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
});

export default StatsItem;

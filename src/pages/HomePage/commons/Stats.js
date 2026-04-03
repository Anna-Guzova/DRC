import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import StatsItem from './StatsItem';
import { useSelector } from 'react-redux';
import { getStatistics, getTerms } from '../../../api/index';

const Stats = () => {
  const test = useSelector(state => state.stats.stats);

  const [statistics, setStatistics] = useState(null);
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const data = await getStatistics();
    setStatistics(data);
    const dataTerms = await getTerms();
    setTerms(dataTerms);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text>{test}</Text>

      <StatsItem
        statsAll={statistics?.data?.stats?.personnel_units}
        statsDay={statistics?.data?.increase?.personnel_units}
        term={terms?.data?.personnel_units}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.tanks}
        statsDay={statistics?.data?.increase?.tanks}
        term={terms?.data?.tanks}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.armoured_fighting_vehicles}
        statsDay={statistics?.data?.increase?.armoured_fighting_vehicles}
        term={terms?.data?.armoured_fighting_vehicles}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.artillery_systems}
        statsDay={statistics?.data?.increase?.artillery_systems}
        term={terms?.data?.artillery_systems}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.mlrs}
        statsDay={statistics?.data?.increase?.mlrs}
        term={terms?.data?.mlrs}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.aa_warfare_systems}
        statsDay={statistics?.data?.increase?.aa_warfare_systems}
        term={terms?.data?.aa_warfare_systems}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.planes}
        statsDay={statistics?.data?.increase?.planes}
        term={terms?.data?.planes}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.helicopters}
        statsDay={statistics?.data?.increase?.helicopters}
        term={terms?.data?.helicopters}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.vehicles_fuel_tanks}
        statsDay={statistics?.data?.increase?.vehicles_fuel_tanks}
        term={terms?.data?.vehicles_fuel_tanks}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.warships_cutters}
        statsDay={statistics?.data?.increase?.warships_cutters}
        term={terms?.data?.warships_cutters}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.cruise_missiles}
        statsDay={statistics?.data?.increase?.cruise_missiles}
        term={terms?.data?.cruise_missiles}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.uav_systems}
        statsDay={statistics?.data?.increase?.uav_systems}
        term={terms?.data?.uav_systems}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.special_military_equip}
        statsDay={statistics?.data?.increase?.special_military_equip}
        term={terms?.data?.special_military_equip}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.atgm_srbm_systems}
        statsDay={statistics?.data?.increase?.atgm_srbm_systems}
        term={terms?.data?.atgm_srbm_systems}
      />
      <StatsItem
        statsAll={statistics?.data?.stats?.submarines}
        statsDay={statistics?.data?.increase?.submarines}
        term={terms?.data?.submarines}
      />
    </ScrollView>
  );
};

export default Stats;

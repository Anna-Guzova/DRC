import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import StatsItemDay from './StatsItemDay';

import { statisticsDate, getTerms } from '../../../api/index';

const DateInfo = ({ day }) => {
  const [statistics, setStatistics] = useState(null);
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    getInfo();
  }, [day]);

  const getInfo = async () => {
    const info = await statisticsDate(day);
    setStatistics(info);
    const dataTerms = await getTerms();
    setTerms(dataTerms);
  };

  return (
    <View>
      <StatsItemDay
        statsAll={statistics?.data?.stats?.personnel_units}
        statsDay={statistics?.data?.increase?.personnel_units}
        term={terms?.data?.personnel_units}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.tanks}
        statsDay={statistics?.data?.increase?.tanks}
        term={terms?.data?.tanks}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.armoured_fighting_vehicles}
        statsDay={statistics?.data?.increase?.armoured_fighting_vehicles}
        term={terms?.data?.armoured_fighting_vehicles}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.artillery_systems}
        statsDay={statistics?.data?.increase?.artillery_systems}
        term={terms?.data?.artillery_systems}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.mlrs}
        statsDay={statistics?.data?.increase?.mlrs}
        term={terms?.data?.mlrs}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.aa_warfare_systems}
        statsDay={statistics?.data?.increase?.aa_warfare_systems}
        term={terms?.data?.aa_warfare_systems}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.planes}
        statsDay={statistics?.data?.increase?.planes}
        term={terms?.data?.planes}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.helicopters}
        statsDay={statistics?.data?.increase?.helicopters}
        term={terms?.data?.helicopters}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.vehicles_fuel_tanks}
        statsDay={statistics?.data?.increase?.vehicles_fuel_tanks}
        term={terms?.data?.vehicles_fuel_tanks}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.warships_cutters}
        statsDay={statistics?.data?.increase?.warships_cutters}
        term={terms?.data?.warships_cutters}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.cruise_missiles}
        statsDay={statistics?.data?.increase?.cruise_missiles}
        term={terms?.data?.cruise_missiles}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.uav_systems}
        statsDay={statistics?.data?.increase?.uav_systems}
        term={terms?.data?.uav_systems}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.special_military_equip}
        statsDay={statistics?.data?.increase?.special_military_equip}
        term={terms?.data?.special_military_equip}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.atgm_srbm_systems}
        statsDay={statistics?.data?.increase?.atgm_srbm_systems}
        term={terms?.data?.atgm_srbm_systems}
      />
      <StatsItemDay
        statsAll={statistics?.data?.stats?.submarines}
        statsDay={statistics?.data?.increase?.submarines}
        term={terms?.data?.submarines}
      />
    </View>
  );
};

export default DateInfo;

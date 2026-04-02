import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>Бажаєш збільшити стату?</Text>
      <View style={styles.donate}>
        <FontAwesomeIcon icon={faArrowLeft} size={20} />
        <View style={styles.donateItem}>
          <FontAwesomeIcon icon={faHome} size={20} />
          <Text style={styles.donateName}>Повернись живий</Text>
        </View>
        <FontAwesomeIcon icon={faArrowRight} size={20} />
      </View>
      <View style={styles.len}></View>
      <View style={styles.contacts}>
        <Text style={styles.footerName}>alallala</Text>
        <FontAwesomeIcon icon={faHome} size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
  },
  footerTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
  },
  contacts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerName: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
  },
  donate: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  donateItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  donateName: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
    paddingLeft: 10,
  },
});

export default Footer;

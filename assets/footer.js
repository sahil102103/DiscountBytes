import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.text}>Author: Discount Bytes</Text>
        <Text style={styles.text}>
          <Text style={styles.link} onPress={() => Linking.openURL('mailto:shah.sahil1@northeastern.edu')}>
            hege@example.com
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

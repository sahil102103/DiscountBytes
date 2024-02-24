import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.websiteName}>Discount Bytes</Text>
      <View style={styles.buttons}>
        <Pressable style={styles.listItem}>
        <Pressable style={styles.listItem}>
          <Text style={styles.link}>Login</Text>
        </Pressable>
        
        </Pressable>
        <Pressable style={styles.listItem}>
          <Text style={styles.link}>Signup</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'darkred',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    color: 'white',
    zIndex: 2, // Ensures that the header is displayed above other components
  },
  websiteName: {
    paddingLeft: 20,
    color: 'white',
    fontSize: 18,
  },
  buttons: {
    flexDirection: 'row',
  },
  listItem: {
    marginHorizontal: 10,
  },
  link: {
    padding: 14,
    textDecorationLine: 'underline',
    color: 'white',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './assets/header';
import Footer from './assets/footer';
import LoginScreen from './assets/loginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <LoginScreen />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

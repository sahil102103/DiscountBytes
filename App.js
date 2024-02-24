import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './assets/header';
import Footer from './assets/footer';
import LoginScreen from './assets/loginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.centered}>
        <LoginScreen />
      </View>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust as needed
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

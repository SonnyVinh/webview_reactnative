import Constants from 'expo-constants';
import { StatusBar, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <WebView source={{ uri: 'https://www.estv.co/' }} style={{ flex: 1 }} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginTop: Constants.statusBarHeight,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

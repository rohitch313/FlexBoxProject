
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';





function Apps(): React.JSX.Element {


  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.Innerbox1}></View>
        <View style={styles.Innerbox2}></View>
        <View style={styles.Innerbox3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
} const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  box1: {
    flex: 2, flexDirection:'row', backgroundColor: 'green'
  },
  box2: {
    flex: 1, backgroundColor: 'red'
  },
  box3: {
    flex: 1, backgroundColor: 'blue'
  },
  Innerbox1: {
    flex: 1, margin:10, backgroundColor: 'yellow'
  },
  Innerbox2: {
    flex: 1, backgroundColor: 'pink',margin:10
  },
  Innerbox3: {
    flex: 1, backgroundColor: 'black',margin:10
  },
}

)



export default Apps;

import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {Appbar} from "./components/Appbar/Appbar";
import {ProfileDetails} from "./components/ProfileDetails/ProfileDetails";
import {ShowCase} from "./components/ShowCase/ShowCase";
import {ProfileTabs} from "./components/ProfileTabs/ProfileTabs";
import {useFonts} from "expo-font";
import {BookNow} from "./components/BookNow/BookNow";

export default function App() {
    const [fontsLoaded] = useFonts({
        'Gilroy-Regular': require('./assets/fonts/Gilroy-Regular.ttf'),
        'Gilroy-SemiBold': require('./assets/fonts/Gilroy-SemiBold.ttf'),
        'Gilroy-Medium': require('./assets/fonts/Gilroy-Medium.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }
  return (
      <View style={styles.safeAreaView}>
          <StatusBar/>
          <Appbar/>
          <BookNow/>
          <ScrollView scrollEnabled>
              <ShowCase/>
              <ProfileDetails/>
              <ProfileTabs/>
          </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    }
});

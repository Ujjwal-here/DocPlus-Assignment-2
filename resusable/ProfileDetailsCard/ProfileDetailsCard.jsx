import {Image, StyleSheet, Text, View} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "../../metrics";
import {useFonts} from "expo-font";

export const ProfileDetailsCard = ({source, heading, subBoldHeading}) => {
    const [fontsLoaded] = useFonts({
        'Gilroy-Bold': require('../../assets/fonts/Gilroy-Bold.ttf'),
        'Gilroy-Medium': require('../../assets/fonts/Gilroy-Medium.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <View style={styles.flexContainer}>
                <Image source={source}/>
                <Text style={styles.subBoldHeading}>{subBoldHeading}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(20),
        paddingVertical: verticalScale(12),
        paddingHorizontal: horizontalScale(20),
        backgroundColor: "white",
        borderRadius: moderateScale(18),
        elevation: 10,
    },
    flexContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: moderateScale(6),
        marginTop: verticalScale(10),
    },
    heading: {
        fontFamily: "Gilroy-Medium",
        fontSize: moderateScale(10.5),
        textAlign: "center",
        color: "#7B7A79",
    },
    subBoldHeading: {
        fontFamily: "Gilroy-Bold",
        fontSize: moderateScale(14),
    }
})

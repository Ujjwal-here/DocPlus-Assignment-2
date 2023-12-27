import {Image, StyleSheet, Text, View} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "../../metrics";

export const Appbar = () => {
    return (
        <View style={styles.appbarContainer}>
            <Image source={require("../../assets/images/back.png")}/>
            <Text style={styles.heading}>Doctor’s Profile</Text>
            <Image source={require("../../assets/images/export.png")}/>
        </View>
    )
}
const styles = StyleSheet.create({
    appbarContainer: {
        paddingVertical: verticalScale(20),
        paddingHorizontal: horizontalScale(20),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    heading: {
        color: "#279D9D",
        fontFamily: "Gilroy-SemiBold",
        fontSize: moderateScale(20),
    }
})

import {Image, StyleSheet, Text, View} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "../../metrics";
import {LinearGradient} from "expo-linear-gradient";

export const BookNow = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#39AAB4', '#2C9EC2']} style={styles.containerTwo}>
                <View>
                    <Text style={styles.nextAvailableText}>Next Available</Text>
                    <Text style={styles.nowText}>Now</Text>
                </View>
                <View style={styles.bookContainer}>
                    <Text style={styles.bookText}>Book</Text>
                    <Image source={require("../../assets/images/rightarrow.png")}/>
                </View>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
        paddingVertical: verticalScale(15),
        paddingHorizontal: horizontalScale(15),
        position: "absolute",
        bottom: verticalScale(0),
        elevation: verticalScale(5),
    },
    containerTwo: {
        paddingVertical: verticalScale(15),
        paddingHorizontal: horizontalScale(15),
        borderRadius: moderateScale(10),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    nextAvailableText: {
        fontSize: moderateScale(12),
        color: "white",
        fontFamily: "Gilroy-Medium"
    },
    nowText: {
        marginTop: verticalScale(5),
        color: "white",
        fontSize: moderateScale(14),
        fontFamily: "Gilroy-SemiBold"
    },
    bookContainer: {
        flexDirection: "row",
        gap: moderateScale(20),
        alignItems: "center"
    },
    bookText: {
        color: "white",
        fontSize: moderateScale(16),
        fontFamily: "Gilroy-SemiBold"
    }
})

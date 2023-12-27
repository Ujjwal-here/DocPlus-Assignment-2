import {StyleSheet, Text, View} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "../../metrics";
import {LinearGradient} from "expo-linear-gradient";

export const DayDateCard = ({id, date, day, selectedDate}) => {
    function linearGradientBackground(){
        return <LinearGradient colors={['#39AAB4', '#2C9EC2']} style={[styles.dayAndDateContainer]}>
            <View>
                <Text style={[styles.dateText, styles.colorWhite]}>
                    {date}
                </Text>
                <Text style={[styles.dayText, styles.colorWhite]}>
                    {day}
                </Text>
            </View>
        </LinearGradient>
    }
    function greyBackGround(){
        return <View style={styles.dayAndDateContainer}>
            <Text style={styles.dateText}>
                {date}
            </Text>
            <Text style={styles.dayText}>
                {day}
            </Text>
        </View>
    }
    return (
        selectedDate===id ? linearGradientBackground(): greyBackGround()
    )
}

const styles = StyleSheet.create({
    dayAndDateContainer: {
        backgroundColor: "#EEEEEE",
        paddingVertical: verticalScale(15),
        paddingHorizontal: horizontalScale(15),
        borderRadius: moderateScale(15),
    },
    colorWhite: {
        color: "white",
    },
    dateText: {
        textAlign: "center",
        fontSize: moderateScale(16),
        fontFamily: "Gilroy-SemiBold"
    },
    dayText: {
        marginTop: verticalScale(5),
        textAlign: "center",
        fontSize: moderateScale(9),
        fontFamily: "Gilroy-Medium",
    }
})

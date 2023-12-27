import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "../../metrics";

export const DayDateCard = ({date, day, selectedDate}) => {

    return (
        <TouchableOpacity>
            <View style={styles.dayAndDateContainer}>
                <Text style={styles.dateText}>
                    {date}
                </Text>
                <Text style={styles.dayText}>
                    {day}
                </Text>
            </View>
        </TouchableOpacity>

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

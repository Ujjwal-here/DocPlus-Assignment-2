import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import {moderateScale, verticalScale} from "../../metrics";
import {DayDateCard} from "../../resusable/DayDateCard/DayDateCard";

export const Availability = () => {
    const daydate = [
        {
            date: 13,
            day: "MON"
        },
        {
            date: 14,
            day: "TUE"
        },
        {
            date: 15,
            day: "WED"
        },
        {
            date: 16,
            day: "THU"
        },
        {
            date: 17,
            day: "FRI"
        },
        {
            date: 18,
            day: "SAT"
        }
    ]
    return (
        <View style={styles.availabilityContainer}>
            <View
                style={[styles.flexRowContainer, styles.flexJustifyContentCenter, styles.flexAlignItemsCenter, styles.gap_10]}>
                <Text style={styles.monthText}>
                    November, 2021
                </Text>
                <Image source={require("../../assets/images/downarrow.png")}/>
            </View>
            <View style={styles.weekdaysContainer}>
                <FlatList horizontal data={daydate} renderItem={(item) => {
                    return <DayDateCard date={item.item.date} day={item.item.day}/>
                }} style={[styles.flatListStyle]} contentContainerStyle={styles.contentContainerStyle}
                          keyExtractor={(item) => item.date}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    flexRowContainer: {
        flexDirection: "row",
    },
    flexJustifyContentCenter: {
        justifyContent: "center",
    },
    flexAlignItemsCenter: {
        alignItems: "center"
    },
    gap_10: {
        gap: 10
    },
    availabilityContainer: {
        marginTop: verticalScale(20),
    },
    monthText: {
        textAlign: "center",
        fontSize: moderateScale(18),
        fontFamily: "Gilroy-SemiBold"
    },
    weekdaysContainer: {
        marginTop: verticalScale(30),
        marginBottom: verticalScale(20),
    },
    flatListStyle: {
        height: verticalScale(200),
    },
    contentContainerStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 5,
    }
})

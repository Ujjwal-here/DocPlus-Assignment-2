import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {moderateScale, verticalScale} from "../../metrics";
import {DayDateCard} from "../../resusable/DayDateCard/DayDateCard";
import {useState} from "react";

export const Availability = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const daydate = [
        {
            id: 1,
            date: 13,
            day: "MON"
        },
        {
            id: 2,
            date: 14,
            day: "TUE"
        },
        {
            id: 3,
            date: 15,
            day: "WED"
        },
        {
            id: 4,
            date: 16,
            day: "THU"
        },
        {
            id: 5,
            date: 17,
            day: "FRI"
        },
        {
            id: 6,
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
                    return <TouchableOpacity onPress={() => setSelectedDate(item.item.id)}>
                        <DayDateCard id={item.item.id} date={item.item.date} day={item.item.day} selectedDate={selectedDate}/>
                    </TouchableOpacity>
                }} style={[styles.flatListStyle]} contentContainerStyle={styles.contentContainerStyle}
                          keyExtractor={(item) => item.id}/>
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
        // marginBottom: verticalScale(20),
    },
    flatListStyle: {
        height: verticalScale(100),
    },
    contentContainerStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 5,
    }
})

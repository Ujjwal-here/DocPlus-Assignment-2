import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "../../metrics";
import {useState} from "react";
import {Availability} from "../Availability/Availability";
import {Fees} from "../Fees/Fees";
import {PatientReviews} from "../PatientReviews/PatientReviews";

export const ProfileTabs = () => {
    const [tabNumber, setTabNumber] = useState(2)

    function tabNumberHandler(number) {
        setTabNumber(number)
    }

    function tabNumberView() {
        if (tabNumber === 2) {
            return Availability()
        } else if (tabNumber === 3) {
            return Fees()
        } else if (tabNumber === 4) {
            return PatientReviews()
        }
    }

    return (
        <View>
            <View style={styles.profileTabsContainer}>
                <Pressable style={[styles.profileTabContainer, tabNumber === 1 ? {
                    elevation: 20,
                    paddingHorizontal: verticalScale(20),
                    borderTopLeftRadius: moderateScale(10),
                    borderTopRightRadius: moderateScale(10),
                } : {elevation: 5}]}
                           onPress={() => tabNumberHandler(1)}>
                    {tabNumber !== 1 ? <Image style={styles.icon} source={require("../../assets/images/person.png")}/> :
                        <Text style={styles.iconText}>Person</Text>}
                </Pressable>
                <Pressable style={[styles.profileTabContainer, tabNumber === 2 ? {
                    elevation: 20,
                    paddingHorizontal: verticalScale(20),
                    borderTopLeftRadius: moderateScale(10),
                    borderTopRightRadius: moderateScale(10),
                } : {elevation: 5}]}
                           onPress={() => tabNumberHandler(2)}>
                    {tabNumber !== 2 ?
                        <Image style={styles.icon} source={require("../../assets/images/available.png")}/> :
                        <Text style={[styles.iconText]}>Availability</Text>}
                </Pressable>
                <Pressable style={[styles.profileTabContainer, tabNumber === 3 ? {
                    elevation: 20, paddingHorizontal: verticalScale(20), borderTopLeftRadius: moderateScale(10),
                    borderTopRightRadius: moderateScale(10),
                } : {elevation: 5}]}
                           onPress={() => tabNumberHandler(3)}>
                    {tabNumber !== 3 ? <Image style={styles.icon} source={require("../../assets/images/fees.png")}/> :
                        <Text style={styles.iconText}>Fees</Text>}
                </Pressable>

                <Pressable style={[styles.profileTabContainer, tabNumber === 4 ? {
                    elevation: 20,
                    paddingHorizontal: verticalScale(20),
                    borderTopRightRadius: moderateScale(10),
                } : {elevation: 5}]}
                           onPress={() => tabNumberHandler(4)}>
                    {tabNumber !== 4 ?
                        <Image style={styles.icon} source={require("../../assets/images/reviews.png")}/> :
                        <Text style={styles.iconText}>Reviews</Text>}
                </Pressable>
            </View>
            <View style={styles.tabCard}>
                {tabNumberView()}
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    profileTabsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: verticalScale(10),
        marginHorizontal: horizontalScale(20),
        backgroundColor: "white",
        elevation: 10,
        borderTopLeftRadius: moderateScale(10),
        borderTopRightRadius: moderateScale(10),
    },
    profileTabContainer: {
        flexBasis: 0,
        flexGrow: 1,
        backgroundColor: "white",
        paddingVertical: verticalScale(12),
    },
    icon: {
        alignSelf: "center",
    },
    iconText: {
        color: "#EA1A65",
        alignSelf: "center",
        fontSize: moderateScale(14),
        fontFamily: "Gilroy-Medium"
    },
    tabCard: {
        marginHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(20),
        backgroundColor: "white",
        elevation: 20,
        top: verticalScale(-5),
        borderRadius: moderateScale(5),
    }
})

import {Image, StyleSheet, Text, View} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "../../metrics";

export const PatientReviews = () => {
    return (
        <View>
            <View style={[styles.flexRowContainer, styles.flexJustifyContentBetween, styles.flexAlignItemsCenter]}>
                <Text style={styles.patientReviewText}>Patient Reviews</Text>
                <Image source={require("../../assets/images/addIcon.png")}/>
            </View>
            <View style={styles.line}></View>
            <View style={[styles.flexRowContainer, styles.flexJustifyContentBetween]}>
                <View style={[styles.flexRowContainer, styles.gap_10]}>
                    <View>
                        <Image style={styles.avatarImage} source={require("../../assets/images/profilepic.jpg")}/>
                    </View>
                    <View style={styles.gap_5}>
                        <Text style={styles.patientNameText}>Maggie Rhee</Text>
                        <Text style={styles.visitedReasonText}>Visited for Pain</Text>
                        <View style={[styles.flexRowContainer, styles.gap_5]}>
                            <Image source={require("../../assets/images/ratings.png")}/>
                            <Image source={require("../../assets/images/ratings.png")}/>
                            <Image source={require("../../assets/images/ratings.png")}/>
                            <Image source={require("../../assets/images/ratings.png")}/>
                            <Image source={require("../../assets/images/stargrey.png")}/>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.daysAgoText}>16 days ago</Text>
                </View>
            </View>
            <View style={styles.reviewTextContainer}>
                <Text style={styles.reviewText}>
                    “Great caring doctor & practice. Very accessible, especially during these times.Highly recommend.”
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    flexRowContainer: {
        flexDirection: "row",
    },
    flexJustifyContentBetween: {
        justifyContent: "space-between",
    },
    flexAlignItemsCenter: {
        alignItems: "center"
    },
    gap_5: {
        gap: 5,
    },
    gap_10: {
        gap: 10
    },
    patientReviewText: {
        fontFamily: "Gilroy-SemiBold",
        fontSize: moderateScale(12.92)
    },
    line: {
        marginVertical: verticalScale(12),
        borderWidth: 0.5,
        borderColor: "#EEEEEE",
    },
    avatarImage: {
        height: verticalScale(70),
        width: horizontalScale(64),
        borderRadius: moderateScale(40)
    },
    patientNameText: {
        fontFamily: "Gilroy-SemiBold",
        fontSize: moderateScale(14),
    },
    visitedReasonText: {
        color: "#7B7A79",
        fontFamily: "Gilroy-Medium",
        fontSize: moderateScale(12)
    },
    daysAgoText: {
        color: "#077EE9",
        fontFamily: "Gilroy-Regular",
        fontSize: moderateScale(10.5)
    },
    reviewTextContainer: {
        marginVertical: verticalScale(10)
    },
    reviewText: {
        fontFamily: "Gilroy-SemiBold",
        fontSize: moderateScale(10.5)
    }
})

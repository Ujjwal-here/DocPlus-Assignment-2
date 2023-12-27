import {Image, StyleSheet, Text, View} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "../../metrics";
import {ProfileDetailsCard} from "../../resusable/ProfileDetailsCard/ProfileDetailsCard";

export const ProfileDetails = () => {
    const images = [
        require("../../assets/images/Patients.png"),
        require("../../assets/images/achievment.png"),
        require("../../assets/images/ratings.png"),
    ]

    return (
        <View style={styles.profileContainer}>
            <View style={styles.flexContainer}>
                <View>
                    <Text style={styles.heading}>Dr. Anuj Verma</Text>
                    <Text style={styles.subHeading}>General Physician | MBBS, NBD</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image source={require("../../assets/images/chat.png")}/>
                </View>
            </View>
            <View style={[styles.flexContainer, styles.profileDetailsCardContainer]}>
                <ProfileDetailsCard source={images[0]} heading="Consults" subBoldHeading="800+"/>
                <ProfileDetailsCard source={images[1]} heading="Experience" subBoldHeading="8 Yrs+"/>
                <ProfileDetailsCard source={images[2]} heading="Ratings" subBoldHeading="4.5"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profileContainer: {
        marginTop: verticalScale(10),
        paddingVertical: verticalScale(20),
        paddingHorizontal: horizontalScale(30)
    },
    heading: {
        fontSize: moderateScale(24),
        fontFamily: "Gilroy-SemiBold",
    },
    subHeading: {
        marginTop: verticalScale(3),
        color: "#15AEB2",
        fontSize: moderateScale(16),
        fontFamily: "Gilroy-Medium",
    },
    iconContainer: {
        backgroundColor: "white",
        borderRadius: moderateScale(50),
        paddingVertical: verticalScale(20),
        paddingHorizontal: horizontalScale(18),
        elevation: 5,
    },
    profileDetailsCardContainer: {
        paddingHorizontal: horizontalScale(10)
    }
})

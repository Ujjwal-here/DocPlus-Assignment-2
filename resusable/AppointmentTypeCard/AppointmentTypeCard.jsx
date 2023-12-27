import {Image, StyleSheet, Text, View} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "../../metrics";

export const AppointmentTypeCard = ({appointmentType}) => {
    return (
        <View style={[styles.container, styles.flexContainer]}>
            <View style={[styles.flexContainer,styles.gap_15]}>
                <View style={styles.imageContainer}>
                    <Image source={require("../../assets/images/clinic.png")}/>
                </View>
                <Text style={styles.appointmentText}>{appointmentType} </Text>
            </View>
            <View>
                <Text style={styles.feesText}>Fees:<Text>$ 80.00</Text></Text>
                <Text style={styles.amount}>
                    <Image source={require("../../assets/images/rupees.png")}/>{" "}1400</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    gap_15:{
        gap: 15
    },
    container: {
        backgroundColor: "white",
        marginVertical: verticalScale(10),
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(12),
        elevation: 4,
        borderRadius: moderateScale(10)
    },
    imageContainer: {
        backgroundColor: "white",
        elevation: 5,
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(8),
        marginBottom: verticalScale(5),
        borderRadius: moderateScale(20)
    },
    appointmentText: {
        fontSize: moderateScale(12),
        fontFamily: "Gilroy-Medium"
    },
    feesText: {
        fontSize: moderateScale(10.5),
        fontFamily: "Gilroy-SemiBold"
    },
    amount: {
        textAlign: "right",
        fontSize: moderateScale(10.5),
        fontFamily: "Gilroy-SemiBold"
    }
})

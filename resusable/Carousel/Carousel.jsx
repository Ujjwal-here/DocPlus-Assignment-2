import {Image, StyleSheet, View} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "../../metrics";

export const Carousel = ({source}) => {
    return (
        <View>
            <Image style={styles.image} source={{uri: source}}/>
            <View style={styles.heartContainer}>
                <Image source={require("../../assets/images/heart.png")}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        height: verticalScale(300),
        width: horizontalScale(380),
    },
    heartContainer: {
        paddingHorizontal: horizontalScale(12),
        paddingVertical: verticalScale(14),
        backgroundColor: "white",
        position: "absolute",
        top: verticalScale(20),
        right: horizontalScale(20),
        borderRadius: moderateScale(50),
        elevation: 5,
    }
})

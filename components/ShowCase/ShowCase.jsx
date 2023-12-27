import {FlatList, StyleSheet, Text, View} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "../../metrics";
import {Carousel} from "../../resusable/Carousel/Carousel";
import {useCallback, useState} from "react";
import {useFonts} from "expo-font";

export const ShowCase = () => {

    const [imageShowedNumber, setImageShowedNumber] = useState(0)
    const imageCarousel = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            image: "https://plus.unsplash.com/premium_photo-1673953509986-9b2bfe934ae5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    const onViewableItemsChanged = useCallback(({viewableItems}) => {
        if (viewableItems[0]) {
            setImageShowedNumber((viewableItems[0].index) + 1)
        }
    }, [])

    const [fontsLoaded] = useFonts({
        'Gilroy-Bold': require('../../assets/fonts/Gilroy-Bold.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <FlatList onViewableItemsChanged={onViewableItemsChanged}
                      viewabilityConfig={{itemVisiblePercentThreshold: 80}} style={styles.flatListContainer}
                      data={imageCarousel}
                      renderItem={({item}) => {
                          return <Carousel source={item.image}/>
                      }} horizontal/>
            <View style={styles.imageNoContainer}>
                <Text style={styles.imageNoText}>{imageShowedNumber}/5</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        height: verticalScale(275),
        flexGrow: 0,
    },
    imageNoContainer: {
        paddingVertical: verticalScale(5),
        paddingHorizontal: horizontalScale(15),
        position: "absolute",
        right: verticalScale(20),
        bottom: horizontalScale(20),
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: moderateScale(5),
    },
    imageNoText: {
        color: "white",
        fontSize: moderateScale(14),
        fontFamily: "Gilroy-Bold",
    }
})

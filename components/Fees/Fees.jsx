import {View} from "react-native";
import {AppointmentTypeCard} from "../../resusable/AppointmentTypeCard/AppointmentTypeCard";

export const Fees = () => {
    return (
        <View>
            <AppointmentTypeCard appointmentType={"In-Clinic Appointment"}/>
            <AppointmentTypeCard appointmentType={"Virtual Appointment"}/>
        </View>
    )
}

import { View, StyleSheet } from "react-native"
import { Heading1 } from "../../components/Heading"

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Heading1 title="Welcome to Home Screen" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default HomeScreen
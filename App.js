import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function App(){
    return(
        <View>
            <StatusBar style={styles.statusbar}/>
            <Text>
                Hello World!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    statusbar: {
        color: 'teal'
    }
})
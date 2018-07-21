import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native'
import {red, white} from "../utils/colors";

class Deck extends Component {

    render() {

        const {item} = this.props

        return (

            <View style={styles.item}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={styles.subtitle}>
                    {item.questions.length}
                </Text>
            </View>
        )
    }
}

export default Deck
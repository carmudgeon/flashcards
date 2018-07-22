import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native'
import {red, white} from "../utils/colors";
import {connect} from "react-redux";
import NavigationService from "../utils/NavigationService";

class DeckItem extends Component {

    render() {


        const {item} = this.props

        return (
            <TouchableOpacity
                onPress={() => NavigationService.navigate('Deck', item)}
            >
                <View style={styles.item}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {item.questions.length}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
    title: {
        fontSize: 24,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        color: red,
        textAlign: 'center'
    }
})

export default DeckItem
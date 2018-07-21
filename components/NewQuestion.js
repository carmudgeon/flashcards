import React, { Component } from 'react'
import { View,Text, StyleSheet, Platform, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading} from 'expo'


class NewDeck extends Component {
    state = {
        ready: false,
    }

    componentDidMount() {
    }

    render() {

        const { ready } = this.state;

        if (ready === false) {
            return <AppLoading />
        }

        return (
            <View style={styles.container}>
                <Text >New Deck</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    }
})

function mapStateToProps(decks) {
    return {
        decks: Object.values(decks)
    }
}

export default connect(mapStateToProps)(NewDeck)
import React, { Component } from 'react'
import { View,Text, StyleSheet, Platform, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';
import { AppLoading} from 'expo'
import DeckItem from './DeckItem';


class DeckList extends Component {
    state = {
        ready: false,
    }


    componentWillMount() {
        const { dispatch } = this.props
        getDecks()
            .then((decks) => dispatch(receiveDecks(decks)))
            .then(() => this.setState(() => ({ready: true})))
    }

    renderDeckItem({item}) {
        return (
            <DeckItem item={item} />
        )
    }

    render() {

        const { decks } = this.props;
        const { ready } = this.state;

        if (ready === false) {
            return <AppLoading />
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={decks}
                    renderItem={this.renderDeckItem}
                />
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

export default connect(mapStateToProps)(DeckList)
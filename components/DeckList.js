import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

class DeckList extends Component {
    componentDidMount() {
    }

    render() {

        return (
            <View></View>
        );
    }
}


function mapStateToProps(deckList) {
    return {
        deckList
    }
}

export default connect(mapStateToProps)(DeckList)
import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, Platform, FlatList} from 'react-native'
import {connect} from 'react-redux'
import CommonButton from './CommonButton';
import {purple} from '../utils/colors'
import {handleAddNewDeck} from '../actions';

const defaultState = {
    deckName: ''
}

class NewDeck extends Component {
    state = defaultState

    handleSubmit = () => {
        const {deckName} = this.state
        const {dispatch} = this.props
        const {navigate} = this.props.navigation;

        dispatch(handleAddNewDeck(deckName))
        this.setState(() => ({
            ...defaultState
        }))

        navigate('DeckList')
    }

    handleTitleChange = (title) => {
        this.setState({deckName: title})
    }

    render() {
        const {deckName} = this.state
        return (

            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput placeholder="Deck Title"
                           value={deckName}
                           style={styles.input}
                           onChangeText={this.handleTitleChange}/>
                <CommonButton onPress={this.handleSubmit}>Submit</CommonButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: 60
    },
    input: {
        justifyContent: 'center',
        borderColor: purple,
        height: 40,
        borderWidth: 1,
        marginHorizontal: 30,
        marginVertical: 60,
        padding: 10
    }
})

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(NewDeck)
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {black, gray} from "../utils/colors";
import {connect} from "react-redux";
import CommonButton from "./CommonButton";
import NavigationService from "../utils/NavigationService";
import {clearLocalNotification} from "../utils/api";

class Deck extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: `${navigation.state.params.title}`
        }
    };

    addCard = () => {
        NavigationService.navigate('NewQuestion', this.props.deck)
    }

    startQuiz = () => {
        NavigationService.navigate('Quiz', this.props.deck)
        clearLocalNotification()
    }

    render() {

        const {deck} = this.props

        return (

            <View style={styles.container}>
                <Text style={styles.title}>
                    {deck.title}
                </Text>
                <Text style={styles.subtitle}>
                    {deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}
                </Text>
                <CommonButton onPress={this.addCard} style={styles.addCard}>Add Card</CommonButton>
                {deck.questions.length > 0
                    ? <CommonButton onPress={this.startQuiz} style={styles.submit}>Start Quiz</CommonButton>
                    : ''
                }
            </View>
        )
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
        marginTop: 60,
        marginHorizontal: 30
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20,
        color: gray,
        fontWeight: '300'
    },
    addCard: {
        backgroundColor: 'transparent',
        color: black,
        borderWidth: 1,
        borderColor: black,
        margin: 10
    },
    submit: {
        backgroundColor: black,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: black,
        margin: 10
    }
})

function mapStateToProps(state, props) {
    return {
        deck: props.navigation.state.params
    }
}

export default connect(mapStateToProps)(Deck)
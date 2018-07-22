import React, {Component} from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {handleAddNewQuestion} from "../actions";
import CommonButton from "./CommonButton";
import {purple} from "../utils/colors";
import {getDecks} from "../utils/api";

const defaultQuestion = {
    question: '',
    answer: ''
}

class NewQuestion extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Add Card'
        }
    };

    state = defaultQuestion

    handleSubmit = () => {

        const {question, answer} = this.state
        const {deck} = this.props
        const {dispatch} = this.props
        const {navigate} = this.props.navigation;


        dispatch(handleAddNewQuestion(deck.title, {question, answer}))
        this.setState(() => ({
            ...defaultQuestion
        }))
        getDecks()
            .then((decks) => navigate('Home', decks))

    }

    handleQuestionChange = (question) => {
        this.setState({question: question})
    }

    handleAnswerChange = (answer) => {
        this.setState({answer: answer})
    }

    render() {
        const {question, answer} = this.state
        return (

            <View style={styles.container}>
                <TextInput placeholder="Question"
                           value={question}
                           style={styles.input}
                           onChangeText={this.handleQuestionChange}/>
                <TextInput placeholder="Answer"
                           value={answer}
                           style={styles.input}
                           onChangeText={this.handleAnswerChange}/>
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
    input: {
        justifyContent: 'center',
        borderColor: purple,
        height: 40,
        borderWidth: 1,
        marginHorizontal: 40,
        marginVertical: 20,
        padding: 10
    }
})

function mapStateToProps(state, props) {
    return {
        deck: props.navigation.state.params
    }
}

export default connect(mapStateToProps)(NewQuestion)
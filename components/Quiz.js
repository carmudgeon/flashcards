import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import CommonButton from "./CommonButton";
import {purple} from "../utils/colors";
import NavigationService from "../utils/NavigationService";

const defaultQuiz = {
    questionIndex: 0,
    correct: 0,
    incorrect: 0,
    complete: false
}

class Quiz extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Quiz'
        }
    };

    state = defaultQuiz

    retakeQuiz = () => {
        this.setState(() => ({
            ...defaultQuiz
        }))
    }

    goBack = () => {
        NavigationService.navigateBack()
    }

    handleNextQuestion = () => {
        const {deck} = this.props
        const {questionIndex} = this.state
        if (questionIndex < deck.questions.length - 1) {
            this.setState({questionIndex: questionIndex + 1})
        } else {
            this.setState({complete: true})
        }
    }

    handleCorrect = () => {
        const {correct} = this.state
        this.setState({correct: correct + 1})
        this.handleNextQuestion()
    }

    handleIncorrect = () => {
        const {incorrect} = this.state
        this.setState({incorrect: incorrect + 1})
        this.handleNextQuestion()
    }

    render() {
        const {questionIndex, correct, incorrect, complete} = this.state
        const {deck} = this.props

        if (complete === true) {
            return (
                <View style={styles.container}>
                    <Text>Correct Answers: {correct}</Text>
                    <Text>Incorrect Answers: {incorrect}</Text>
                    <CommonButton onPress={this.retakeQuiz}>Retake Quiz</CommonButton>
                    <CommonButton onPress={this.goBack}>Go Back</CommonButton>
                </View>
            )
        }

        const currentQuestion = deck.questions[questionIndex]
        return (

            <View style={styles.container}>

                <Text>{questionIndex + 1}/{deck.questions.length}</Text>
                <Text>{currentQuestion.question}</Text>
                <Text>{currentQuestion.answer}</Text>
                <CommonButton onPress={this.handleCorrect}>Correct</CommonButton>
                <CommonButton onPress={this.handleIncorrect}>Incorrect</CommonButton>
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

export default connect(mapStateToProps)(Quiz)
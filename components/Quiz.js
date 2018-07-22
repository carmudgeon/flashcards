import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import CommonButton from "./CommonButton";
import {black, green, white, red2, purple, gray} from "../utils/colors";
import NavigationService from "../utils/NavigationService";

const defaultQuiz = {
    questionIndex: 0,
    correct: 0,
    incorrect: 0,
    showAnswer: false,
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
            this.setState({questionIndex: questionIndex + 1, showAnswer: false})
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

    handleToggle = () => {
        const {showAnswer} = this.state
        this.setState({showAnswer: !showAnswer})
    }

    render() {
        const {questionIndex, correct, incorrect, complete, showAnswer} = this.state
        const {deck} = this.props

        if (complete === true) {
            return (
                <View style={styles.container}>
                    <Text style={styles.subtitle}>Correct Answers: {correct}</Text>
                    <Text style={styles.subtitle}>Incorrect Answers: {incorrect}</Text>
                    <CommonButton style={styles.retake} onPress={this.retakeQuiz}>Retake Quiz</CommonButton>
                    <CommonButton onPress={this.goBack}>Go Back</CommonButton>
                </View>
            )
        }

        const currentQuestion = deck.questions[questionIndex]
        return (

            <View style={styles.container}>

                <Text style={styles.count}>{questionIndex + 1}/{deck.questions.length}</Text>
                {showAnswer !== true
                    ? <Text style={styles.title}>{currentQuestion.question}</Text>
                    : <Text style={styles.title}>{currentQuestion.answer}</Text>
                }
                <Text style={styles.toggle} onPress={this.handleToggle}>
                    {showAnswer !== true
                        ? 'Answer'
                        : 'Question'
                    }</Text>
                <CommonButton style={styles.correct} onPress={this.handleCorrect}>Correct</CommonButton>
                <CommonButton style={styles.incorrect} onPress={this.handleIncorrect}>Incorrect</CommonButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    count: {
        marginLeft: 5,
        fontWeight: 'bold'
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
    toggle: {
        color: red2,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 40
    },
    correct: {
        backgroundColor: green,
        color: white,
        borderWidth: 1,
        borderColor: black,
        margin: 10
    },
    incorrect: {
        backgroundColor: red2,
        color: white,
        borderWidth: 1,
        borderColor: black,
        margin: 10
    },
    retake: {
        backgroundColor: purple,
        color: white,
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

export default connect(mapStateToProps)(Quiz)
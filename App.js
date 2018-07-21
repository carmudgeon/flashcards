import React from 'react';
import { View, Platform, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo'

import { purple, white } from './utils/colors';

import reducer from './reducers';
import middleware from './middleware';
import DeckList from './components/DeckList';
import AddCard from './components/AddCard';


// Taken from UdacityFitness app
function UdaciStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Deck List',
            tabBarIcon: ({ tintColor }) => <Ionicons name='logo-buffer' size={30} color={tintColor} />
        },
    }/*,
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            tabBarLabel: 'Add Card',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        },
    },*/
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})





export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducer, middleware)}>
            <View style={{flex: 1}}>
                <UdaciStatusBar backgroundColor={purple} barStyle="light-content"/>
                <Tabs />
            </View>
        </Provider>
    );
  }
}


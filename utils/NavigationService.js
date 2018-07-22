// NavigationService.js taken from the official react nativ documentation

import {NavigationActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

// add other navigation functions that you need and export them

function navigateBack() {
    _navigator.dispatch(
        NavigationActions.back()
    )
}

export default {
    navigate,
    navigateBack,
    setTopLevelNavigator,
};
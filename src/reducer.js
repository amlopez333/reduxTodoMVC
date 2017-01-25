import {Map} from 'immutable';

var setState = function(state, newState){
    return state.merge(newState);
};
var reducer = function (state = Map(), action){
    switch(action.type){
        case 'SET_STATE':
            return setState(state, action.state);
    };
    return state;
};

export default reducer;
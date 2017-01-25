import {Map} from 'immutable';

var setState = function(state, newState){
    return state.merge(newState);
};
var toggleComplete = function(state, itemId){
    const itemIndex = state.get('todos').findIndex(function(item){
        return item.get('id') === itemId
    });
    const updatedItem = state.get('todos').get(itemIndex).update('status', function(status){
        if(status === 'active'){
            return status = 'completed';
        }
        else{
            return status = 'active';
        };
    });
    return state.update('todos', function(todos){
        return todos.set(itemIndex, updatedItem);
    });
};
var changeFilter = function(state, filter){
    return state.set('filter', filter);
};
export var reducer = function (state = Map(), action){
    switch(action.type){
        case 'SET_STATE':
            return setState(state, action.state);
        case 'TOGGLE_COMPLETE':
            return toggleComplete(state, action.itemId);
        case 'CHANGE_FILTER':
            return changeFilter(state, action.filter);
    };
    return state;
};

export default reducer;
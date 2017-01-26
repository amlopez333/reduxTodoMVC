import {Map} from 'immutable';

//utility function
var getItemIndex = function(state, itemId){
    return state.get('todos').findIndex(function(item){
        return item.get('id') === itemId;
    });
};

var setState = function(state, newState){
    return state.merge(newState);
};

var toggleComplete = function(state, itemId){
    const itemIndex = getItemIndex(state, itemId);
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

var editItem = function(state, itemId){
    const itemIndex = getItemIndex(state, itemId);
    const updatedItem = state.get('todos').get(itemIndex).set('editing', true);
    return state.update('todos', function(todos){
        return todos.set(itemIndex, updatedItem);
    });
};

var cancelEditing = function(state, itemId){
    const itemIndex = state.get('todos').findIndex(function(item){
        return item.get('id') === itemId;
    });
    const updatedItem = state.get('todos').get(itemIndex).set('editing', false);
    return state.update('todos', function(todos){
        return todos.set(itemIndex, updatedItem);
    });
};

var doneEditing = function(state, itemId, newText){
    const itemIndex = getItemIndex(state, itemId);
    const updatedItem = state.get('todos').get(itemIndex).set('editing', false).set('text', newText);
    return state.update('todos', function(todos){
        return todos.set(itemIndex, updatedItem);
    });
};

var clearCompleted = function(state){
    return state.update('todos', function(todos){
        return todos.filterNot(function(item){
            return item.get('status') === 'completed';
        });
    });
};

var addItem = function(state, text){
    const itemId = state.get('todos').reduce(function(maxId, item){
    return Math.max(maxId, item.get('id'))}, 0) + 1;
    const newItem = Map({id: itemId, text: text, status: 'active'});
    return state.update('todos', function(todos){
        return todos.concat([newItem]);
    });
};

var deleteItem = function(state, itemId){
    return state.update('todos', function(todos){
        return todos.filterNot(function(item){
            return item.get('id') === itemId;
        });
    });
};

var reducer = function (state = Map(), action){
    switch(action.type){
        case 'SET_STATE':
            return setState(state, action.state);
        case 'TOGGLE_COMPLETE':
            return toggleComplete(state, action.itemId);
        case 'CHANGE_FILTER':
            return changeFilter(state, action.filter);
        case 'EDIT_ITEM':
            return editItem(state, action.itemId);
        case 'CANCEL_EDITING':
            return cancelEditing(state, action.itemId);
        case 'DONE_EDITING':
            return doneEditing(state, action.itemId, action.newText);
        case 'CLEAR_COMPLETED':
            return clearCompleted(state);
        case 'ADD_ITEM':
            return addItem(state, action.text);
        case 'DELETE_ITEM':
            return deleteItem(state, action.itemId);
    };
    return state;
};

export default reducer;
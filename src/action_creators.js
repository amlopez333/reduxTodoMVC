export var toggleComplete = function(itemId){
    return{
        type: 'TOGGLE_COMPLETE',
        itemId
    };
};

export var changeFilter = function(filter){
    return{
        type: 'CHANGE_FILTER',
        filter
    };
};

export var editItem = function(itemId){
    return{
        type: 'EDIT_ITEM',
        itemId
    };
};

export var cancelEditing = function(itemId){
    return{
        type: 'CANCEL_EDITING',
        itemId
    };
};

export var doneEditing = function(itemId, newText){
    return{
        type: 'DONE_EDITING',
        itemId,
        newText
    };
};

export var clearCompleted = function(){
    type: 'CLEAR_COMPLETED'
};

export var addItem = function(text){
    return{
        type: 'ADD_ITEM',
        text
    };
};

export var deleteItem = function(itemId){
    return{
        type: 'DELETE_ITEM',
        itemId
    };
};

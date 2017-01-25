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


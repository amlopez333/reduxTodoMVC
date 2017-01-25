import React from 'react';

var TodoFooter = React.createClass({
    render: function(){
        return(
            <footer className = 'footer'>
                <p>Double click an item to edit a todo!</p>
                <p>Written by <a href = 'https://amlopez333.github.io' target = '_blank'>Andy López</a></p>
                <p>Part of <a href = 'http://todomvc.com' target = '_blank'>TodoMVC</a></p>
            </footer>
        );
    }
});
export default TodoFooter;
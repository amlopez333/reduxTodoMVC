import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

var TodoHeader = React.createClass({
    mixins: [PureRenderMixin],
    handleKeyPress: function(evt){
        if(evt.key === 'Enter' && this.refs.addTodoInput.value !== ''){
            return this.props.addItem(this.refs.addTodoInput.value);
        };
    },
    render: function(){
        return(
            <header className = 'header'>
                <h1>Todos</h1>
                <input className = 'new-todo' ref = 'addTodoInput' autoFocus 
                autoComplete = 'off' placeholder = 'What needs to be done?' onKeyPress = {this.handleKeyPress}/>
            </header>
        );
    }
});
export default TodoHeader;
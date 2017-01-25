import React from 'react';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoTools from './TodoTools';
var TodoApp = React.createClass({
    getNActiveItems: function(){
        if(this.props.todos){
            const activeItems = this.props.todos.filter(function(item){
                item.get('status') === 'active';
            }.bind(this));
            return actriveItems.size;
        }
        return 0;
    },
    render: function(){
        return (
            <div>
                <section className = 'todoApp'>
                    <TodoHeader />
                    <TodoList todos = {this.props.todos} filter = {this.props.filter}/>
                    <TodoTools filter = {this.props.filter} nActiveItems = {this.getNActiveItems}/>
                </section>
                <TodoFooter />
            </div>
        );
    }
});

export default TodoApp;
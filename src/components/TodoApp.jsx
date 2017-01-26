import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoTools from './TodoTools';
var TodoApp = React.createClass({
    getNActiveItems: function(){
        if(this.props.todos){
            const activeItems = this.props.todos.filter(function(item){
                return item.get('status') === 'active';
            }.bind(this));
            return activeItems.size;
        }
        return 0;
    },
    render: function(){
        return (
            <div>
                <section className = 'todoapp'>
                    <TodoHeader addItem = {this.props.addItem} />
                    <TodoList {...this.props}/>
                    <TodoTools filter = {this.props.filter} nActiveItems = {this.getNActiveItems()} 
                    changeFilter = {this.props.changeFilter} clearCompleted = {this.props.clearCompleted}/>
                </section>
                <TodoFooter />
            </div>
        );
    }
});

export default TodoApp;

function mapStateToProps(state){
    return {
        todos: state.get('todos'),
        filter: state.get('filter')
    };
};

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
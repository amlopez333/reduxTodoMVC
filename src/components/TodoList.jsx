import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TodoItem from './TodoItem';
var TodoList = React.createClass({
    isCompleted: function(item){
        return item.get('status') === 'completed';
    },
    isEditing: function(item){
        return item.get('editing');
    },
    getItems: function(){
        if(this.props.todos){
            return this.props.todos.filter(function(item){
                return this.props.filter === 'all' || item.get('status') === this.props.filter;
            }.bind(this));
        };
        return [];
    },
    getItemId: function(item){
        return item.get('id');
    },
    setInitialState: function(){
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    },
    render: function(){
        return(
            <section className = 'main'>
                <ul className = 'todo-list'>
                    {   
                        this.getItems().map(function(item, i){
                            return(
                                <TodoItem key = {item.get('text')} text = {item.get('text')} id = {this.getItemId(item)}
                                isCompleted = {this.isCompleted(item)} isEditing = {this.isEditing(item)} doneEditing = {this.props.doneEditing}
                                cancelEditing = {this.props.cancelEditing} toggleComplete={this.props.toggleComplete} deleteItem={this.props.deleteItem}
                                editItem={this.props.editItem}/>
                            );
                        }.bind(this))
                    }
                </ul>
            </section>
        )
    }
});

export default TodoList;
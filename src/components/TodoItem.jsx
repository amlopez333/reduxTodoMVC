import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import TextInput from './TextInput';
var TodoItem = React.createClass({
    deleteItem: function(){
        this.props.deleteItem(this.props.id);
    },
    toggleComplete: function(){
        this.props.toggleComplete(this.props.id);
    },
    editItem: function(){
        this.props.editItem(this.props.id);
    },
    setInitialState: function(){
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    },
    render: function(){
        var itemClass = classNames({
            //Agregar classNames y hacer pruebas!
            'todo': true,
            'completed': this.props.isCompleted,
            'editing': this.props.isEditing
        });
        return(
            <li className = {itemClass}>
                <div className = "view">
                    <input type = "checkbox" className = "toggle" defaultChecked = {this.props.isCompleted} onClick = {this.toggleComplete}/>
                    <label htmlFor = "todo" ref = 'text' onDoubleClick = {this.editItem}>
                        {this.props.text}
                    </label>
                    <button className="destroy" onClick = {this.deleteItem}></button>
                </div>
                <TextInput text = {this.props.text} itemId = {this.props.id} 
                cancelEditing = {this.props.cancelEditing} doneEditing = {this.props.doneEditing}/>
            </li>
        )
    }
});

export default TodoItem;
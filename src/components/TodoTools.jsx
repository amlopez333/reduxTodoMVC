import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

var TodoTools = React.createClass({
    mixins: [PureRenderMixin],
    getNItemsLeft: function(){
        return this.props.nActiveItems || 0;
    },
    isSelected: function(filter){
        return this.props.selectedFilter === filter || false;
    },
    setSelectedClass: function(filter){
        return classNames({'selected': this.props.filter === filter});
    },
    changeFilterToAll: function(evt){
        this.props.changeFilter('all');
    },
    changeFilterToActive: function(){
        this.props.changeFilter('active');
    },
    changeFilterToCompleted: function(){
        this.props.changeFilter('Completed');
    },
    render: function(){
        return (
            <footer className = 'footer'>
                <span className = 'todo-count'>
                    <strong>{this.getNItemsLeft()}</strong> items left
                </span>
                <ul className = 'filters'>
                    <li>
                        <a href = '#' onClick = {this.changeFilterToAll} className = {this.setSelectedClass('all')}>All</a>
                    </li>
                    <li>
                        <a href = '#' onClick = {this.changeFilterToActive} className = {this.setSelectedClass('active')}>Active</a>
                    </li>
                    <li>
                        <a href = '#' onClick = {this.changeFilterToCompleted} className = {this.setSelectedClass('completed')}>Completed</a>
                    </li>
                </ul>
                <button className = 'clear-completed' onClick = {this.props.clearCompleted}>Clear Completed</button>
            </footer>
        );
    }
});
export default TodoTools;
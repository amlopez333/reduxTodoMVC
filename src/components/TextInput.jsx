import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
var TextInput = React.createClass({
    mixins: [PureRenderMixin],
    getInitialState: function(){
        return {value: this.props.text};
    },
    handleKeyDown: function(evt){
        switch(evt.key){
            case 'Enter':
                return this.props.doneEditing(this.props.itemId, this.state.value);
            case 'Escape':
                return this.cancelEditing(this.props.itemId);
        };
    },
    handleOnBlur: function(evt){
        return this.cancelEditing(this.props.itemId);
    },
    handleOnChange: function(evt){
        this.setState({value: evt.target.value});
    },
    cancelEditing: function(){
        this.setState({value: this.props.text});
        return this.props.cancelEditing(this.props.itemId);
    },

    render: function(){
        return(
            <input type = "text" className = "edit" autoFocus = {true} 
            value = {this.state.value} onChange = {this.handleOnChange}
            ref = 'itemInput' onKeyDown = {this.handleKeyDown} onBlur = {this.handleOnBlur}/>
        );
    }
});

export default TextInput;
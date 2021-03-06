import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoItem from '../../src/components/TodoItem';
import {expect} from 'chai';

const{renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = TestUtils;
describe('TodoItem', function(){
    it('render an item', function(){
        const text = 'React';
        const component = renderIntoDocument(
            <TodoItem text = {text}/>
        );
        const todo = scryRenderedDOMComponentsWithTag(component, 'li');
        expect(todo.length).to.equal(1);
        expect(todo[0].textContent).to.contain('React');    
    });
    it('strikes through if item is completed', function(){
        const text = 'React';
        const component = renderIntoDocument(
            <TodoItem text = {text} isCompleted = {true}/>
        );
        const todo = scryRenderedDOMComponentsWithTag(component, 'li');
        expect(todo[0].classList.contains('completed')).to.equal(true);
    });
    it('it should look different when editing', function(){
        const text = 'React';
        const component = renderIntoDocument(
            <TodoItem text = {text} isEditing = {true}/>
        );
        const todo = scryRenderedDOMComponentsWithTag(component, 'li'); 
        expect(todo[0].classList.contains('editing')).to.equal(true);
    });
    it('should be checked if the item is completed', function(){
        const text = 'React';
        const text2 = 'Redux';
        const component = renderIntoDocument(
            <TodoItem text = {text} isCompleted = {true}/>,
            <TodoItem text = {text2} isCompleted = {false}/>
        );
        const input = scryRenderedDOMComponentsWithTag(component, 'input');
        expect(input[0].checked).to.equal(true);
        expect(input[1].checked).to.equal(false);
    });
    it('invokes a callback when the delete button is clicked', function(){
        const text = 'React';
        var deleted = false;
        //define a mock deleteItem function. Real function is passed as prop callback.
        const deleteItem = function(){
            deleted = true;
        };
        const component = renderIntoDocument(
            <TodoItem text = {text} deleteItem = {deleteItem}/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[0]);
        expect(deleted).to.equal(true);
    });
    it('invokes callback when the checkbox is clicked', function(){
        const text = 'React'; 
        var isChecked = false;
        const toggleComplete = function(){
            isChecked = true;
        };
        const component = renderIntoDocument(
            <TodoItem text = {text} toggleComplete = {toggleComplete}/>
        );
        const checkboxes = scryRenderedDOMComponentsWithTag(component, 'input');
        Simulate.click(checkboxes[0]);
        expect(isChecked).to.equal(true);
    });
    it('invokes a callback wehn the text is double clicked', function(){
        var text = 'React';
        const editItem = function(){
            text = 'Redux';
        };
        const component = renderIntoDocument(
            <TodoItem text = {text} editItem = {editItem}/>
        );
        const label = component.refs.text;
        Simulate.doubleClick(label);
        expect(text).to.equal('Redux');
    });
});


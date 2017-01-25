import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoList from "../../src/components/TodoList";
import {expect} from 'chai';
import {List, Map} from 'immutable';
const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = TestUtils; 

describe('TodoList', function(){
    it('renders a list with only the active items if the filter is active', function(){
        const todos = List.of(
            Map({id: 1, text: 'React', status: 'active'}),
            Map({id: 1, text: 'Redux', status: 'active'}),
            Map({id: 3, text: 'Immutable', status: 'completed'})
        );
        const filter = 'all';
        const component = renderIntoDocument(<TodoList filter = {filter} todos = {todos} />);
        const items = scryRenderedDOMComponentsWithTag(component, 'li');
        expect(items.length).equal(3);
        expect(items[0].textContent).to.contain('React');
        expect(items[1].textContent).to.contain('Redux');

    });
});
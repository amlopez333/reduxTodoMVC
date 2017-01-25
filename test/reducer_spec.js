import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe('reducer', function(){
    it('handles SET_STATE', function(){
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                todos: List.of(
                    Map({id:1, text: 'React', status: 'active'}),
                    Map({id:2, text: 'Redux', status: 'active'}),
                    Map({id:3, text: 'Immutable', status: 'completed'})
                )
            })
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            todos: [
                {id: 1, text: 'React', status: 'active'},
                {id: 2, text: 'Redux', status: 'active'},
                {id: 3, text: 'Immutable', status: 'completed'}
            ]
        })); 
    });
     it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        todos: [
          {id: 1, text: 'React', status: 'active'},
          {id: 2, text: 'Redux', status: 'active'},
          {id: 3, text: 'Immutable', status: 'completed'}
        ]
      }
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      todos: [
        {id: 1, text: 'React', status: 'active'},
        {id: 2, text: 'Redux', status: 'active'},
        {id: 3, text: 'Immutable', status: 'completed'}
      ]
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        todos: [
          {id: 1, text: 'React', status: 'active'},
          {id: 2, text: 'Redux', status: 'active'},
          {id: 3, text: 'Immutable', status: 'completed'}
        ]
      }
    };
    const nextState = reducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      todos: [
        {id: 1, text: 'React', status: 'active'},
        {id: 2, text: 'Redux', status: 'active'},
        {id: 3, text: 'Immutable', status: 'completed'}
      ]
    }));
  });
  it('handles TOGGLE_COMPLETE by changing status from active to complete', function(){
      const initialState = fromJS({
          todos: [
              {id: 1, text: 'React', status: 'active'},
              {id: 2, text: 'Redux', status: 'active'},
              {id: 3, text: 'Immutable', status: 'completed'}
          ]
      });
      const action = {
          type: 'TOGGLE_COMPLETE',
          itemId: 1
      };
      const nextState = reducer(initialState, action);
      expect(nextState).to.equal(fromJS({
          todos: [
              {id: 1, text: 'React', status: 'completed'},
              {id: 2, text: 'Redux', status: 'active'},
              {id: 3, text: 'Immutable', status: 'completed'}
          ]
      })
      );
  });
  it('handles TOGGLE_COMPLETE by changing status from complete to active', function(){
      const initialState = fromJS({
          todos: [
              {id: 1, text: 'React', status: 'active'},
              {id: 2, text: 'Redux', status: 'active'},
              {id: 3, text: 'Immutable', status: 'completed'}
          ]
      });
      const action = {
          type: 'TOGGLE_COMPLETE',
          itemId: 3
      };
      const nextState = reducer(initialState, action);
      expect(nextState).to.equal(fromJS({
          todos: [
              {id: 1, text: 'React', status: 'active'},
              {id: 2, text: 'Redux', status: 'active'},
              {id: 3, text: 'Immutable', status: 'active'}
          ]
      })
      );
  });
  it('handles CHANGE_FILTER by changing filter from all to active', function(){
      const initialState = fromJS({
          todos: [
              {id: 1, text: 'React', status: 'active'}
          ],
          filter: 'all'
      });
      const action = {
          type: 'CHANGE_FILTER',
          filter: 'active'
      };
      const nextState = reducer(initialState, action);
      expect(nextState).to.equal(fromJS({
          todos: [
              {id: 1, text: 'React', status: 'active'}
          ],
          filter: 'active'
      }));
  });
  it('handles CHANGE_FILTER by changing filter from active to completed', function(){
       const initialState = fromJS({
          todos: [
              {id: 1, text: 'React', status: 'active'},
              {id: 2, text: 'Redux', status: 'completed'}
          ],
          filter: 'active'
      });
      const action = {
          type: "CHANGE_FILTER",
          filter: 'completed'
      };
      const nextState = reducer(initialState, action);
      expect(nextState).to.equal(fromJS({
          todos: [
              {id: 1, text: 'React', status: 'active'},
              {id: 2, text: 'Redux', status: 'completed'}
          ],
          filter: 'completed'
      }));
  });
});
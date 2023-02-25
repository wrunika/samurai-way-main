import {ActionType, reducer, StateType} from "./reducer";

test('reducer should change collapsed to true', ()=>{
    const state: StateType = {
        collapsed: false
    }
    const action: ActionType = {
        type: "TOGGLE-COLLAPSED"
    }

    const newState = reducer(state, action)

    expect(newState.collapsed).toBe(true)
})

test('reducer should change collapsed to false', ()=>{
    const state: StateType = {
        collapsed: true
    }
    const action: ActionType = {
        type: "TOGGLE-COLLAPSED"
    }

    const newState = reducer(state, action)

    expect(newState.collapsed).toBe(false)
})

test('reducer should give error', ()=>{
    const state: StateType = {
        collapsed: true
    }
    const action: ActionType = {
        type: "SOME-TYPE"
    }

    expect(()=>{
        reducer(state, action)
    }).toThrowError();
})
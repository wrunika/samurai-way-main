export type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    //debugger
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return {
                ...state,
                collapsed: !state.collapsed
            };
        default:
            //return state;
            //throw new Error('Bad action type')  //таким образом можно выдавать генерацию новой ошибки
            throw new Error()  //таким образом можно выдавать генерацию новой ошибки
    }
    /*if (action.type === "TOGGLE-COLLAPSED") {
        return !state
    }
    return state;*/
}

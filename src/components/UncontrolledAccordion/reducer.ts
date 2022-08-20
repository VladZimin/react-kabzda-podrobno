export type StateType = {
    isCollapsed: boolean
}
export type ActionType = {
    type: 'TOGGLE_COLLAPSED'
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE_COLLAPSED':
            return {...state, isCollapsed: !state.isCollapsed}
        default:
            return state
    }
}
export const InitialState = {
    bottomPosition: 'bottom-[4em]',
    showScrollButton: false
}

export const HomeReducer = ( state, {type, payload}) => {
    switch (type) {
        case 'WINDOW_DOWN':{
            return {
                ...state,
                bottomPosition: payload.position,
                showScrollButton: payload.showScroll
            }
        }

        case 'WINDOW_UP':{
            return {
                ...state,
                bottomPosition: payload.position,
                showScrollButton: payload.showScroll
            }
        }

        default :
            return state
    }
}
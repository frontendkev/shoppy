

export const SHOW_DESCRIPTION = "SHOW_DESCRIPTION";
export const DESCRIPTION = "DESCRIPTION";
export const SIZE = "SIZE";
export const SHOW_SIZE = "SHOW_SIZE";
export const ProductReducerState = {
    currentInfo: DESCRIPTION
}

function productReducer (state, {type,payload}) {
    switch (type) {
        case SHOW_DESCRIPTION: {
            return {
                ...state, currentInfo: DESCRIPTION
            }
        }

        case SHOW_SIZE: {
            return {
                ...state, currentInfo: SIZE
            }
        }

        default : {
            return state
        }
    }
}

export default productReducer;
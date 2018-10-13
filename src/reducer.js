import { INC, DEC } from './actionCreator';

const initialState = {
    count: 0
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case INC:
            var newState = { ...state };
            newState.count++;
            return newState;
        case DEC:
            var newState = { ...state };
            newState.count--;
            return newState;
        default:
            return state;
    }
}
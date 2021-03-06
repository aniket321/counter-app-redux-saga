import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = { count: 0 };

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
            break;
        case DECREMENT:
            return { count: state.count - 1 };
            break;
        default:
            return state;
    }
}

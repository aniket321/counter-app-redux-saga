import { INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC } from './types';

export const increment = () => {
    // console.log('increment')
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    // console.log('decrement')
    return {
        type: DECREMENT
    }
}

export const incrementAsync = () => {
    // console.log('incrementAsync')
    return {
        type: INCREMENT_ASYNC
    }
}

export const decrementAsync = () => {
    // console.log('decrementAsync')
    return {
        type: DECREMENT_ASYNC
    }
}

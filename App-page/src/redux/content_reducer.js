import { FETCH_CONTENT, FETCHED_CONTENT } from './actions'

export default function (state = { loading: false, loaded: false, data: null, error: null }, action) {
    switch (action.type) {
        case FETCH_CONTENT:
            return {
                ...state,
                loading: true
            }

        case FETCHED_CONTENT:
            return {
                loading: false,
                loaded: true,
                data: action.payload,
                error: action.error
            }
    }
    return state
}

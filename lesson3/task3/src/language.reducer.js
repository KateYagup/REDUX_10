import { SET_LANGUAGE } from "./language.actions";



export const languageReducer = (state = 'en', action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return action.payload.lang;
        default:
            return state;
    }

}
export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';

export const addUser = (text) => {
    return {
        type: ADD,
        text
    }
}

export const deleteUser = (index) => {
    return {
        type: DELETE,
        index
    }
}
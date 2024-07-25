// Assuming User is an imported type or class. If you need to define it, you can use a placeholder.
const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                currentUser: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                currentUser: null,
            };
        default:
            return state;
    }
};

export { AuthReducer };

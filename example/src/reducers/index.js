module.exports = function (state = {name : 168}, action) {
    switch (action.type) {
        case 'ADD':
            return {name : state.name += 1 };
        case 'ADDMUL':
            return {name : state.name += action.data };
        default:
            return state;
    }
}
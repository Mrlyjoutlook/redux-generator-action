import co from 'co';

export default ({ dispatch, getState }) => next => action => {
    //Check action is Array?
    if (!Array.isArray(action)) return next(action);

    function dealType(obj) {
        switch (obj['type']) {
            case 'GEN_ALL':
                return Promise.all(obj.data.map(val => dispatch(val)))
                break;
            case 'GEN_RACE':
                return Promise.race(obj.data.map(val => dispatch(val)))
                break;
            default:
                return dispatch(obj)
        }
    }

    function* gen(arr) {
        let i = 0;
        while (i < arr.length) {
            yield Array.isArray(arr[i]) ? gen(arr[i]) : dealType(arr[i])
        }
    }
    
    return co(gen(action))
}
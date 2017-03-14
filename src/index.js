import co from 'co';

export default function generator({ dispatch, getState }) {
    return next => action => {
        // Check action is Array?
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
            for (let i=0,n=arr.length;i<n;i++) {
                yield Array.isArray(arr[i]) ? gen(arr[i]) : typeof arr[i] === 'object' ? dealType(arr[i]) : dispatch(arr[i]);
            }
        }
        return co(gen(action))
    }
}
export function addOne(){
    return {type:'ADD'}
}

export function addMul(){
    return [
        {type:'ADDMUL',data:1},
        {type:'ADDMUL',data:2},
        {type:'ADDMUL',data:3}
    ]
}

export function addMulProm(){
    return [
        {type:'ADDMUL',data:1},
        {type:'GEN_ALL',data:2},
        {type:'ADDMUL',data:3}
    ]
}
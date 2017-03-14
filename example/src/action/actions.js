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

function promise(num,time){
    return (dispatch,getState)=>{
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve(dispatch({type:'ADDMUL',data:num}))
            },time)
        })
    }
}

export function addMulProm(){
    return [
        promise(1,2000),
        promise(2,2000),
        promise(3,2000)
    ]
}

export function addMulPromArr(){
    return [
        promise(1,2000),
        [promise(1,2000),promise(2,2000),promise(3,2000)],
        promise(3,2000)
    ]
}

export function addMulPromArrAll(){
    return [
        promise(1,2000),
        {type:'GEN_ALL',data:[promise(1,1000),promise(2,2000),promise(3,3000)]},
        promise(3,2000)
    ]
}

export function addMulPromArrRace(){
    return [
        promise(1,2000),
        {type:'GEN_RACE',data:[promise(1,1000),promise(2,2000),promise(3,3000)]},
        promise(3,2000)
    ]
}
export const deposit=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"Deposit",
            payload:amount
        })
    }
}
export const Withdraw=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"withdraw",
            payload:amount
        })
    }
}
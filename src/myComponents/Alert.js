import React from 'react'



function Alert(props) {
    

    //My JSX style for the alert component:'#ffecb5'#664d03
// let myAlertStyle = {
//     backgroundColor: props.switchMode ==='dark'?'grey':'', 
//     color: props.switchMode === 'dark'?'white':''
// }



//The capitalizing function

const capitalize = (WORD)=>{
    let lower = WORD.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}




  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
</div>
  )
}

export default Alert
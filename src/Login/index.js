import React from 'react'
import './index.css'

const Input = (props)=>{
  return <div className="Input">
  <fieldset>
   <legend>{props.name}</legend>
    <input type={props.type}/>
  </fieldset>
  </div>
}
const Alert = (props)=>{
  return (props.message&&props.type)&&<div className={`Alert ${props.type}`}>{props.type&&props.type.toUpperCase()}: {props.message}</div>
}
class Login extends React.Component{
  render(){
    return(
      <div className="Login">
        <h1>Login</h1>
        <Input name={"Email"} type={"text"}/>
        <Input name={"Password"} type={"password"}/>
        <Alert message={'THis is alert'} type="warning"/>
        <button>Submit</button>
      </div>
    )
  }
};

export default Login;
import React, { Component } from 'react'
/**
 * Template item comment 
 * @function del Delete target item comment
 * @returns {html} Returns template item comment.
 */
export function LoginForm(props){
	console.log(props.check);
	return (<div>
   <div className = "box Authorization" >
      <h1> Авторизация пользователя </h1>
      <form>
         <div className = "inputbox">
            <input 
               required id = "log"
               type = "text"
               name = "login" 
               />
            <label> Username </label> 
         </div>
         <div className="inputbox">
            <input required 
               id = "pass"
               type = "password"
               name = "password" 
               />
            <label> 
            Password 
            </label> 
         </div>
         <div className='box__btn'>
            <div onClick = {props.login.bind()}
            className = 'sbm'> 
            Войти 
         </div>
         <span className = 'span_save'>
         <input type = 'checkbox'
            name = 'check'
            id = 'check' / >
         Запомнить 
         </span> 
   </div>
   </form>              
</div>
</div>);      
}
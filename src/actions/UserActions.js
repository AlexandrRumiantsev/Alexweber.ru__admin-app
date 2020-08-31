import { SET_YEAR } from '../constants/Main'
import axios from 'axios';
import React, { Component } from 'react'

export function getUser(state , data , store) {
 
	axios.get('http://alexweber.ru:5000/login?login=' + data.log + '&password=' + data.pass)
          .then( response => {
            if (response.data.length != 0){ 

             store.dispatch(
                            {
                              type : 'SetUser',
                              val : data
                            }
                        )
                    return state;
              
            }else{
                alert('Неверный логин или пароль');
            }   
          })
          .catch(error => {
              console.log(error)
          });
    return state;
  
  }
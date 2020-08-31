import React, { Component } from 'react'
/**
 * Template item comment 
 * @function del Delete target item comment
 * @returns {html} Returns template item comment.
 */
export function ItemCommentTemplate(props , del){
    return <div className='item-comment'>
            <span onClick={ del.bind() }>
                  <i class="fas fa-trash-alt"></i>
            </span>
           <div className='item-comment__title'>
              title is: {props.data.title}
           </div>
           <div className='item-comment__paper'>
              paper is: {props.data.paper}
           </div>
           <div className='item-comment__user'>
              user is: {props.data.user}
           </div>
         </div>                  
}
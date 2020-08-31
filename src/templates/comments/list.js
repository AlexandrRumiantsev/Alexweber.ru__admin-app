import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
/**
 * Template item comment 
 * @function del Delete target item comment
 * @returns {html} Returns template item comment.
 */
//console.log(myModule.liba.other.goToMain());
export function ListCommentTemplate(goToMain , comments , store , ItemComment ){
  return ( <div className='page-comment'>
                    { store.getState().comments.data.map((comments, index)=> {
                      return <section id={comments._id} 
                                      className='comment-list-item' 
                                      key={comments._id}>
                                <ItemComment store={store}  data={comments} />
                            </section>
                    })}
              </div>)            
}
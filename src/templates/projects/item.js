import React, {
  Component
} from 'react'
import {
  Link
} from "react-router-dom";
/*
<span onClick={(e)=>{
                  editProject(props.data , props.store ,e.target );
                }}>
                */
export function ItemProjectTemplate(props) {
    const editProject = props.editProject;
    const store = props.store;
    const itemDel = props.itemDel;
    return <div className='item'>
              <div className='item__title'>
                  <div className='title__content'>
                    {props.data.name}
                  </div>
              </div>
              <div className='container-btn'>
                <a target='_blank' href={props.data.link}>
                  <i class="fal fa-tv"></i>
                </a>  
                <Link onClick={
                  ()=>{
                    let div = document.createElement('div');
                    document.body.appendChild(div);
                  }
                } to={"/edit-project-" + props.data._id}>
                  <i class="fas fa-edit"></i>
                </Link>
                <span onClick={itemDel.bind()}>
                  <i class="fas fa-trash-alt"></i>
                </span>
              </div>
            </div>
}
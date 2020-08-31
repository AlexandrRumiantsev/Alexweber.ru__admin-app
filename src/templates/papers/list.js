import Icon from '@material-ui/core/Icon';
import { ItemPaperTemplate } from './item.js';
import React from 'react'

export function ListPaperTemplate(props) {
    return(
      <div className='container-paper'>
                    <Icon 
                      className="fa fa-plus-circle" 
                      style={{ color: 'red' }} 
                      onClick={
                        props.myModule.liba.materialUI.paperAddPopap.bind(props.store)
                      }
                    />
       {
          props.data.map((papers, index)=> {
                return <section id={papers._id} className='section' key={index}> 
                    <ItemPaperTemplate papers={papers} store={props.store}/>  
                </section>
              })}
      </div>
    )
}

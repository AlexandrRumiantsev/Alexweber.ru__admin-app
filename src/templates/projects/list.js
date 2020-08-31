import React, {
  Component
} from 'react'
import {
  Link
} from "react-router-dom";
export function ListProjectTemplate(props){
	const editProject = props.editProject;
	const ItemProjectTemplate = props.item;
	const itemDel = props.itemDel;
	
	return (<div>
		<div class='list-projects'>
		<div class='edit-container'></div>
	      {props.data.map((project, index)=> {
	        console.log(project.imageFull);
	            const pStyle = {
	              background: "url('http://alexweber.ru/img/"+project.image+"')",
	              backgroundSize: 'cover' 
	            };
	            return <div style={pStyle} 
	            			class='projects__item' 
	                        key={index}>
		                        <ItemProjectTemplate 
		                        data={project}
		                        editProject={editProject}
		                        itemDel={itemDel}
		                        />
	                   </div>     
                
	       })}
		</div>
	</div>)
}


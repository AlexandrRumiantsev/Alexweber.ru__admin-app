import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import ReactDOM from 'react-dom'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import {DropzoneArea} from 'material-ui-dropzone'
import {DropzoneDialog} from 'material-ui-dropzone'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

/*
	Структура формы
*/

const data = {
   'Title': {
   	 'component': 'TextField',
   	 'id': 'title_form',
   	 'to': 'container-title',
   	 'label': 'Заголовок'
   } , 
   'Discr': {
   	 'component': 'TextField',
   	 'id': 'discr_form',
   	 'to': 'container-discr',
   	 'label': 'Описание'
   } ,
   'FormController': {
   	 'id': 'form_controller',
   	 'to': 'container-check'
   } ,
   'DD': {
   	 'id': 'Dropzone',
   	 'component': 'DropzoneArea',
   	 'to': 'container-img',
   	 'label': 'Файл'
   }
}


/*
	Рендер базового компонента формы
*/
const componentRender = function(data){
	ReactDOM.render(
	    <TextField 
	        id={data.id} 
	        label={data.label}
	     /> , 
	     document.getElementsByClassName(data.to)[0]
    )
}

/*
	Рендер элемента для загрузки файла
*/
const dropzoneRender = function(data){
	ReactDOM.render(
	    <DropzoneArea
	        acceptedFiles={['image/*', 'video/*', 'application/*']}
	        id='file'
	        filesLimit={6}
	        maxFileSize={9999999999999999999999999999999}
	        useChipsForPreview={true}
         /> , 
	        document.getElementsByClassName(data.to)[0]
    )
}


/*
	Рендер элемента "Переключатель"
*/
const form_controller = function(data){
		const handleChangePath  = (event) => {
          console.log(event.target);
          ReactDOM.render(
            <TextField id="link" 
                    label="Ссылка"
                  /> ,
          document.getElementsByClassName('container-file')[0]
          )
      	}
      	const handleChangeLoad  = (event) => {
          console.log(event.target);
          ReactDOM.render(
          <DropzoneArea
                    acceptedFiles={['image/*', 'video/*', 'application/*']}
                    id='file'
                    filesLimit={6}
                    maxFileSize={9999999999999999999999999999999}
                    useChipsForPreview={true}
                    />,
          document.getElementsByClassName('container-file')[0]
          )          
      }

	ReactDOM.render(
                <FormControl component="fieldset">
                  <FormLabel component="legend">Файл статьи (способ загрузки)</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1">
                    <FormControlLabel 
                      value="path" 
                      control={<Radio />} 
                      label="Путь к файлу" 
                      onChange={handleChangePath}
                    />
                    <FormControlLabel 
                      value="load" 
                      control={<Radio />} 
                      label="Загрузить файл"
                      onChange={handleChangeLoad} 
                    />
                  </RadioGroup>
                </FormControl> , 
                document.getElementsByClassName('container-check')[0]
              )
}


export class paperAddPopupp{
    setField(data){
    	let Component = data.component;
		switch(data.id){
			case 'Dropzone':		
				dropzoneRender(data);
			break;
			case 'form_controller':
				form_controller(data)	
			break;
			default:
				componentRender(data)	
		}
    }
	constructor(store) {

		let template = document.createElement('div');
      
	      template.innerHTML = `<section class='add_paper_form'>
	            <form id='add_paper'>
	              <div onClick="
                  let elem = this.parentElement.parentElement.parentElement;
                  elem.parentNode.removeChild(elem);
                " 
                class='add_paper_form__close'>
                    X
                </div>
	              <div class='container-title'></div>  
	              <div class='container-discr'></div>
	              <div class='container-img'></div>
	              <div class='container-check'></div> 
	             <div class='container-file'></div> 
	              <div class='container-sbm'></div> 
	            </form>
	      </section>`;
     

	      document.body.appendChild(
	        template    
	      );

			const component = this;
			Object.keys(data).forEach( function(el){
			    let Component = component.setField(data[el]);
			    console.log(data[el].to);	
			})
			
	}
}



/**
  Внешние объекты (библиотеки) для разработки модуля "Редактирование статей"
  makeStyles - пакета решение для стайлинга, используемое в компонентах Material-UI 
  TextField - обертка представляет собой полный элемент управления формы, включая метку, ввод и текст справки.
  clsx - это крошечная утилита для className условного построения строк.
  Card -  Карты содержат контент и действия по одной теме.
  
  Элементы внутри родительского CARD
  CardHeader , CardMedia, CardContent, СardActions
  Collapse - раскрывающийся элемент формы
  Avatar - элемент кзбражения пользователя, внутри Card
  IconButton - Элемент формы "Кнопка" в виде иконки
  Typography - Используйте типографику, чтобы представить свой дизайн и контент как можно более четко и эффективно.
  red - Функция для получения цвета из библиотеки material-ui по коду
  ExpandMoreIcon - иконки
  MoreVertIcon - иконки MoreVert
  SaveIcon - иконка "СОХРАНИТЬ"
  DeleteIcon - иконка "УДАЛИТЬ"
  DropzoneArea -  компонент, элемент формы, для загрузки файла
  Button - Элемент формы "Кнопка"
  React - Основной компонент React
  Component - Базовый компонент  React, наследуясь от которого, класс получает все возможности компонента React
*/
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SaveIcon from '@material-ui/icons/Save';
import {DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button'
import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

import { Loader  } from '../main/loader.js';

var ReactDOM = require('react-dom');

/**
     * Модуль, который реализует форму для редактирования статей
     * @function EditPapers
     * @data {Object}  - данные по определенной статье в формате объекта.
     * @returns {Component.<RecipeReviewCard>} Составной компонент внутри модуля,
     который внутри себя, соделрит более маленькие компоненты(части) 
     блока для редактирования статьи
*/
export function ItemPaperTemplate(props){ 

const ClassStore = props.store;
const classData = {}

/**
     * Обертка компонента DropzoneArea(material-ui) для работы с файлами
     * @function handleChange - функция для добавления элементов формы типа "Файл",
     в общий объект, который отправляется на сервер
*/
class DropzoneAreaExample extends Component{
  //const change = this.props.change;
  constructor(props){
    super(props);
    
    const valFile = [
        props.data
    ]


    this.state = {
      files: [],
      bs64:''
    };
  }
  handleChange(files){

    /* Конвертирую объект файла в base64 строку 
    и передаю в глобальный объект */
    const reader = new FileReader();
    reader.onload = function(event) {
      classData.fileBs64 = event.target.result;
    };
    
    // Convert data to base64 
    if(files[0] != undefined)
      reader.readAsDataURL(files[0]);
  
    console.log(classData);
    this.props.change(files);
    this.setState({
      files: files
    });
  }
  render(){
    const valFile = [
        this.props.data
    ] 
    console.log(this.props);
    return (
      <DropzoneArea
        disabled
        filesLimit={1}
        initialFiles={
          valFile
        }
        onChange={this.handleChange.bind(this)}
        useChipsForPreview={true}
        />
    )
  }
}

/**
     * Объект стилей из библиотеки material-ui, для
     добавление стилей, напрямую внутрь компонента, 
     который получен из данной библиотеки
*/
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
 

}));

/**
     * RecipeReviewCard - Модуль, который реализует плашку с информацией о проекте
     * @function handleExpandClick - обработчик клика по элементу
*/
function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const [title, setTitle] = React.useState(props.data.title);
   
  return (
    <Card className={classes.root}>
    
      <CardActions className='box-open' disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <div id='title-paper'>{title}</div>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>

          </Avatar>
        }
        
        title={classData.title}
        subheader=""
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.discription}
        </Typography>
      </CardContent>
     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
         
             <BasicTextFields title={title} setTitle={setTitle} data={props.data}/>
          
         
        </CardContent>
      </Collapse>
    </Card>
  );
}


/**
     * BasicTextFields - Модуль, который реализует плашку с информацией о проекте
     * @function _handleTitleFieldChange , 
                 _handleLinkFieldChange, 
                 _handleDiscriptionFieldChange, 
                 _handleDropzoneAreaExampleChange
      - Обработчики, реагирующий на изменение своего поля и 
      записывающие актуальные данные в общий объект
     * @function saveButtom - Обработчик клика, по кнопке "Сохранить",
     получает все текущие данные с формы.
     * @function delButtom - Обработчик клика, по кнопке "Удалить".  
*/
function BasicTextFields(props) {

  const setTitle = props.setTitle;
   classData.setTitle = props.setTitle;


  const classes = useStyles();
  const _data = {
    '_id': props.data._id , 
    'title': props.data.title ,
    'link': props.data.link ,
    'discription': props.data.discription ,
    'file':props.data.img
  }
  const _handleTitleFieldChange = function(e){
    _data.title = e.target.value;
  }
  const _handleLinkFieldChange = function(e){
     _data.link = e.target.value;
  }
  const _handleDiscriptionFieldChange = function(e){
    _data.discription = e.target.value;
  }
  
  
  const _handleDropzoneAreaExampleChange = function(files){
    _data.file = files;
  }
  const saveButtom = function(){
    console.log('§§saveButtom§§');
     
    _data.fileBs64 = classData.fileBs64;

    async function fn() {
      ReactDOM.render(<Loader dop="true"/>, document.body);
      ClassStore.dispatch(
                    { type: 'uppPaper',val : {
                      data: _data,
                      store: ClassStore,
                      callback: (data) => {
                      }
                    }
                  }
                )
    }
    fn().then(
      setTimeout(function(){ 
         window.location.href=window.location.href
      }, 1000)
    )

  }
  const delButtom = function(id){
  
    let result = confirm('Удалить статью '+props.data.title);
    if(result){
      let elem = document.getElementById(id);
      elem.parentNode.removeChild(elem);
      ClassStore.dispatch(
          {type: 'delPaper',val : {
            id: id
          }
        }
      )
    }
    
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
   
    
      <TextField id="standard-basic"
              disabled 
              defaultValue={props.data._id} 
              label="ID" 
      />
      <TextField id="standard-basic" 
        defaultValue={props.data.title} 
        label="Заголовок" 
        onChange={_handleTitleFieldChange}
      />
      <TextField id="filled-basic" 
        defaultValue={props.data.link}
        onChange={_handleLinkFieldChange} 
        label="Ссылка"
      />
      <TextField 
        id="outlined-multiline-static"
        label="Описание"
        onChange={_handleDiscriptionFieldChange}
        multiline
        rows={4}
        defaultValue={props.data.discription} 
        variant="outlined"
      />
      <DropzoneAreaExample change={_handleDropzoneAreaExampleChange} data={props.data.link}/>
       <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={ () => { 
            delButtom(props.data._id);
        }}
      >
      Удалить
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={ () => {saveButtom()} }
      >
        Сохранить
      </Button>
    </form>
  );
}

return <RecipeReviewCard data={props.papers}/>
}
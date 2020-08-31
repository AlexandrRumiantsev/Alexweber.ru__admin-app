import { URL , API } from '../constants/Api'

export function setYear(year) {
   
      
    var request = new XMLHttpRequest();
    request.open('GET', API , true);
    request.setRequestHeader('accept', 'application/json');
    
    request.onreadystatechange = function () {
      // <4 =  ожидаем ответ от сервера
      if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300){
          console.log(request);
        }
      }
    }
    
    request.send()

    return {
      type: SET_YEAR,
      payload: year
    }
  
  }
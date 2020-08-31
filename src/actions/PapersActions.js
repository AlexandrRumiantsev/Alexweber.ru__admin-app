import { SAVE_PAPER , GET_PAPERS , ERROR_TEXT , UPP_PAPER , DEL_PAPER } from '../constants/Papers'
import axios from 'axios';

export function getPapers(components , store) {
   axios.get(GET_PAPERS)
        .then(res => {
            components.setState({papers: res.data , status: true})
            store.dispatch(
                    {
                      type: 'setPapers', 
                      val: res.data
                    }
                )
        })
        .catch(()=>{}); 
}

export function updatePaper(store , data , callback) {
  callback(data)
   axios.post(UPP_PAPER, {
      data: data
    })
    .then(function (response) {
      console.log(response);
      //location.href=location.href;
      

    })
    .catch(function (error) {
      console.log(error);
    });
    

    
}

export function  delPaper(id) {

   axios.post(DEL_PAPER, {
      id: id
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function  savePaper(datas){
 
  const dataFile = {};

  let formData = new FormData();   

  formData.append('file',  datas.val.fileObj[0]);
  formData.append('discription',  datas.val.discr_form);
  formData.append('title',  datas.val.title_form);

  const config = {     
        headers: { 'content-type': 'multipart/form-data' }
  }
        
  axios.post(SAVE_PAPER , formData)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}
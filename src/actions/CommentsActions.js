import { GET_COMMENTS , ERROR_TEXT , DEL_COMMENTS , DEL_COMMENTS_DEV } from '../constants/Comments'
import axios from 'axios';


export function getComments(components , store) {
   axios.get(GET_COMMENTS)
        .then(res => {
        	store.dispatch(
                {
                  type: 'setComment', 
                  val: res.data
                }
            )
            components.setState({comments: res.data , status: true})
        })
        .catch(()=>{}); 
}

export function delComment(id , component , store ) {
    store.dispatch(
                {
                  type: 'refrashComment',
                  data: {
                    'component':component,
                    'id':id
                  }
                }
            )
             
   	axios.post(DEL_COMMENTS, {
	    id: id
	  })
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
}
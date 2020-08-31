import { GET_PROJECTS , ERROR_TEXT} from '../constants/Projects'
import axios from 'axios';

export function getProjects(state , action ) {
    return getData(GET_PROJECTS , action);
}

const getData = (GET , action ) => {
        
        new Promise( ()=>
        axios.get(GET)
            .then(res => {
                console.log(action);
                //state.data = res.data;
                  action.data.projectComponent.setState({
                    render: true,
                    data: res.data
                  });
                action.data.store.dispatch(
                    {
                      type: 'setProjects', 
                      val: res.data
                    }
                )
            }) 
         ).then(() => {
            throw new Error(ERROR_TEXT);
        });   
}
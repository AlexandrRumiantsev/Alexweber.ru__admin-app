import { paperAddPopupp } from  './paperAddPopupp.js';

export default class Material{
   constructor(type , store) {
     switch(type){
     	case 'paperAddPopap':
     	    new paperAddPopupp(store);
     		break;
     	default:
     		break
     }
  }
}
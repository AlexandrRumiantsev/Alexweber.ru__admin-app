import { SET_YEAR } from '../constants/Main'

const initialState = {
    year: 2016,
    photos: {
      '0': 'xxxx'
    }
  }
  
  export default function main(state = initialState, action) {
  
    switch (action.type) {
      case SET_YEAR:
        //return { ...state, year: action.payload }
        return {}, state, {year: action.payload}
      default:
        return state;
    }
  
  }
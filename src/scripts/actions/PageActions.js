// import {TODO} from "./../constants/Todo";

// export const addItem = (payload) => {
//      return {
//          type: TODO.ADD_ITEM,
//          payload
//      }
// }

//  export const removeItem = (payload) => {
//      return {
//          type: TODO.REMOVE_ITEM,
//          payload
//      }
//  }

export function setYear(year) {
    return {
        type: 'SET_YEAR',
        payload: year
    }
}
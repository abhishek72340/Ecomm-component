import { data } from '../Data'
export const initialState = {
    data,
    searchText: '',
    sortBy: '',
    checkFilters:[]
    


}
export const reducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return { ...state, searchText: action.payload };
        case 'SEARCH':
            return { ...state, data: action.payload };
        case 'HIGH_TO_LOW':
            return { ...state, sortBy: action.payload };
        case "LOW_TO_HIGH":
            return { ...state, sortBy: action.payload };
            case 'FILTER':
                return {...state,checkFilters:action.payload};
          
        default:
            throw new Error('There is no any data here');
 
    }

}
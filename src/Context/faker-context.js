import { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from '../reducers/fakerReducer';
const fakerContext = createContext();

const FakerContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, sortBy,checkFilters } = state;


    const searchHandler = () => {
        const filtredData = data.filter((item) => item.name.toLowerCase().includes(state.searchText.toLowerCase()));
        dispatch({ type: 'SEARCH', payload: filtredData })
    };

    const getSortedProducts = () => {
        if (sortBy === 'HIGH_TO_LOW') {
            data.sort((a, b) => b.price - a.price)
            
        };

        if (sortBy === 'LOW_TO_HIGH') {
            data.sort((a, b) => a.price - b.price)
        };
        return data

    };
    const sortedProducts=getSortedProducts();
   

    const checkBoxHandler=(e)=>{
const value=e.target.value;
const isChecked=e.target.checked;

if(isChecked){
dispatch({type:'FILTER',payload:[...checkFilters,value]})
}
else{
    const updatedFilter=checkFilters.filter(item=>item !==value)
    dispatch({type:'FILTER',payload:updatedFilter})

}
    };
    const getFiltersProducts=()=>{
       return checkFilters.length>0?sortedProducts.filter(item=>checkFilters.some(ele=>ele==='inStock'?!item[ele]:item[ele])):sortedProducts;
    };
    const filterdProducts=getFiltersProducts();

    return (

        <fakerContext.Provider value={{ state, dispatch, searchHandler, sortedProducts,checkBoxHandler,filterdProducts }}>
            {children}
        </fakerContext.Provider>
    )
};

const useFaker = () => useContext(fakerContext);
export { useFaker, FakerContextProvider }
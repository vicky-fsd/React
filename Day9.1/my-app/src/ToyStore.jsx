import React,{useReducer} from 'react'

 const initialState= { totalToys: 0, toysSold:0};

    function toyStoreReducer(state,action){
        
        switch (action.type) {
            case 'BUY_NOW':
                return {...state, totalToys: state.totalToys +1 }
            case 'RETURN_TOY':
                return {...state, totalToys: state.totalToys-1, toysSold: state.toysSold +1 }
            default:
                return state;
        }
    }

function ToyStore() {

        const [storeState,dispatch] =useReducer(toyStoreReducer,initialState);

        const handleBuyToy = () => {
            dispatch({type: 'BUY_NOW'});
        }
        const handleReturnToy = () =>{
            dispatch({type: 'RETURN_TOY'});
        }
    
  return (
    <div>
        <h1>Toy Store</h1>
        <p>Total toys in store : {storeState.totalToys}</p>
        <p>Toys Sold : {storeState.toysSold}</p>
        <button onClick={handleBuyToy}> Buy Now </button>
        <button onClick={handleReturnToy}> Return a Toy </button>
    </div>
  )
}

export default ToyStore
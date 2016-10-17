export const ALL_CAKES = 'ALL_CAKES'
export const ERROR_LOADING_CAKES = 'ERROR_LOADING_CAKES'
export const SEARCH_CAKES = 'SEARCH_CAKES'
export const ADD_CAKE = 'ADD_CAKE'
export const EDIT_CAKE = 'EDIT_CAKE'
export const IS_LOADING_CAKES = 'IS_LOADING_CAKES'
export const NEW_CAKE = 'NEW_CAKE'
export const EDITING_CAKE = 'EDITING_CAKE'

export function allCakes(cakes){
    return {
        type: ALL_CAKES,
        cakes
    }
}

export function errorLoadingCakes(message){
    return {
        type: ERROR_LOADING_CAKES,
        message
    }
}

export function getCakes(){
    return function(dispatch, getState){
        dispatch(isLoadingCakes(true))
        fetch('https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json')
            .then(response => {
                console.log(response.json())
                if(response.ok){
                    response.json().then((json)=> 
                        dispatch(allCakes(json))
                    )
                }else{
                    dispatch(errorLoadingCakes('Problem fetching cakes!'))
                }
            })
            .catch((error) => { 
                dispatch(errorLoadingCakes(error.message))
            })
    }
}

export function searchCakes(search){
    return {
        type: SEARCH_CAKES,
        search
    }
}

export function newCake(){
    return {
        type: NEW_CAKE,
        cake: {}
    }
}

export function addCake(cake){
    return {
        type: ADD_CAKE,
        cake
    }
}

export function editingCake(cake){
    return {
        type:EDITING_CAKE,
        cake
    }
}

export function editCake(cake, oldCake){
    return {
        type: EDIT_CAKE,
        cake,
        oldCake
    }
}

export function isLoadingCakes(isLoading){
    return {
        type: IS_LOADING_CAKES,
        isLoading
    }
}
import { connect } from 'react-redux'
import CakeList from '../components/cake-list'
import { browserHistory } from 'react-router'
import {newCake} from '../actions'

const searchCakes = (cakes, search)=>{
     if(!search){
         return cakes
     }
     return cakes.filter(cake=> {
        return cake.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
}

const mapStateToProps = (state) => {
  return {
    cakes: searchCakes(state.cakesList.cakes, state.search),
    loading: state.cakesList.loading,
    error: state.cakesList.error
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    newCake: ()=>{
      dispatch(newCake())
      browserHistory.push('/cakes/add')
    }
  }
}


const CakeListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeList)

export default CakeListPage
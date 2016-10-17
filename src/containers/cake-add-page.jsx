import { connect } from 'react-redux'
import CakeAdd from '../components/cake-add'
import {addCake,editCake} from '../actions'
import { browserHistory } from 'react-router'

const mapStateToProps = (state) => {
  return {
    cakes: state.cakesList.cakes,
    currentCake: state.currentCake
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    editCake: (cake, oldCake) => {
      if(oldCake){
        dispatch(editCake(cake, oldCake))
      }else{
        dispatch(addCake(cake))
      }
      browserHistory.push('/cakes')
    }
  }
}

const CakeAddPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeAdd)

export default CakeAddPage
import { connect } from 'react-redux'
import CakeItem from '../components/cake-item'
import {editingCake} from '../actions'
import { browserHistory } from 'react-router'

const mapStateToProps = (state) => {return{}}

const mapDispatchToProps = (dispatch)=>{
  return {
    editCake: (cake) => {
      dispatch(editingCake(cake))
      browserHistory.push(`/cakes/add/${cake.id}`)
    }
  }
}

const CakeItemPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeItem)

export default CakeItemPage
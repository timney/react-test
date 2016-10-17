import { connect } from 'react-redux'
import Search from '../components/search'
import {searchCakes} from '../actions'

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    searchCakes: (criteria)=>{
      dispatch(searchCakes(criteria))
    }
  }
}

const SearchPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchPage
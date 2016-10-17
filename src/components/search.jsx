import React from 'react'

class Search extends React.Component {
    constructor(props){
        super(props);
        this.searchCriteria = this.searchCriteria.bind(this)
    }
    static propTypes = {
        search:  React.PropTypes.string,
        searchCakes: React.PropTypes.func.isRequired
    }
    searchCriteria(e){
        this.props.searchCakes(e.target.value)
    }
    render(){
        return <span className="cake-search">
                <label htmlFor="cakeSearch">Search:</label>
                <input type="text" name="cakeSearch"  
                    className="cakeSearch"
                    value={this.props.search}
                    onChange={this.searchCriteria} />
               </span>
    }
}

export default Search
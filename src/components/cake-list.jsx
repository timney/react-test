import React from 'react'
import CakeItemPage from '../containers/cake-item-page'
import SearchPage from '../containers/search-page'

class CakeList extends React.Component {
    static propTypes = {
        loading: React.PropTypes.bool.isRequired,
        error: React.PropTypes.string,
        cakes: React.PropTypes.arrayOf(
            React.PropTypes.shape({  
                id: React.PropTypes.number,
                title: React.PropTypes.string,
                desc: React.PropTypes.string,
                image: React.PropTypes.string
            })
        ).isRequired,
        newCake: React.PropTypes.func.isRequired
    }
    render(){
        if(this.props.loading){
            return <div>Loading...</div>
        }
        if(this.props.error){
            return <div>Could not load Cakes: {this.props.error}</div>
        }
        return <div>
            <SearchPage />
            <a href="#"
             className="button"
             onClick={(e)=>{
                e.preventDefault()
                this.props.newCake()
            }}>New Cake</a>
            <div className="cake-list">
            {this.props.cakes.map(cake => 
                 <CakeItemPage cake={cake} 
                  key={this.props.cakes.indexOf(cake)} />
            )}
            </div>
        </div>
    }
}

export default CakeList
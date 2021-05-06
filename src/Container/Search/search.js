import React, { Component } from 'react'
import './search.scss';
// import SearchIcon from '../../Assets/search1.png';

class Search extends Component {
    
    render() {
        return (
            <div className='search'>
                <input
                type="text"
                name=""
                placeholder="Type your illness here..."
                onChange={(event) => this.props.setInput(event)}
                />
                {/* <img src={SearchIcon} /> */}
            </div>
        )
    }
}



export default Search;
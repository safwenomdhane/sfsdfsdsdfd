import React , {Component} from 'react'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
          }
    }
    handelchange = (event) => {
        this.setState({keyword:event.target.value} )       
    }
    searchmovie = () => {
        this.props.findname(this.state.keyword)         
    }
    render() { 
        return (
            <div className='search-Bar'>
            <input className='search' type='text' placeholder='search for a movie' onChange={this.handelchange}></input>
            <button className='searchbutton' onClick={this.searchmovie}>Search</button>
            </div>
          );
    }
}
 
export default Header ;

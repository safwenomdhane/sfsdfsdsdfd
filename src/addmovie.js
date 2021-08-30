import React , {Component} from 'react'

class MovieAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {       
            newid:'',
            newname:'', 
            newyear:'', 
            newrating:'', 
            newimgsrc:''
            
          }
          
    }
    hearname=(e)=>{
         this.setState({newname: e.target.value});
    }
    hearyear=(e)=>{
        this.setState({newyear: e.target.value});
        
    }
    hearimg=(e)=>{
        this.setState({newimgsrc: e.target.value});
        
    }
    hearID=(e)=>{
        this.setState({newid: e.target.value});
        
    }
    hearrating=(e)=>{
        this.setState({newrating: e.target.value});
        
    }
    addmovie=()=>{
        let thenewmovie = {
            id:this.state.newid,
            name:this.state.newname,
            year: this.state.newyear, 
            rating:parseInt(this.state.newrating,10),
            imgsrc:this.state.newimgsrc 
        }
        this.props.newmovie(thenewmovie);
    }        
    render() { 
        return (
            <div  id='movieAdder'>
                <i className="fa fa-window-close closeBTN" onClick={this.props.exit}></i>
                <p className='firstparag'>Movie Name:</p>
                <input className='search1' type='text' name='name' placeholder='search for a movie' onChange={this.hearname}></input>
                <p>Movie Year:</p>
                <input className='search1' type='text' name='year'placeholder='Movie Year' onChange={this.hearyear}></input>
                <p>Movie Immage:</p>
                <input className='search1' type='text'name='img' placeholder='Movie Image' onChange={this.hearimg}></input>
                <p>Movie ID:</p>
                <input className='search1' type='text'name='id' placeholder='Movie ID' onChange={this.hearID}></input>
                <p>Rating:</p>
                <input className='search1' type='number' name='rating' placeholder='rating from 0 to 5' onChange={this.hearrating}></input>
                <br/>
                <button className='addbutton' onClick={this.addmovie}>Add movie</button>
            </div>
          );
    }
}
 
export default MovieAdder;

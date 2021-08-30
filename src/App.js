import React, {Component} from 'react';
import './App.css';
import Header from './header'
import Rating from './headerrating'
import MovieList from './list.js'
import Addmovie from './adder'
import MovieAdder from './addmovie'
const movies=[
  {
    id:'x',
    name:'inception', 
    year:'2010', 
    rating:2, 
    imgsrc:'https://images-na.ssl-images-amazon.com/images/I/51TfUWh5N9L._SY445_.jpg'
  },
  { 
    id:'y',
    name:'troy', 
    year:'2006', 
    rating:5, 
    imgsrc:'https://assets.www.warnerbros.com/sites/default/files/troy_posterlarge_0-52126870.jpg'
  },
  {
    id:'z',
    name:'lord of the rings', 
    year:'2000', 
    rating:4, 
    imgsrc:'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'
  }, 
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      moviess : movies,
      movies1: movies,
      minrate:1, 
      key:'' 
    }
  }
  filtername=(keyword)=>{
    let filter=this.state.moviess.filter((el)=>el.name.toLowerCase().indexOf(keyword)!==-1 ||el.year.toLowerCase().indexOf(keyword)!==-1)
    this.setState({movies1:filter, key: keyword})
    console.log('tab',filter)
  }
  showmovieadd=()=>{
    console.log('clicked')
    document.getElementById('movieAdder').style.height='439px'
  }
  hidemovieadd=()=>{
    console.log('clicked')
    document.getElementById('movieAdder').style.height='0px'
  }
  addnewMovie=(x)=>{
    let newone=this.state.movies1.concat(x)
    this.setState({movies1:newone,
                    moviess:newone})
    console.log(newone)
  }

  render() { 
    return ( 
      <div className="app">
        <Header findname={(x)=>this.filtername(x)}/>
        <Rating onchange={(newRating) => {this.setState({minrate:newRating})}} count={this.state.minrate}/>
        <div className='movie-list'>
          <MovieList movielist={this.state.movies1.filter(el=>el.rating>=this.state.minrate)} />
          <Addmovie addmovie={()=>this.showmovieadd()}/>
        </div>
        <MovieAdder exit={()=>this.hidemovieadd()} newmovie={(x)=>this.addnewMovie(x)}/>
    </div>
     );
  }
}
 
export default App;


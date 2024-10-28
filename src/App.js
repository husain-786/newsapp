// import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  // name="Husain"
  constructor(){
    super()
    this.state = {
      country:"in",
      mode:"dark",
      style:{
        color: "white",
        background: "black",
      },
      navStyle:{
        color: "white",
        background: "red",
        padding: 0,
        borderBottom: "1px solid white"
      },
      progressBar:10
    }
    document.getElementsByTagName("html")[0].style.backgroundColor = "black"
    // document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  } 

  // for primary color mode....
  changeModesPrimary = ()=>{
    this.setState({
      country:"in",
      mode:"primary",
      style:{
        color: "white",
        background: "#0D6EFD",
      },
      navStyle:{
        color: "white",
        background: "#0D6EFD",
        padding: 0,
        borderBottom: "1px solid white"
      },    
    })
    document.getElementsByTagName("html")[0].style.backgroundColor = "#0D6EFD"  
  }
  // for secondary color mode....
  changeModesSecondary = ()=>{
    this.setState({
      country:"in",
      mode:"secondary",
      style:{
        color: "white",
        background: "#6C757D",
      },
      navStyle:{
        color: "white",
        background: "#6C757D",
        padding: 0,
        borderBottom: "1px solid white"
      },    
    })
    document.getElementsByTagName("html")[0].style.backgroundColor = "#6C757D"  
  }
  // for success color mode....
  changeModesSuccess = ()=>{
    this.setState({
      country:"in",
      mode:"success",
      style:{
        color: "white",
        background: "#198754",
      },
      navStyle:{
        color: "white",
        background: "#198754",
        padding: 0,
        borderBottom: "1px solid white"
      },    
    })
    document.getElementsByTagName("html")[0].style.backgroundColor = "#198754"  
  }
  // for danger color mode....
  changeModesDanger = ()=>{
    this.setState({
      country:"in",
      mode:"danger",
      style:{
        color: "white",
        background: "#DC3545",
      },
      navStyle:{
        color: "white",
        background: "#DC3545",
        padding: 0,
        borderBottom: "1px solid white"
      },    
    })
    document.getElementsByTagName("html")[0].style.backgroundColor = "#DC3545"  
  }
  // for warning color mode....
  changeModesWarning = ()=>{
    this.setState({
      country:"in",
      mode:"warning",
      style:{
        color: "white",
        background: "#FFC107",
      },
      navStyle:{
        color: "white",
        background: "#FFC107",
        padding: 0,
        borderBottom: "1px solid white"
      },    
    })
    document.getElementsByTagName("html")[0].style.backgroundColor = "#FFC107"  
  }
  // for info color mode....
  changeModesInfo = ()=>{
    this.setState({
      country:"in",
      mode:"info",
      style:{
        color: "white",
        background: "#0DCAF0",
      },
      navStyle:{
        color: "white",
        background: "#0DCAF0",
        padding: 0,
        borderBottom: "1px solid white"
      },    
    })
    document.getElementsByTagName("html")[0].style.backgroundColor = "#0DCAF0"  
  }
  // for dark color mode....
  changeModesDark = ()=>{
    this.setState({
      country:"in",
      mode:"primary",
      style:{
        color: "white",
        background: "black",
      },
      navStyle:{
        color: "white",
        background: "black",
        padding: 0,
        borderBottom: "1px solid white"
      },    
    })
    document.getElementsByTagName("html")[0].style.backgroundColor = "black"  
  }
  // for light color mode....
  changeModesLight = ()=>{
    this.setState({
      country:"in",
      mode:"primary",
      style:{
        color: "black",
        background: "white",
      },
      navStyle:{
        color: "black",
        background: "white",
        padding: 0,
        borderBottom: "1px solid grey"
      },    
      searchCategory: "general"
    })
    document.getElementsByTagName("html")[0].style.backgroundColor = "white"  
  }

  // callback function defined to get value from child component......
  parentFilterSearch = (searchCategory)=>{
    alert(searchCategory)
  }

  setProgressBar = (progressValueFromChildComponent)=>{
    this.setState({
      progressBar:progressValueFromChildComponent
    })
  }

  render() {
    return (
        <Router>
        {/* This is First Class Based Component {this.name}. */}
          <LoadingBar
            color='#f11946'
            progress={this.state.progressBar}
            onLoaderFinished={this.setProgressBar}
          />
          <NavBar mode={this.state.mode} style={this.state.style} navStyle={this.state.navStyle} changeModesPrimary={this.changeModesPrimary} changeModesSecondary={this.changeModesSecondary} changeModesSuccess={this.changeModesSuccess} changeModesDanger={this.changeModesDanger} changeModesWarning={this.changeModesWarning} changeModesInfo={this.changeModesInfo} changeModesLight={this.changeModesLight} changeModesDark={this.changeModesDark} parentFilterSearch={this.parentFilterSearch}/>
          <Routes>
            {/* In class based components key must be used and must be unique to render data according to selection.... */}
            <Route path="/" element={<News key="/" setProgressBar={this.setProgressBar} searchCategory={this.state.searchCategory} country={this.state.country} category="general" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/buiseness" element={<News key="buiseness" setProgressBar={this.setProgressBar} searchCategory={this.state.searchCategory} country={this.state.country} category="buiseness" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/health" element={<News key="health" setProgressBar={this.setProgressBar} searchCategory={this.state.searchCategory} country={this.state.country} category="health" mode={this.state.mode} style={this.state.style}/>} ></Route>
            <Route path="/science" element={<News key="science" setProgressBar={this.setProgressBar} searchCategory={this.state.searchCategory} country={this.state.country} category="science" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/sports" element={<News key="sports" setProgressBar={this.setProgressBar} searchCategory={this.state.searchCategory} country={this.state.country} category="sports" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/technology" element={<News key="technology" setProgressBar={this.setProgressBar} searchCategory={this.state.searchCategory} country={this.state.country} category="technology" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/general" element={<News key="general" setProgressBar={this.setProgressBar} searchCategory={this.state.searchCategory} country={this.state.country} category="general" mode={this.state.mode} style={this.state.style}/>}></Route>
            <Route path="/entertainment" element={<News key="entertainment" setProgressBar={this.setProgressBar} searchCategory={this.state.searchCategory} country={this.state.country} category="entertainment" mode={this.state.mode} style={this.state.style}/>}></Route>
          </Routes>
        </Router>
    )
  }
}

// Sending props to another component in class based component is same but to use that props in that component is 
// disserent, e.g:- let {title, description} = this.props

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

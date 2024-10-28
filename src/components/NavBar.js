import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
  // function to search when clicked on search.....
  filterSearch = ()=>{
    let searchCategory = document.getElementById("search").value
    // calling callback function with the value to the parent component defined in the parent component......
    this.props.parentFilterSearch(searchCategory)
  }
  render() {
    return (
      <div className={`mode-${this.props.mode}`} style={this.props.style} >
        <nav className={`position-fixed w-100 navbar navbar-expand-lg bg-body-tertiary mode-${this.props.mode}`} style={this.props.navStyle}> 
          <div className={`container-fluid mode-${this.props.mode}`} style={this.props.style}>
            <Link to="/" className={`navbar-brand mode-${this.props.mode}`} style={this.props.style}>NewsFlash</Link>
            <button className={`navbar-toggler mode-${this.props.mode}`} style={this.props.style} type="button" data-bs-toggle="collapse"     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse mode-${this.props.mode}`} style={this.props.style} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Home */}
                <li className="nav-item">
                  <Link className={`nav-link active mode-${this.props.mode}`} style={this.props.style} aria-current="page" to="/">Home</Link>
                </li>
                {/* Category */}
                <li className={`nav-item dropdown mode-${this.props.mode}`} style={this.props.style}>
                  <Link className={`nav-link dropdown-toggle mode-${this.props.mode}`} style={this.props.style} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Category
                  </Link>
                  <ul className={`dropdown-menu mode-${this.props.mode}`} style={this.props.style}>
                      <li><Link className={`dropdown-item mode-${this.props.mode}`} style={this.props.style} to="/buiseness">Business</Link></li>
                      <li><Link className={`dropdown-item mode-${this.props.mode}`} style={this.props.style} to="/entertainment">Entertainment</Link></li>
                      <li><Link className={`dropdown-item mode-${this.props.mode}`} style={this.props.style} to="/general">General</Link></li>
                      <li><Link className={`dropdown-item mode-${this.props.mode}`} style={this.props.style} to="/health"> Health</Link></li>
                      <li><Link className={`dropdown-item mode-${this.props.mode}`} style={this.props.style} to="/science">Science</Link></li>
                      <li><Link className={`dropdown-item mode-${this.props.mode}`} style={this.props.style} to="/sports">Sports</Link></li>
                      <li><Link className={`dropdown-item mode-${this.props.mode}`} style={this.props.style} to="/technology">Technology</Link></li>              
                  </ul>
                </li>
              </ul>
              {/* Search Area */}
              {/* <form className={`d-flex mode-${this.props.mode}`} style={this.props.style}>
                  <input id="search" className={`form-control me-2 mode-${this.props.mode}`} style={this.props.style} type="search" placeholder="Search By Category" aria-label="Search"/>
                  <button className={`btn btn-outline-success mode-${this.props.mode}`} style={this.props.style} onClick={this.filterSearch}>Search</button>
              </form> */}
              {/* Color Modes */}
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex justify-content-between">
                  <li className={`nav-item dropdown mode-${this.props.mode}`} style={this.props.style}>
                    <Link className={`nav-link dropdown-toggle mode-${this.props.mode}`} style={this.props.style} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Color Modes
                    </Link>
                    <ul className={`dropdown-menu mode-${this.props.mode}`} style={this.props.style}>
                        <li><div className="btn btn-outline-danger bg-primary text-white mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesPrimary}></div></li>
                        <li><div className="btn btn-outline-danger bg-secondary text-white mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesSecondary}></div></li>
                        <li><div className="btn btn-outline-danger bg-success text-white mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesSuccess}></div></li>
                        <li><div className="btn btn-outline-success bg-danger text-white mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesDanger}></div></li>
                        <li><div className="btn btn-outline-danger bg-info text-black mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesInfo}></div></li>
                        <li><div className="btn btn-outline-success bg-light text-dark mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesLight}></div></li>
                        <li><div className="btn btn-outline-light bg-dark text-white mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesDark}></div></li>              
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <div className={`mode-${this.props.mode}`} style={this.props.style}>
                <div className="btn btn-outline-success bg-primary text-white mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesPrimary}></div>
                <div className="btn btn-outline-success bg-secondary text-white mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesSecondary}></div>
                <div className="btn btn-outline-danger bg-success text-white mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesSuccess}></div>
                <div className="btn btn-outline-success bg-danger text-white mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesDanger}></div>
                <div className="btn btn-outline-success bg-warning text-black mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesWarning}></div>
                <div className="btn btn-outline-success bg-info text-black mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesInfo}></div>
                <div className="btn btn-outline-success bg-light text-dark mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesLight}></div>
                <div className="btn btn-outline-light bg-dark text-white mx-1 my-1" style={{height:"30px", width:"40px", borderRadius:"20px"}} onClick={this.props.changeModesDark}></div>            
              </div> */}
            </div>
          </div>
        </nav>        
      </div>
    )
  }
}

export default NavBar

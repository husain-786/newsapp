import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // this is the way to store all the props coming to its components....
    // Its called destructuring, and we can put out out from props whatever we want....
    let { title, description, imageUrl, author, date} = this.props;
    return (
      <div className={`overflow-auto mode-${this.props.mode}`} style={{border:`1px solid ${this.props.cardBorderColor}`, borderRadius:"5px", height:"450px"}}>
        {/* <a href={newsUrl} target="_blank" rel="noreferrer" > */}
          <div className={`card mode-${this.props.mode}`} style={this.props.style}>
          <span className="badge bg-danger" style={{left:"70%", zIndex:1, borderRadius:"5px"}}> {this.props.source} </span>

            <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..." />
            <div className={`card-body mode-${this.props.mode}`} style={this.props.style}>
              <h5 className={`card-title mode-${this.props.mode}`} style={this.props.style}>{title}</h5>
              <p className={`card-text mode-${this.props.mode}`} style={this.props.style}>{description}</p>
              <p className="card-text"><small style={this.props.style}>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              {/* <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm" > Read Full Article </a> */}
            </div>      
          </div>
        {/* </a> */}
      </div>
    );
  }
}

// export class NewsItem extends Component {
//   // constructor(){
//   //   super()
//   //   console.log("This is a NewsItem Constructor.")
//   // }
//   render() {
//     // this is the way to store all the props coming to its components....
//     // Its called destructuring, and we can put out out from props whatever we want....
//     let { title, description, imageUrl, newsUrl, author, date} = this.props;
//     return (
//       <div className="ds-card   ds-card-title-lines-3 ds-card-desc-lines-3" style={{border:`1px solid ${this.props.cardBorderColor}`, borderRadius:"5px"}}>
//         <a className="ds-card-link" href={newsUrl}>
//           <div className="image-wrapper">
//             <picture className="ds-image img loaded">
//               <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..." />
//             </picture>
//           </div>
//           <div className={`meta card mode-${this.props.mode}`} style={this.props.style}>
//             <div className="info-wrap">
//               <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:1}}> {this.props.source} </span>             
//               <header className={`title clamp px-2 pt-4 card-title mode-${this.props.mode}`} style={this.props.style} ><h5>{title}</h5></header>
//               <p className={`card-text px-3 pt-3 pb-1 mode-${this.props.mode}`} style={this.props.style}>{description}</p>
//               <p className="card-text px-3 pb-3"><small style={this.props.style}>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
//             </div>
//           </div>
//         </a>
//       </div>
//     );
//   }
// }

export default NewsItem;

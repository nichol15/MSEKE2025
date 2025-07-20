import React from "react";

import { Outlet, Link } from "react-router-dom";

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

class DefinitionBox extends React.Component {
  constructor(props) {
    super(props);
  }

  parser(content) {                   
    let content_list = content.split("$")
    if (content_list.length > 0) {
      return content_list.map( (elem, i) => {
        if (elem[0] == "*") {
          return <InlineMath key={i} math={elem.slice(1)}/>
        } if (elem[0] == "#") {
          return <BlockMath key={i} math={elem.slice(1)}/>
        } else {
          return <p  key={i}>{elem}</p>
        }
      })
    } else {
      return []
    }
  }

  render() {
    const laTex = this.props.laTex;
    const content = this.props.content;
    console.log("here: ", laTex)

    if (laTex == true) {
      return (
        <div className="line-height">
          <div className="no-break">{this.parser(content)}</div>
        </div>
      );
    } else {
      return (
        <div className="">
          <p>{this.props.content}</p>
        </div>
      );
    }
  }
}

class RelatedConceptsTextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap-small-text-box" style={{backgroundColor: this.props.colour}} onClick={this.props.onClick}>
        <p>{this.props.content}</p>  
        <p className="small-course-font">{this.props.course}</p>    
      </div>
    );
  }
}

class WrapSmallTextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap-small-text-box" style={{backgroundColor: this.props.colour}} onClick={this.props.onClick}>
        <p>{this.props.content}</p>  
      </div>
    );
  }
}

class OverlapConceptBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let uniqueID = this.props.uniqueID;
    let link = "/index/" + String(uniqueID)
    //console.log(s)
    return (
      <div className="wrap-small-text-box" style={{backgroundColor: this.props.colour}}>
      <Link to={link} className="unset"><p>{this.props.name}</p></Link> 
      </div>
    );
  }
}

class SearchResultDescriptionConceptBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let uniqueID = this.props.uniqueID;
    let link = "/index/" + String(uniqueID)
    //console.log(s)
    if (uniqueID) {
      return (
      <Link to={link} className="unset">
      <div className="wrap-small-text-box">
        <p>{this.props.content}</p>  
        <p className="small-course-font">{this.props.course}</p>    
      </div></Link>
    );
    }
  }
}



class CourseSmallTextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="course-small-text-box" style={{backgroundColor: this.props.colour}} onClick={this.props.onClick}>
        <p>{this.props.content}</p>      
      </div>
    );
  }
}

export {DefinitionBox, CourseSmallTextBox, WrapSmallTextBox, RelatedConceptsTextBox, OverlapConceptBox, SearchResultDescriptionConceptBox};

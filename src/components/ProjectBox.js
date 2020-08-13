import React, { Component } from "react";
import pin from "../img/pin.svg";
import "../App.css";
import "../stylesheets/ProjectBox.css";

export default class ProjectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">
            <img id="project-photo" src={this.props.projectImg} alt=""></img>
            <div id="heading-text" className="vertical-center">
              <h3 id="project-title">{this.props.title}</h3>
              <i>
                <img src={pin} height="25px" width="25px"></img>
                {this.props.location}
              </i>
            </div>
          </div>

          <div
            className={
              this.state.open ? "panel-collapse" : "panel-collapse panel-close"
            }
          >
            <div className="project-bullets">
              <ul>
                {this.props.bullets.map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </div>
            <h4 className="box-label">Verifications</h4>
            <div className="project-images">
              {this.props.verifications.map((value, index) => {
                return (
                  <img className="verification-image" src={value} alt=""></img>
                );
              })}
            </div>
            <h4 className="box-label">Sustainable Devlopment</h4>
            <div className="project-images">
              {this.props.developments.map((value, index) => {
                return <img className="sd-image" src={value} alt=""></img>;
              })}
            </div>
          </div>
          <div className="center">
            <a
              className="toggle-expand"
              onClick={function () {
                this.setState({ open: !this.state.open });
              }.bind(this)}
            >
              {this.state.open ? "Hide " : "Learn more "}
              <span style={{fontSize: "0.9em"}}>
                {this.state.open ? <>&and;</> : <>&or;</>}
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

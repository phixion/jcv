import React, { Component } from "react";

import Typing from "react-typing-animation";
import EducationItem from "./EducationItem";

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.props = {
      schoolSkills: "",
      technicalSkills: "",
    };
  }

  render() {
    return (
      <div className="dp-section-education">
        {/*school*/}
        <div className="dp-school">
          <Typing speed={10} cursorClassName="dp-cursor">
            <div className="dp-title"> {this.props.schoolSkills}</div>
          </Typing>

          <div className="code code-css dp-work-experience-list">
            <div className="code-content">
              <code>
                <EducationItem
                  duration="1999 - 2003"
                  school="Technical College"
                  schoolName="Mühlhausen"
                  graduation="Fachhochschulreife"
                  note=" 2 "
                />

                <EducationItem
                  duration="2004 - 2006"
                  school="University"
                  schoolName="Friedrich Schiller University of Jena"
                  graduation="studies in Anglistics and Business Science"
                  note=" - "
                />

                {/*Hochschule Wismar*/}
                <EducationItem
                  duration="2010 - 2011"
                  school="Professional Computer Scientist"
                  schoolName="University of Wismar"
                  graduation="certified IT Specialist, qualified for systems integration and networks (IHK)"
                  note=" - "
                />
              </code>
            </div>
          </div>
        </div>

        {/*Technical Skills*/}
        <div className="dp-technical-skills">
          <Typing speed={10} cursorClassName="dp-cursor" startDelay={1500}>
            <div className="dp-title">{this.props.technicalSkills}</div>
          </Typing>

          <div className="code code-js dp-technical-skills-list">
            <div className="code-content">
              <code>
                <span className="c-y">const </span>
                <span className="c-b">networks</span> = [
                <span className="c-g">“IOS”</span>,{" "}
                <span className="c-g">“unifi”</span>,{" "}
                <span className="c-g">“planning and allocating”</span>];
                <br />
                <span className="c-y">const </span>
                <span className="c-b">automation and deployment</span> = [
                <span className="c-g">“github”</span>,{" "}
                <span className="c-g">“docker”</span>,{" "}
                <span className="c-g">“ci/cd”</span>];
                <br />
                <span className="c-y">const </span>
                <span className="c-b">programming (as a hobby)</span> = [
                <span className="c-g">“python”</span>,{" "}
                <span className="c-g">“bash”</span>,{" "}
                <span className="c-g">“zsh”</span>];
                <br />
                <br />
              </code>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

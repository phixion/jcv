import React, {Component} from "react";

export default class WorkItem extends Component {
    constructor(props) {
        super(props);
        this.props = {
            duration: '',
            companyName: '',
            jobTitle: ''
        };
    }

    render() {
        return (
            <div className=" dp-work-experience-item code code-js">
                <div className="code-content">
                    <code>
                        <span className="c-y">let </span>
                        <span className="c-b">{this.props.companyName} </span>
                        = [ <br/>
                        <span className="c-c dp-code-spacer">//{this.props.duration}</span><br/>
                        <span className="c-g dp-code-spacer">“{this.props.jobTitle}”</span>, <br/>
                        <div className="c-g dp-code-spacer dp-work-experience-job-description">"job details:
                            <p className="c-g dp-work-experience-job-description-list">{this.props.children}"</p>
                        </div>
                        ];<br/>
                    </code>
                </div>
            </div>
        );
    }
}

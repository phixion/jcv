import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '_blank',
            list: [
                {
                    id: '1',
                    title:'UR44-Patch',
                    link: 'https://github.com/phixion/arch_steinberg_ur44_patch',
                    platform: 'github',
                    text: {
                        title: 'UR44-Patch',
                        shortDescription: 'Kernel Patch for the Steinberg UR44 USB Audio Interface to work with Archlinux.'
                    }
                },
                {
                    id: '2',
                    title:'Sopel-Modules',
                    link: 'https://github.com/phixion/sopel-modules',
                    platform: 'github',
                    text: {
                        title: 'Sopel-Modules',
                        shortDescription: 'A collection of modules for the  highly extensible IRC Bot framework Sopel.'
                    }
                },
                {
                    id: '3',
                    title:'NV-Update',
                    link: 'https://github.com/lord-carlos/nvidia-update',
                    platform: 'github',
                    text: {
                        title: 'NV-Update',
                        shortDescription: 'Powershell script to download and update nvidia drivers (contribution)'
                    }
                },
                {
                    id: '3',
                    title:'PKG-Mirror',
                    link: 'https://github.com/phixion/archmirror',
                    platform: 'github',
                    text: {
                        title: 'PKG-Mirror',
                        shortDescription: 'Hosting package repositories/iso archives for Archlinux, Tails, Ubuntu, Qubes and Slackware (france and finland, currently migrating to docker and larger storage)'
                    }
                },
            ]
        };
    }

    render() {

        return (
            <div className="dp-projects">
                {this.state.list.map(item => (
                    <div key={item.id} className={"dp-projects-list-item"} >

                        <a href={item.link} target={this.state.target} className="dp-projects-list-item-link">
                            <div className="dp-projects-list-item-text">
                                <div className="dp-projects-list-item-icon">
                                    {item.platform  === 'github' ? <FontAwesomeIcon icon={['fab', 'github']}/> : <FontAwesomeIcon icon={['fab', `${item.platform}`]}/>}
                                </div>

                                <div>
                                    <a href={item.link} target={this.state.target} className="dp-projects-list-item-link">{item.text.title}</a>
                                    <p>{item.text.shortDescription}</p>
                                </div>
                            </div>
                        </a>


                    </div>
                ))}
            </div>
        );
    }
}

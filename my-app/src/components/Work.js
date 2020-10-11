import React, { Component } from "react";

import Typing from "react-typing-animation";
import WorkItem from "./WorkItem";

import "./Work.scss";

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.props = {
      title: "",
    };
  }

  render() {
    return (
      <div className="dp-work">
        {/*work infos*/}
        <Typing speed={10} cursorClassName="dp-cursor">
          <div className="dp-title">{this.props.title}</div>
        </Typing>

        <div className="dp-work-experience">
          <div className="dp-work-experience-list">
            {/*YOU?*/}
            <div className="code code-js">
              <div className="code-content">
                <code>
                  <span className="c-y">const </span>
                  <span className="c-b">you? </span>
                  = [ <br />
                  <span className="c-c dp-code-spacer">//contact me</span>{" "}
                  <br />
                  ];
                </code>
              </div>
            </div>

            {/*Allen & Overy LLP*/}
            <WorkItem
              duration="2006 - 2009"
              companyName="Allen & Overy LLP"
              jobTitle="Legal Assistant (IHK)"
            >
              apprenticeship as a legal assistant,
              <br />
              1 year focused on first- and second-level support at
              IT-Servicedesk,
              <br />
              student exchange at Waukesha Technical College (Wisconsin, US),
              <br />
              certification as paralegal
            </WorkItem>

            {/*IFCO*/}
            <WorkItem
              duration="2011 - 2012"
              companyName="IFCO Systems GmbH"
              jobTitle="Network Infrasctructure (intern)"
            >
              project lead migration of print servers and clients to Windows
              Server 2008 R2,
              <br />
              1st and 2nd level support with a focus on English speaking users,
              <br />
              revamp of the ticket / call logging processes including basic
              change management,
              <br />
              after my successful migration I was offered a permament job
            </WorkItem>
          </div>

          <div className="dp-work-experience-list second-column">
            {/*IFCO*/}
            <WorkItem
              duration="2012 - 2018"
              companyName="IFCO Systems GmbH"
              jobTitle="Network Infrastructure (servicedesk analyst)"
            >
              reallocating the IP-address space for the current IFCO sites as
              part of a infrastructure migration with another company,
              <br />
              replacement of Blackberry devices for Europe including migration
              from BES 5.x to BES 10,
              <br />
              migration from Windows XP / Office 2003 to Windows 7 / Office
              2010,
              <br />
              software packaging and deployment,
              <br />
              datacenter, server, client and network maintanance (cisco IOS,
              Windows Server 2003 - 2016, Debian Linux, RHEL, Fedora, Windows XP
              - 10),
              <br />
              Storage Administration (NetApp, EMC/Dell Storage),
              <br />
              on-site backup, tape backup, metro clustering, storage migration
              (NetApp to EMC)
            </WorkItem>

            {/*IFCO*/}
            <WorkItem
              duration="2018 - 2019"
              companyName="IFCO Systems GmbH"
              jobTitle="Network Infrastructure (projects and company demerge)"
            >
              planning and forming the azure cloud migration of core services
              (mail, file, ad, mobile),
              <br />
              decommisioning of on-premise services,
              <br />
              infrastructure demerge as part of a company split,
              <br />
              rebuild IT services, infrastructure helpdesks as result of company
              split,
              <br />
              Office 365 / Azure AD migration (backend and clients)
            </WorkItem>
          </div>
        </div>
      </div>
    );
  }
}

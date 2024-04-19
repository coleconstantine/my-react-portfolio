import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2004-2007" 
        iconStyle={{ background:"#c1c8e4", color:"#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">School name, place, and state</h3>
          <p>School diploma, degree, certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2022-2023" 
        iconStyle={{ background:"#c1c8e4", color:"#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">School name, place, and state</h3>
          <p>School diploma, degree, certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="date?" 
        iconStyle={{ background:"#84ceeb", color:"#fff"}}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Job name, place, and state</h3>
          <p>Job info</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="date?" 
        iconStyle={{ background:"#84ceeb", color:"#fff"}}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Work name information</h3>
          <p>Work experience and type</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience
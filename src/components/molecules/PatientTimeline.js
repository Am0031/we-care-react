import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";

export const PatientTimeline = ({ visits }) => {
  return (
    <React.Fragment>
      <Typography align="center" color="#00b0ff" fontWeight={200}>
        Your Upcoming Visits
      </Typography>

      <Timeline sx={{ color: "#3f3d56" }}>
        {visits.map((visit) => (
          <TimelineItem>
            <TimelineOppositeContent>
              {visit.date} at {visit.time}
            </TimelineOppositeContent>
            <TimelineSeparator sx={{ color: "#00b0ff" }}>
              <TimelineDot sx={{ bgcolor: "#00b0ff" }}>
                visit.carerGender === "male" ? <ManIcon />: <WomanIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#00b0ff" }} />
            </TimelineSeparator>
            <TimelineContent>{visit.carerName}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </React.Fragment>
  );
};

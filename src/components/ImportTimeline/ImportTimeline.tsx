import React from "react";
import { ImportTimelineStages } from "../../@types/timelineStagesTypes";
import "./ImportTimeline.css";

interface ImportTimelineProps {
  stage: ImportTimelineStages;
}

export const ImportTimeline: React.FC<ImportTimelineProps> = ({
  stage = 1,
}) => {
  return (
    <div className="import-timeline">
      <div
        className="import-timeline-stage"
        style={{
          backgroundColor: `${
            stage === 1 || stage === 2 || stage === 3
              ? "var(--yellow)"
              : "var(--white-50)"
          }`,
        }}
      >
        <h2 className="smalltext-header">Transporte</h2>
      </div>

      <div
        className="import-timeline-connection"
        style={{
          backgroundColor: `${
            stage === 2 || stage === 3 ? "var(--yellow)" : "var(--white-50)"
          }`,
        }}
      />

      <div
        className="import-timeline-stage"
        style={{
          backgroundColor: `${
            stage === 2 || stage === 3 ? "var(--yellow)" : "var(--white-50)"
          }`,
        }}
      >
        <h2 className="smalltext-header">Aduana</h2>
      </div>

      <div
        className="import-timeline-connection"
        style={{
          backgroundColor: `${
            stage === 3 ? "var(--yellow)" : "var(--white-50)"
          }`,
        }}
      />

      <div
        className="import-timeline-last-stage"
        style={{
          backgroundColor: `${
            stage === 3 ? "var(--yellow)" : "var(--white-50)"
          }`,
        }}
      >
        <img src="/images/target-flag-icon.svg" alt="" />
      </div>
    </div>
  );
};

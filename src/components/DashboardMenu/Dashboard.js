import React from "react";
import { DashboardContainer, DashLinks } from "./DashboardStyled";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashLinks>General Overview</DashLinks>
      <DashLinks>View Records</DashLinks>
      <DashLinks>View Win Rate</DashLinks>
    </DashboardContainer>
  );
};

export default Dashboard;

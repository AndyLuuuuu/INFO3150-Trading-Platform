import React from "react";
import HROverview from "./HROverview/HROverview";
import TraderOverview from "./TraderOverview/TraderOverview";
import { GeneralOverviewContainer } from "./GeneralOverviewStyled";

const GeneralOverview = props => {
  return (
    <GeneralOverviewContainer>
      {props.isTrader ? (
        <TraderOverview
          userID={props.userID}
          isTrader={props.isTrader}
          userFullName={props.userFullName}
        />
      ) : (
        <HROverview />
      )}
    </GeneralOverviewContainer>
  );
};

export default GeneralOverview;

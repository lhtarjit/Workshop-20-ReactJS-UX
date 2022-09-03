import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DetailsCards from "./DetailsCards";
import Photo1 from "../../Images/patient1.jpg";
import { Box } from "@mui/material";

const DetailsContainer = styled.div`
  background: #f7f7f7;
  padding: 5px 40px 60px 40px;
  @media (max-width: 800px) {
    padding: 5px 15px 60px 15px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Wrap = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  @media (max-width: 1380px) {
    flex-direction: column;
  }
`;

const PatientImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  @media (max-width: 800px) {
    margin: auto;
  }
`;

const PatientDetails = () => {
  return (
    <DetailsContainer>
      <TitleContainer>
        <Label>Patient Information</Label>
        <Box
          sx={{
            fontSize: "14px",
            gap: "5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#626363", fontSize: "14px" }}>Last seen:</p>
          10:25 AM, today
          <MoreHorizIcon />
        </Box>
      </TitleContainer>
      <Wrap>
        <PatientImage src={Photo1} />
        <DetailsCards />
      </Wrap>
    </DetailsContainer>
  );
};

export default PatientDetails;

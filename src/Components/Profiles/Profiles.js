import React from "react";
import { Box } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import Photo1 from "../../Images/patient1.jpg";
import Photo2 from "../../Images/patient2.jpg";
import Photo3 from "../../Images/patient3.jpg";
import Photo4 from "../../Images/patient4.jpg";

const PatientsDetails = [
  {
    name: "Sara Smith",
    date: "Jan 9, 2020",
    image: Photo1,
    color: "#3acf61",
  },
  {
    name: "James Johnson",
    date: "No Clearance",
    image: Photo2,
    color: "#ff0000",
  },
  {
    name: "Patrice Page",
    date: "Aug 10, 2019",
    image: Photo3,
    color: "#3acf61",
  },
  {
    name: "Derek Diamon",
    date: "Nov 18, 2020",
    image: Photo4,
    color: "#3acf61",
  },
];

const InputBox = styled.input`
  width: 95%;
  padding: 10px;
  margin: 15px 0;
  border-radius: 5px;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;
const Container = styled.div`
  background-color: #e8f5fe;
  background-size: cover;
  height: 100%;
  padding: 5px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Profiles = () => {
  return (
    <>
      <Container>
        <Header>
          <Box>
            <Typography
              sx={{ color: "#736f6f", fontSize: "15px", fontWeight: "600" }}
            >
              Patients
            </Typography>
          </Box>
          <Box>
            <ArrowBackIosIcon
              sx={{
                backgroundColor: "white",
                color: "#03a9f4",
                width: "15px",
                padding: "3px",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
            />
          </Box>
        </Header>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <InputBox placeholder="Search Patient" />
          <SearchIcon
            sx={{
              position: "absolute",
              top: "22px",
              right: "22px",
              zIndex: "100",
              color: "#706f6f",
            }}
          />
        </Box>
        {PatientsDetails.map((item) => (
          <Box
            key={Math.random()}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
              justifyContent: "space-around",
              backgroundColor: "white",
              margin: "10px",
            }}
          >
            <Box>
              <img
                src={item.image}
                alt="fbhrb"
                style={{ width: "50px", borderRadius: "40px" }}
              />
            </Box>
            <Box sx={{ width: "150px" }}>
              <h1 style={{ fontSize: "16px", fontFamily: "Arial" }}>
                {item.name}
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "#706f6f",
                  fontWeight: "500",
                }}
              >
                {item.date}
              </p>
            </Box>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: `${item.color}`,
                borderRadius: "6px",
              }}
            ></Box>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default Profiles;

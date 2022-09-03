import React from "react";
import styled from "styled-components";

const DataContainer = styled.div`
  position: relative;
  margin-top: 30px;
`;

const CommonData = styled.span`
  line-height: 25px;
  font-size: 15px;
  font-weight: bold;
`;

const PatientInformation = styled.span`
  line-height: 25px;
  font-size: 15px;
  font-weight: bold;
`;

const Name = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  top: -30px;
`;

const PatKeyInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.Infowid};
  font-size: 15px;
  color: darkslategrey;
  line-height: 25px;
  font-weight: bolder;
`;

const Patinfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 17px;
`;

const ClearWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Clear = styled.div`
  color: darkslategrey;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 14px;
`;
const Isclear = styled.div`
  height: 85px;
  width: 85px;
  border-radius: 50%;
  background-color: #3fc930;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 85px;
  text-align: left;
  grid-template-columns: repeat(4, auto);
  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 1550px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, auto);
  }
`;
const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: right;
  @media (max-width: 1550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const GridItemw = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailsCards = () => {
  return (
    <DataContainer>
      <Name>Sara Smith</Name>
      <GridContainer>
        <GridItem>
          <PatKeyInfo Infowid="80px">
            <CommonData>Phone:</CommonData>
            <CommonData>Email:</CommonData>
            <CommonData>Gender:</CommonData>
            <CommonData>Age:</CommonData>
          </PatKeyInfo>
          <Patinfo>
            <PatientInformation>456-159-789</PatientInformation>
            <PatientInformation>sara@gmail.com</PatientInformation>
            <PatientInformation>Female</PatientInformation>
            <PatientInformation>45</PatientInformation>
          </Patinfo>
        </GridItem>
        <GridItem>
          <PatKeyInfo Infowid="180px">
            <CommonData>Surgery Type:</CommonData>
            <CommonData>Surgery Date:</CommonData>
            <CommonData>Height(cm):</CommonData>
            <CommonData>Weight(Ib):</CommonData>
            <CommonData>BMI:</CommonData>
          </PatKeyInfo>
          <Patinfo>
            <PatientInformation>Rotator Cuff Repair</PatientInformation>
            <PatientInformation>15 Aug 2020</PatientInformation>
            <PatientInformation>163</PatientInformation>
            <PatientInformation>120</PatientInformation>
            <PatientInformation>19</PatientInformation>
          </Patinfo>
        </GridItem>
        <GridItem>
          <PatKeyInfo Infowid="200px">
            <CommonData>Anesthesiologist:</CommonData>
            <CommonData>Anesthesiologist Email:</CommonData>
            <CommonData>Anesthesiologist Phone:</CommonData>
          </PatKeyInfo>
          <Patinfo>
            <PatientInformation>Dr.Christina Hardaway</PatientInformation>
            <PatientInformation>Christina@mail.com</PatientInformation>
            <PatientInformation>456-184-1549</PatientInformation>
          </Patinfo>
        </GridItem>
        <GridItemw>
          <ClearWraper>
            <Clear>Surgery Clearance</Clear>
            <Isclear>Yes</Isclear>
          </ClearWraper>
        </GridItemw>
      </GridContainer>
    </DataContainer>
  );
};

export default DetailsCards;

import React from 'react';
import Profiles from '../Profiles/Profiles';
import PatientDetails from '../PatientsInformation/PatientDetails';
import PatientMedicalCondition from '../PatientsInformation/PatientMedicalCondition';
import styled from '@emotion/styled';
// import { Box } from '@mui/system';


const ProfileContainer = styled.div`
    width: 400px;
    @media (min-width: 601) and (max-width: 1920px) {
        width: 320px;
    }
`;

const PatientDetailsContainer = styled.div`
    @media (min-width: 0px) and (max-width:600px) {
        display: none;
    }
    @media (min-width: 601) and (max-width: 1920px) {
        display: flex;
    }
`;

const Wrap = styled.div`
    display: flex;
`;

const PatientContainer = () => {

  return (
    <>
        <Wrap>
            <ProfileContainer>
                <Profiles />
            </ProfileContainer>
            <PatientDetailsContainer>
                <PatientDetails />
                <PatientMedicalCondition />
            </PatientDetailsContainer>
        </Wrap>
    </>
  )
}

export default PatientContainer
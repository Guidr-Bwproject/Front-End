import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import TripsTestCards from "./TripsTestCards";
import styled from "styled-components";
import arrowIMG from '../imgs/arrow-alt-circle-down-regular.svg'
import FormikEditTripForm from "./EditTrip";

import { TripsContext } from '../contexts/TripsContext'

export default function ProfileTest() {
  const {trips, setTrips} = useContext(TripsContext)

  return(
    <section className="homePageView">
      <StyledHomePage>
        <div className="homeView">
        <div className="middleContent">
          <FormikEditTripForm />
        {trips.map(trip =>{
          return (
            <TripsTestCards key={trip.id} id={trip.id} />
          );
        })}
        </div>
        </div>
      </StyledHomePage>
    </section>
  );
}

const StyledHomePage = styled.div `
.homeView{
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 500px){
    flex-direction: column;
  }

  @media screen and (max-width: 800px){
    flex-direction: column;
  }
}

.leftContent{
  width: 25%;

  .leftTitle{
    color: white;
    text-shadow: 1px 1px 1px black;
    font-size: 2rem;
  }

  @media screen and (max-width: 500px){
  display: none;
  }

  @media screen and (max-width: 800px){
    display: none;
  }
}

.middleContent{
  width: 50%;
  margin: auto;
  margin-top: 0%;
}

.rightContent{
  width: 25%;

  .rightTitle{
    color: white;
    text-shadow: 1px 1px 1px black;
    font-size: 2rem;
  }
}
`;
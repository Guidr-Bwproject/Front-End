import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import TripsTestCards from "./TripsTestCards";
import styled from "styled-components";
import arrowIMG from '../imgs/arrow-alt-circle-down-regular.svg'
import FormikEditTripForm from "./EditTrip";

import { TripsContext } from '../contexts/TripsContext'



const initialTrip = {
  id: '',
  user_id: 1, //make sure this gets updated
  title: '',
  description: '',
  professional: false,
  duration: '',
  date: '',
  location: '',
  image: ''
}

export default function TripsTest() {
  const {trips, setTrips} = useContext(TripsContext)

  // const [trips, setTrips] = useState([]);
  const [tripData, setTripData] = useState(initialTrip);
  // const [editing, setEditing] = useState(false);
  const [tripToEdit, setTripToEdit] = useState(initialTrip);


  const editTrip = trip => {
    // setEditing(true)
    setTripToEdit(trip)
  }

  return(
    <section className="homePageView">
      <StyledHomePage>
        <div className="homeView">
        <div className="middleContent">
          <FormikEditTripForm 
            trips={trips} 
            setTrips={setTrips} 
            tripData={tripData} 
          />
        {trips.map(trip =>{
          return (
            <TripsTestCards 
              key={trip.id} 
              id={trip.id}
              {...trip} 
              trip={trip} 
              editTrip={editTrip} 
              setTripData={setTripData} 
            />
            
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
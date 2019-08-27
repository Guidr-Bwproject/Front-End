import React, {useEffect, useState} from "react";
import axios from "axios";
import HomePageCards from "./HomePageCards";
import styled from "styled-components";

import {Card, Image} from "semantic-ui-react";
import JennHiking from "../imgs/JennHiking2.jpg";
import arrowIMG from '../imgs/arrow-alt-circle-down-regular.svg'

import HomePageProfileCard from "./HomePageProfileCard";




export default function HomePage() {
  const [trips, setTrips] = useState([]);

  useEffect(() =>{
    axios
      .get('https://guidr-app.herokuapp.com/api/trips')
      .then(response =>{
        setTrips(response.trips.results)
        console.log(trips);
      })
      .catch(error =>{
        console.log(error);
      });
  },[]);

  return(
    <section className="homePageView">
      <StyledHomePage>
        <div className="homeView">
          <div className="leftContent">
            <HomePageProfileCard />
          </div>
        <div className="rightContent">
          <h4 className='title'>Current Trips <img className='arrowIMG' src={arrowIMG} width='50' height='50' color='white' /> </h4>
        {/* {trips.map(trip =>{
          return <HomePageCards key={trip.id} {...trip} />;
        })} */}
        <HomePageCards />
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
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  position: fixed;
  right: 60%;
  top: 35%;

  @media screen and (max-width: 500px){
  display: none;
  }

  @media screen and (max-width: 800px){
    display: none;
  }
}

.rightContent{
  width: 55%;
  margin: auto;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px){
    width: 90%;
  }

  @media screen and (max-width: 800px){
    width: 90%;
  }

  h1{
    font-size: 3rem;
    color: #314b11;
    align-self: flex-start;
  }
}
`;
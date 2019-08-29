import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import arrowIMG from '../imgs/arrow-alt-circle-down-regular.svg';

import HomePageProfileCard from "./HomePageProfileCard";
import HomePageCards from "./HomePageCards";
import { Button } from 'semantic-ui-react'



export default function Profile2() {
  const [trips, setTrips] = useState([]);

  useEffect(() =>{
    axios
      .get('https://guidr-app.herokuapp.com/api/trips') // NOT SURE HOW TO LIST TRIPS OF SINGLE USER??
      .then(response =>{
        setTrips(response.data)
        console.log(trips);
      })
      .catch(error =>{
        console.log(error);
      });
  },[]);

  return(
    <section className="ProfileView">
      <StyledProfilePage>
        <div className="ProfileView">
            <div className="mainContent">
                  <h4 className='title'>About Me <img className='arrowIMG'  width='50' height='50' color='white' /> </h4> {/*src={arrowIMG*/}}
                    <HomePageProfileCard />
                        <div className="buttons">
                            <Button href="      ">Read Stories</Button>
                            <Button href="/Profile">Log A Trip</Button>
                        </div>
                        {trips.map(trip =>{
                            return <HomePageCards key={trip.id} {...trip} />; // NOT SURE HOW TO LIST TRIPS OF SINGLE USER??
                        })}
                            
            </div>
        </div>
      </StyledProfilePage>
    </section>
  );
}


const StyledProfilePage = styled.div `
.ProfileView{
  display: flex;
  justify-content: center;

  @media screen and (max-width: 500px){
    flex-direction: column;
  }

  @media screen and (max-width: 800px){
    flex-direction: column;
  }
}
.mainContent{
  width: 50%;
  margin: auto;
  margin-top: 0%;
}
.buttons{
    display: flex;
    justify-content: space between;
}
.buttons Button{
    
}
`;
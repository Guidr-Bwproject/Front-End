import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";

import HomePageProfileCard from "./HomePageProfileCard";
import HomePageCards from "./HomePageCards";




export default function Profile2() {
  const [trips, setTrips] = useState([]);

  useEffect(() =>{
    axios
      .get('https://guidr-app.herokuapp.com/api/user/trips') // NOT SURE HOW TO LIST TRIPS OF SINGLE USER??
      .then(response =>{
        setTrips(response.trips.results)
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
                <h4 className='title'>About Me <img className='arrowIMG' src={arrowIMG} width='50' height='50' color='white' /> </h4>
                    <HomePageProfileCard />
                        <div className="buttons">
                            <Button href="/???">Read Stories</Button>
                            <Button href="/Profile">Log A Trip</Button>
                        </div>
                        {trips.map(trip =>{
                            return <HomePageCards key={trip.id} {...trip} />; // NOT SURE HOW TO LIST TRIPS OF SINGLE USER??
                        })}
                            <HomePageCards />
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
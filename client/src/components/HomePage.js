import React, {useEffect, useState} from "react";
import axios from "axios";
import HomePageCards from "./HomePageCards";
import styled from "styled-components";
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus cum voluptates consequuntur nam placeat earum cupiditate recusandae minima perferendis cumque modi beatae, fugit adipisci? Officia tenetur inventore iste asperiores eos?</p>

          </div>
        <div className="rightContent">
          <h1>Trip Feed</h1>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;

  @media screen and (max-width: 500px){
    width: 100%;
  }

  @media screen and (max-width: 800px){

    width: 90%;
    margin: auto;
    margin-top: 5%;
  }

  p{
    width: 50%;
    background-color: #f7f7f7;
    opacity: .8;
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 5%;
    text-align: left;
    box-shadow: 0px 5px 5px;

    @media screen and (max-width: 500px){
      display: none;
    }

    @media screen and (max-width: 800px){
      display: none;
    }
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
import React, {useEffect, useState} from "react";
import axios from "axios";
import HomePageCards from "./HomePageCards";
import styled from "styled-components";



export default function HomePage() {
  const [trips, setTrips] = useState([]);

  useEffect(() =>{
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response =>{
        setTrips(response.data.results)
      })
  },[]);

  return(
    <section className="homePageView">
      <StyledHomePage>
        <div className="homeView">
          <div className="leftContent">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus cum voluptates consequuntur nam placeat earum cupiditate recusandae minima perferendis cumque modi beatae, fugit adipisci? Officia tenetur inventore iste asperiores eos?</p>

          </div>
        <div className="rightContent">
          <h1>Feed</h1>
        {trips.map(trip =>{
          return <HomePageCards key={trip.id} {...trip} />;
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
}

.leftContent{
  width: 40%;

  p{
    width: 50%;
    background-color: #f7f7f7;
    opacity: .8;
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 5%;
    text-align: left;
  }
}

.rightContent{
  width: 55%;
  display: flex;
  flex-direction: column;

  h1{
    font-size: 3rem;
    color: #314b11;
  }
}
`;
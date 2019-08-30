import React, {useEffect, useState, useContext} from "react";
// import axios from "axios";
import HomePageCards from "./HomePageCards";
import styled from "styled-components";
import arrowIMG from '../imgs/arrow-alt-circle-down-regular.svg';
import HomePageProfileCard from "./HomePageProfileCard";
import AboutCreatorCard from "./AboutCreators"
import { TripsContext } from "../contexts/TripsContext"

export default function HomePage(props) {
  const {trips, setTrips} = useContext(TripsContext)
  console.log('Home Page trips', trips)
  // const [trips, setTrips] = useState([]);

  // useEffect(() =>{
  //     axios
  //     .get('https://guidr-app.herokuapp.com/api/trips')
  //     .then(response =>{
  //       setTrips(response.data)
  //       console.log('Trips Data Response', response.data);
  //     })
  //     .catch(error =>{
  //       console.log(error);
  //     });
  // },[]);

  return(
    <section className="homePageView">
      <StyledHomePage>
        <div className="homeView">
          <div className="leftContent">
            <h4 className="leftTitle">Welcome!</h4>
            <HomePageProfileCard />
          </div>
          <div className="middleContent">
            <h4 className='title'>Current Trips <img alt="" className='arrowIMG' src={arrowIMG} width='50' height='50' color='white' /> </h4>
            {trips.map((trip, props) =>{
              return <HomePageCards {...props} key={trip.id} {...trip} trip={trip} id={trip.id}/>;
            })}
          </div>
          <div className="rightContent">
            <h4 className="rightTitle">Meet the Team</h4>
            <AboutCreatorCard />
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

  @media screen and (max-width: 500px){
    width: 90%;
  }

  @media screen and (max-width: 800px){
    width: 80%;
  }
}

.rightContent{
  width: 25%;

  @media screen and (max-width: 800px){
    width: 90%;
    margin: auto;
  }


  .rightTitle{
    color: white;
    text-shadow: 1px 1px 1px black;
    font-size: 2rem;
  }
    
  }
}
`;
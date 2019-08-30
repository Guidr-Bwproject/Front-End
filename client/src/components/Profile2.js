import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import styled from "styled-components";
import arrowIMG from '../imgs/arrow-alt-circle-down-regular.svg';
import {Button} from "semantic-ui-react";
import HomePageProfileCard from "./HomePageProfileCard";
import HomePageCards from "./HomePageCards";
import { TripsContext } from "../contexts/TripsContext";
import FormikEditTripForm from "../components/EditTrip"
import { Link } from 'react-router-dom'
import { UserContext } from "../contexts/UserContext";


export default function Profile2() {
  
  const {loggedUser, setLoggedUser} = useContext(UserContext)
  const {trips, setTrips} = useContext(TripsContext)
  console.log(trips)
  
  // const [trips, setTrips] = useState([]);

  // useEffect(() =>{
  //   axios
  //     .get('https://guidr-app.herokuapp.com/api/trips') // NOT SURE HOW TO LIST TRIPS OF SINGLE USER??
  //     .then(response =>{
  //       setTrips(response.data)
  //       console.log(trips);
  //     })
  //     .catch(error =>{
  //       console.log(error);
  //     });
  // },[]);

  // const filteredArray = trips.filter(trip => trip.user_id = id) {}
  //     return (
  //       console.log('things')
  //     )
  // }

// if (loggedUser) return trips.filter(i => i.user_id === loggedUser.id)




// console.log('USERRRRR', tripsByUserId)
  
  return(
    <section className="ProfileView">
      <StyledProfilePage>
        <div className="ProfileView">
            <div className="mainContent">
                  <h4 className='title'>About Me <img className='arrowIMG' src={arrowIMG} width='50' height='50' color='white' /> </h4> 
                    {loggedUser && <HomePageProfileCard />}
                        <div className="buttons">
                            {loggedUser && <Button className="Button" href="https://guidrapp.netlify.com/stories-page.html">Read Stories</Button>}
                            {loggedUser && <Link className="Button" to="/addtrip">Log A Trip</Link>}
                        </div>
                        {loggedUser && trips.map(trip =>{
                            return <HomePageCards 
                                      key={trip.id} 
                                      id={trip.id} 
                                      userID={trip.user_id} 
                                      {...trip} />;
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
.buttons .Button{
  background-color: #314b11;
  color: white;
  width: 100%;
  border-radius: 10px;
  border: solid 3px #314b11;
  font-size: 2rem;
  padding: 2%;
  margin: 25px;
}
`;
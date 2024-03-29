import React, {useContext} from "react";
import {Card, Image, Button} from "semantic-ui-react";
import Mountain from "../imgs/Mountain.jpg";
import {Route, Link} from "react-router-dom";
import styled from "styled-components";
import {axiosWithAuth} from "../utils/axiosWithAuth"

import { TripsContext } from '../contexts/TripsContext'
import { TripContext } from '../contexts/TripContext'

export default function TripsTestCards({ username, title, date, description, image, id }) {
  
  const {trips, setTrips} = useContext(TripsContext)
  const {trip, setTrip} = useContext(TripContext)

  const deleteTrip = (event) => {
    // event.preventDefault()
    axiosWithAuth()
      .delete(`https://guidr-app.herokuapp.com/api/trips/${id}`)
      .then(res => {
        const newTripsArr = trips.filter(i => i.id !== id)
        setTrips(newTripsArr)
      })
      .catch(err => console.log(err.response))
  }

  return(
    <StyledHomeCards>
    <div className="homeCard">
    <Card className="CardContainer">
      <Image src={image} fluid className="cardImage"/>
      <Card.Content style={{padding: "1% 5%"}}>
        <Card.Header className="cardHeader">{title}</Card.Header>
        <Card.Meta className="cardMeta">
        <Link to="/${user-id}" className="cardGuideLink">Guide Name: {username} | Date: {date}</Link>
        </Card.Meta>
        <Card.Description style={{textAlign: "left", width: "80%", margin: "auto"}}>
        {description}
        </Card.Description>
        <Card.Description className="cardLink">
        <Link to="/${trip-id}" className="homePageCardLink">Click here for trip details</Link>
        </Card.Description>
      </Card.Content>
      {/* <p>{JSON.stringify(trip)}</p> */}
      <button type="button" onClick={(event) => {
        event.preventDefault()
        setTrip(trips.find(i => i.id === id))
        console.log(trip)
      }}>edit trip</button>
      <button type="button" onClick={deleteTrip}>delete trip</button>
    </Card>
    </div>
    </StyledHomeCards>
  )
}

const StyledHomeCards = styled.div `
.CardContainer{
  width: 100%;
  background-color: #f7f7f7;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 5px 5px;
  opacity: .9;
  margin-bottom: 5%;
}

.cardImage{
width: 100%;
height: 200px;
border-radius: 10px 10px 0px 0px;
}

.cardHeader{
text-align: left;
font-size: 2rem;
font-weight: bold;
color: #314b11;
font-family: "Roboto";
}

.cardMeta{
  text-align: left;
  padding: 1.5%;}

.cardGuideLink{
  color: #314b11;
  font-weight: bold;
}

.cardGuideLink:hover{
  cursor: pointer;
  color: #496e1b;
}

.cardLink{
  padding: 2%;
}

.homePageCardLink {
  color: #314b11;
  font-weight: bold;
}

.homePageCardLink:hover{
  cursor: pointer;
  color: #496e1b;
}

`;
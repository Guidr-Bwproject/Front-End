import React, {useEffect, useState} from "react";
import axios from "axios";
import TripDetailCard from "./TripDetailCard";
import styled from "styled-components";




export default function TripDetails() {
  const [details, setDetails] = useState([]);

  useEffect(() =>{
    axios
      .get('https://guidr-app.herokuapp.com/api/trips/:id')
      .then(response =>{
        setDetails(response.details.results)
        console.log(details);
      })
      .catch(error =>{
        console.log(error);
      });
  },[]);

  return(
    <section className="tripDetailView">
      {details.map(detail =>{
        return <TripDetailCard key={detail.id} {...detail} />;
      })}
      <TripDetailCard />
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
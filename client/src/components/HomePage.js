import React, {useEffect, useState} from "react";
import axios from "axios";
import HomePageCards from "./HomePageCards";


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
      <h1>Browse the Trips!</h1>
      <div className="homePageCards">
      {trips.map(trip =>{
        return <HomePageCards key={trip.id} {...trip} />;
      })}
      </div>
    </section>
  );
}
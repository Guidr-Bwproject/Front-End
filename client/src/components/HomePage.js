import React, {useEffect, useState} from "react";
import axios from "axios";
import HomePageCards from "./HomePageCards";


export default function HomePage() {
  const [trips, setTrips] = useState([]);

  useEffect(() =>{
    axios
      .get()
      .then(response =>{
        setTrips(response.data.results)
      })
  },[]);

  return(
    <section className="homePageView">
      {trips.map(trip =>{
        return <HomePageCards key={trip.id} {...trip} />;
      })}
    </section>
  );
}
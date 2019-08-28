import React, {useEffect, useState} from "react";
import axios from "axios";
import TripDetailCard from "./TripDetailCard";




export default function TripDetails() {
  const [details, setDetails] = useState([]);

  useEffect(() =>{
    axios
      .get('https://guidr-app.herokuapp.com/api/trips/id')
      .then(response =>{
        setDetails(response.data)
        console.log(response);
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


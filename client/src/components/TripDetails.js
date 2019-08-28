import React, {useEffect, useState} from "react";
import axios from "axios";
import TripDetailCard from "./TripDetailCard";




export default function TripDetails(props) {
  const [details, setDetails] = useState({});

  useEffect(() =>{
    const id = props.match.params.id;
    console.log(props);
    axios
      .get(`https://guidr-app.herokuapp.com/api/trips/${id}`)
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
          <TripDetailCard details={details} />;
          {console.log(details)};
    </section>
  );
}


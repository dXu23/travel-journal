import React from 'react';
import { ReactComponent as Loc } from '../assets/location.svg';

interface TravelCardProps {
    title: string;
    location: string;
    googleMapsUrl: string;
    startDate: string;
    endDate: string;
    description: string;
    imageUrl: string;
}

export default function TravelCard(props: TravelCardProps) {
    return (
      <article>
        <img className="travel-image" src={props.imageUrl} alt={props.title} />
        <div className="travel-text">
          <div>
            <span className="travel-location"><Loc /> &nbsp; {props.location}</span> &nbsp;&nbsp;&nbsp;
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h2>{props.title}</h2>
          <h5>{props.startDate} - {props.endDate}</h5>
          <p>{props.description}</p>
        </div>
      </article>
    );
}


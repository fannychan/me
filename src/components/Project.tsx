import React from "react";
import cv from "../images/cv.png";

interface Props {
  title: string;
  description: string;
  image: string;
}

export const Project = ({ title, description, image }: Props) => {

  return (
    <div style={{display: 'flex'}}>
      <img src={cv} style={{width: '450px'}}>
      </img>
      <div style={{marginLeft: '20px'}}>


      <h3>{title}</h3>
      <p>{description}</p>
      </div>
    </div>
  )
}
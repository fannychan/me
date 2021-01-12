import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`
interface Props {
  heading: string,
  text: string,
  icon: JSX.Element
}

export const SkillBlock = ({ heading, text, icon }: Props) => {


  return (
    <div style={{ color: 'white', display: 'flex', flexDirection: 'column', width: '150px' }}>

      <Circle>
        {icon}
      </Circle>
      <div style={{ textAlign: 'center' }}>
        <p><strong style={{ marginTop: '5px' }}>{heading}</strong></p>
        <p style={{ marginTop: '5px' }}>{text}</p>
      </div>
    </div>
  )

}
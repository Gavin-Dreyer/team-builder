import React from 'react';
import styled from 'styled-components';

const DivCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem;
`;

const DivComTwo = styled.div`
  margin: 1rem;
  background-color: #7FDBFF;
  box-shadow: 10px 10px;
  width: 20rem;

`;

function Team(props) {
  console.log(props.team)
  return (
    <DivCon >
      <>
      {props.team.map(teams => (
          <DivComTwo  key={teams.id}>
            <p>{teams.name}</p>
            <p>{teams.email}</p>
            <p>{teams.role}</p>
          </DivComTwo>
        ))}
        <p></p>
      </>
    </DivCon>
  );
}

export default Team;
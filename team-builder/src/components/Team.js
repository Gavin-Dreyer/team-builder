import React from 'react';


function Team(props) {
  console.log(props.team)
  return (
    <div>
      <>
      {props.team.map(teams => (
          <div  key={teams.id}>
            <p>{teams.name}</p>
            <p>{teams.email}</p>
            <p>{teams.role}</p>
          </div>
        ))}
        <p></p>
      </>
    </div>
  );
}

export default Team;
import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import Team from './components/Team'
import TeamForm from './components/TeamForm'

const FormStyle = styled.div`
  font-size: 2rem;
`;

function App() {
  const [team, setTeam] = useState([
    {
    id: 1,
    name: 'Gavin',
    email: '123@gmail.com',
    role: 'web dev'
  }, {id: 2,
  name: 'Gavin',
  email: '123@gmail.com',
  role: 'web dev'}, {
    id: 3,
    name: 'Gavin',
    email: '123@gmail.com',
    role: 'web dev'
  }, {id: 4,
  name: 'Gavin',
  email: '123@gmail.com',
  role: 'web dev'}])

  const addNewTeam = teams => {
    const newTeam = {
      id: Date.now(),
      name: teams.name,
      email: teams.email,
      role: teams.role
    };
    setTeam([...team, newTeam]);
  };


  return (
    <FormStyle className="App">
      <TeamForm addNewTeam={addNewTeam}/>
      <Team team={team}/>
    </FormStyle>
  );
}

export default App;

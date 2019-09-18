import React, { useState } from 'react'


function TeamForm(props) {
  
  const [team, setTeam] = useState({
    name: '',
    email: '',
    role: ''
  })

  const handleChange = event => {
    setTeam({...team, [event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewTeam(team)
    setTeam({ name: '', email: '', role: '' });
    console.log(team)
  }
  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
       <label htmlFor='name'>
          Name:
       </label>
       <input 
        type="text" 
        name="name" 
        value={team.name} 
        onChange={event => handleChange(event)} />
       <label htmlFor='email'>
          Email:
       </label>
       <input 
        type="text" 
        name="email" 
        value={team.email} 
        onChange={event => handleChange(event)} />
       <label htmlFor='rike'>
          Role:
       </label>
       <input 
        type="text" 
        name="role" 
        value={team.role} 
        onChange={event => handleChange(event)} />
       <button onSubmit={() => handleSubmit()}>Submit!</button>
     </form>
    </div>
  );
}

export default TeamForm;
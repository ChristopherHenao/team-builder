import React, { useState } from 'react';
import './App.css'
import Form from './Form';
import TeamMembers from './TeamMembers';


// Initial Member list
const team = [{
  id: 0,
  name:"Chris",
  email:"chris@gmail.com",
  role:"Student",
}, 
{
  id: 1,
  name:"John",
  email:"john@yahoo.com",
  role:"Team Lead"
},
{
  id: 2,
  name:"Bill",
  email:"bill@gmail.com",
  role:"Teacher"
}];

// Structure for new members
const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

//Main App function
function App() {
  
  // TeamMembers State
  const [teamMembers, setTeamMembers] = useState(team);
  
  // Input Form State
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    if (!newMember.name || !newMember.email || !newMember.role) 
    return
    
    const memberFromBackend = newMember;
    setTeamMembers([memberFromBackend, ...teamMembers])
    setFormValues(initialFormValues)
  }
  

  return (
    <div className="App">
        <h1>Team Members</h1>
        {teamMembers.map(member => {
          return (<TeamMembers update={updateForm} member={member} key={member.id}/>)
        })}

        <Form 
        setTeamMembers={setTeamMembers}
        values={formValues}
        submit={submitForm}
        update={updateForm}
        />
    </div>
  );
}

export default App;

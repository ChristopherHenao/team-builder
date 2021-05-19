import React from 'react';

const TeamMembers = (props) => {

    const {member} = props;

    return (
        <div>
            <h2>Name: {member.name}</h2>
            <h4>Role: {member.role}</h4>
            <h4>Email: {member.email}</h4>
        </div>
    )
}

export default TeamMembers;
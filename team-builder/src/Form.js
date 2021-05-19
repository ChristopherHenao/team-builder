import React from 'react';






const Form = (props) => {
    const {setTeamMembers, values, update, submit} = props;

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }


    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input 
                    name="name" 
                    placeholder="Type Name" 
                    type="string"
                    onChange={onChange}
                    value={values.name}
                    />
                </label><br/>

                <label>Email:
                    <input 
                    name="email" 
                    placeholder="Type Email" 
                    type="email"
                    onChange={onChange}
                    value={values.email}
                    />
                </label><br/>

                <label>Role:
                    <input 
                    name="role" 
                    placeholder="Type Team Role" 
                    type="string"
                    onChange={onChange}
                    value={values.role}
                    />
                </label><br/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;
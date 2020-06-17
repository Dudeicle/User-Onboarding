import React from 'react'


export default function userForm (props) {
    
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
    } = props
    

return (
    <form onSubmit={onSubmit}>
        <div>
            <h2>Add a User!</h2>
            <button disabled={disabled}>Submit</button>
        </div>

        <div>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
        </div>

        <div>
            <label>Name&nbsp;
                <input 
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onInputChange}
                />
            </label>&nbsp;


            <label>Email&nbsp;
                <input 
                    type='email'
                    name='email'
                    value={values.name}
                    onChange={onInputChange}
                />
            </label>&nbsp;
            
            
            <label>Password&nbsp;
                <input 
                    type='text'
                    name='password'
                    value={values.name}
                    onChange={onInputChange}
                />
            </label>&nbsp;
            
            
            <label>Terms of Service&nbsp;
                <input 
                    type='checkbox'
                    name='terms'
                    onChange={onCheckboxChange}
                    checked={values.terms}
                />
            </label>&nbsp;


        </div>


    </form>



    )
}
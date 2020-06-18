import React from 'react'

export default function User({ details }) {
    if (!details) {
        return <h3>Working fetching your user&apos;s details...</h3>
    }
    console.log(details)
    return (
        <div>
            <h2>Name: {details.first_name} {details.last_name}</h2>
            <p>Email: {details.email}</p>

        </div>
    )
}
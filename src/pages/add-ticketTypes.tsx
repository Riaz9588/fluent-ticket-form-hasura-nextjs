import React, { useState } from 'react'
import DynamicFieldCreation from '../components/DynamicFieldCreation.tsx'

const hasuraEndpoint: string = "https://glorious-eagle-50.hasura.app/v1/graphql"

const headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret": "JCwPRZI0oxkWQTABoVLSbGQ61j3LlqdhPO0rmnR4j0lpzln6xlsFdPYYN3nyXb8x",
}

function AddTicketType() {

    const [ticketType, setTicketType] = useState('');
    const [extraFields, setExtraFields] = useState([])


    const createTicketTypeHandler = (e) => {
        e.preventDefault()

        console.log(extraFields)

        const graphqlQuery: any = `
        query MyQuery {
            assignTeam(where: {ticketTypeID: {_eq: } }) {
              id
              teamID
            }
          }
        `

        // fetch(hasuraEndpoint, {
        //     method: 'POST',
        //     headers: headers,
        //     body: JSON.stringify({ query: graphqlQuery }),
        // })
        //     .then(response => response.json())
        //     .then(data => {

        //     })
        //     .catch(error => console.error('Error:', error));
    }



    return (
        <div className="container mx-6 my-6 items-center">
            <h1 className='text-bold font-bold text-xl my-3'>Add Ticket Type</h1>

            <form className="grid gap-10" onSubmit={createTicketTypeHandler}>

                <div className="w-1/2">
                    <label htmlFor="customerID" className="block text-gray-700 text-sm font-bold mb-2">Enter Ticket Type</label>
                    <input className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-b' value={ticketType} onChange={e => setTicketType(e.target.value)} id="customerID" type="text" />
                </div>

                <div className="w-1/2">
                    <label htmlFor="customerID" className="block text-gray-700 text-sm font-bold mb-2">Enter Dynamic Field</label>
                    <DynamicFieldCreation setExtraFields={setExtraFields} />
                </div>


                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Create Ticket Type</button>
            </form>
        </div>
    )
}

export default AddTicketType
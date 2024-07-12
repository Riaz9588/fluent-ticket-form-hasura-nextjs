
import React, { useState, useEffect } from 'react';
import fetchApi from '../hooks/fetchApi'




const hasuraEndpoint: string = "https://glorious-eagle-50.hasura.app/v1/graphql"

const headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret": "JCwPRZI0oxkWQTABoVLSbGQ61j3LlqdhPO0rmnR4j0lpzln6xlsFdPYYN3nyXb8x",
}

const TicketForm = () => {
    const [selectedTicketType, setSelectedTicketType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');

    const [last4DigitCustomerID, setLast4DigitCustomerID] = useState('');
    const [selectedTicketOwner, setSelectedTicketOwner] = useState('');
    const [selectedShareWith, setSelectedShareWith] = useState('');



    const response: any = fetchApi({
        query: `
            query MyQuery {
                ticketTypes {
                id
                name
                categories {
                    id
                    name
                    ticketType_id
                    subCategories {
                    id
                    name
                    category_id
                    }
                }
                }
            }   
    `
    }, true)


    if (response.isLoading) {
        return <div className='text-2xl font-black h-screen w-screen flex justify-center items-center'>
            Loading ...
        </div>
    }

    if (!response.data || response.isError) {
        return <div className='text-2xl font-black h-screen w-screen flex justify-center items-center'>
            Something went wrong!
        </div>
    }


    const ticketTypes = response.data.ticketTypes.map(item => (
        <option key={item.id} value={item.id}>
            {item.name}
        </option>
    ));

    const categories = response.data.ticketTypes.find(item => item.id === parseInt(selectedTicketType, 10))
        ?.categories.map(category => (
            <option key={category.id} value={category.id}>
                {category.name}
            </option>
        ));

    const subCategories = response.data.ticketTypes.find(item => item.id === parseInt(selectedTicketType, 10))
        ?.categories.find(category => category.id === parseInt(selectedCategory, 10))
        ?.subCategories.map(subCategory => (
            <option key={subCategory.id} value={subCategory.id}>
                {subCategory.name}
            </option>
        ));

    const ticketOwners = [
        <option>T-A</option>,
        <option>T-B</option>,
        <option>T-C</option>
    ]


    const shareWith = [
        <option>S-A</option>,
        <option>S-B</option>,
        <option>S-C</option>
    ]

    const handleTicketTypeChange = e => {
        setSelectedTicketType(e.target.value);
        setSelectedCategory('');
        setSelectedSubCategory('');
    };

    const handleCategoryChange = e => {
        setSelectedCategory(e.target.value);
        setSelectedSubCategory('');
    };

    const handleSubCategoryChange = e => {
        setSelectedSubCategory(e.target.value);
    };

    const handleTicketOwnerChange = e => {
        setSelectedTicketOwner(e.target.value);
    };

    const handleShareWithChange = e => {
        setSelectedShareWith(e.target.value);
    };

    const createTicketHandler = (e) => {
        e.preventDefault()

        const graphqlQuery: any = `
        query MyQuery {
            assignTeam(where: {ticketTypeID: {_eq: ${selectedTicketType}}, ${selectedSubCategory ? `categoryID: {_eq: ${selectedCategory}} subCategoryID: {_eq: ${selectedSubCategory}},` : `categoryID: {_eq: ${selectedCategory}}`} }) {
              id
              teamID
            }
          }
        `

        // console.log(graphqlQuery)

        fetch(hasuraEndpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ query: graphqlQuery }),
        })
            .then(response => response.json())
            .then(data => {
                alert(`
                TicketType: ${selectedTicketType}
                Category: ${selectedCategory}
                SubCategory: ${selectedSubCategory}
                Team: ${data.data.assignTeam[0]?.teamID || 'No team assign in this combination'}
            `)
            })
            .catch(error => console.error('Error:', error));

    }

    return (
        <div className="container mx-6 my-6 items-center">
            <form className="grid gap-10" onSubmit={createTicketHandler}>
                <div className="w-1/2">
                    <label htmlFor="ticketType" className="block text-gray-700 text-sm font-bold mb-2">Ticket Type:</label>
                    <select
                        id="ticketType"
                        value={selectedTicketType}
                        onChange={handleTicketTypeChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select Ticket Type</option>
                        {ticketTypes}
                    </select>
                </div>

                <div className="w-1/2">
                    <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select Category</option>
                        {categories}
                    </select>
                </div>

                {
                    !!subCategories?.length &&
                    <div className="w-1/2">
                        <label htmlFor="subCategory" className="block text-gray-700 text-sm font-bold mb-2">Subcategory:</label>
                        <select
                            id="subCategory"
                            value={selectedSubCategory}
                            onChange={handleSubCategoryChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select Subcategory</option>
                            {subCategories}
                        </select>
                    </div>
                }

                <div className="w-1/2">
                    <label htmlFor="customerID" className="block text-gray-700 text-sm font-bold mb-2">Last 4 digit of customer ID</label>
                    <input className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-b' onChange={e => setLast4DigitCustomerID(e.target.value)} value={last4DigitCustomerID} id="customerID" type="text" />
                </div>


                <div className="w-1/2">
                    <label htmlFor="ticketOwner" className="block text-gray-700 text-sm font-bold mb-2">Ticket Owner</label>
                    <select
                        id="ticketOwner"
                        value={selectedTicketOwner}
                        onChange={handleTicketOwnerChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select Ticket Owner</option>
                        {ticketOwners}
                    </select>
                </div>

                <div className="w-1/2">
                    <label htmlFor="shareWith" className="block text-gray-700 text-sm font-bold mb-2">Share With</label>
                    <select
                        id="shareWith"
                        value={selectedShareWith}
                        onChange={handleShareWithChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select Share With</option>
                        {shareWith}
                    </select>
                </div>

                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Create Ticket</button>
            </form>
        </div>
    );
};

export default TicketForm;








































// import React, { useEffect, useState } from 'react'
// import fetchApi from '../hooks/fetchApi'


// function CRUD() {

//     const [ticketType, setTicketType] = useState("")
//     const [category, setCategory] = useState("")
//     const [subCategory, setSubCategory] = useState("")


//     const [triggerGetTicketTypes, setTriggerGetTicketTypes] = useState(false)
//     const [triggerGetCategoriesByTicketTypeID, setTrigerGetCategoriesByTicketTypeID] = useState(false)
//     const [triggerGetSubCategoriesByCategoryID, setTriggerGetSubCategoriesByCategoryID] = useState(false)




//     const getTicketTypes = fetchApi({
//         query: `
//             query MyQuery {
//                 ticketTypes {
//                 id
//                 name
//                 }
//             }    
//         `
//     }, triggerGetTicketTypes)

//     const getCategoriesByTicketTypeID = fetchApi({
//         query: `
//         query MyQuery {
//             category(where: {ticketType: {id: {_eq: ${ticketType}}}}) {
//               id
//               name
//             }
//           }  
//         `
//     }, triggerGetCategoriesByTicketTypeID)

//     const getSubCategoriesByCategoryID = fetchApi({
//         query: `
//             query MyQuery {
//                 ticketTypes {
//                 id
//                 name
//                 }
//             }    
//         `
//     }, triggerGetSubCategoriesByCategoryID)


//     // query MyQuery @cached {
//     //     ticketTypes {
//     //       id
//     //       name
//     //       categories {
//     //         id
//     //         name
//     //         ticketType_id
//     //         subCategories {
//     //           id
//     //           name
//     //           category_id
//     //         }
//     //       }
//     //     }
//     //   }






//     useEffect(() => {
//         setTriggerGetTicketTypes(true)
//     }, [])

//     if (getTicketTypes.isLoading || getCategoriesByTicketTypeID.isLoading) {
//         return <div className='text-2xl font-black h-screen w-screen flex justify-center items-center'>
//             Loading ...
//         </div>
//     }

//     if (!getTicketTypes.data || getTicketTypes.isError) {
//         return <div className='text-2xl font-black h-screen w-screen flex justify-center items-center'>
//             Something went wrong!
//         </div>
//     }



//     const submitHandler = (e) => {
//         e.preventDefault()

//     }

//     const ticketTypeHandler = (value) => {
//         setTicketType(value)
//         setTrigerGetCategoriesByTicketTypeID(true)
//         setTriggerGetTicketTypes(true)
//     }

//     const categoryHandler = (value) => {
//         setCategory(value)
//     }

//     return (
//         <div className='bg-green-100 w-screen h-screen'>
//             <div className='container mx-auto grid items-center h-screen'>
//                 <div>

//                     <h3 className='text-3xl font-black text-center my-8 text-slate-500'>User Table</h3>

//                     <div className="flex justify-center my-2">
//                         <form onSubmit={submitHandler} className=''>

//                             <label htmlFor="ticketTypes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a Ticket type</label>
//                             <select onChange={e => ticketTypeHandler(e.target.value)} id="ticketTypes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                                 <option selected value="">Select a ticket type</option>
//                                 {
//                                     getTicketTypes.data?.ticketTypes?.map(ticketType => (
//                                         <option value={ticketType.id}>{ticketType.name}</option>
//                                     ))
//                                 }
//                             </select>

//                             <label htmlFor="categoty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a Category</label>
//                             <select onChange={e => categoryHandler(e.target.value)} id="categoty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                                 <option selected value="">Select a Category</option>
//                                 {
//                                     getCategoriesByTicketTypeID.data?.ticketTypes?.map(categoty => (
//                                         <option value={categoty.id}>{categoty.name}</option>
//                                     ))
//                                 }
//                             </select>

//                             <button type="submit" className={`bg-orange-400 py-1 px-3 rounded text-white hover:bg-orange-500`}>Add Ticket</button>
//                         </form>
//                     </div>



//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CRUD








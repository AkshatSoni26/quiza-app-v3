import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { IDUpdater } from '../APIHandler'


const API = 'https://api.esaral.com/v2/general/get-related-quizes?id=47'

export default function DropDown() {

    const [DropDownHeading, setDropDownHeading] = useState()

    const [data, setData] = useState()

    useEffect(
        () => {
            axios.get(API).then(
                (response) => {
                    console.log(response.data.data.value)
                    setData(response.data.data.value)
                }
            )
        }, []
    )

    function IdManuplator(i) {
        IDUpdater(i)
    }

    return (

        !data ?

            <h1>Loading...</h1>

            :

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        (data.map(
                            (da, i) => {
                                return (
                                    <Dropdown.Item onClick={() => { IdManuplator(da.id) }}>{da.name}</Dropdown.Item>
                                )
                            }
                        ))
                    }
                    {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>
    )
}

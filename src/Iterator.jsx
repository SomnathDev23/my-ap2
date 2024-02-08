import React from 'react'
import { data } from './data'
const Iterator = () => {
    return (
        <div>
            {data.map((item) => (
                <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center', height: '100px', width: '500px' }}>
                    {item.name}<br />
                    {item.first_name}<br />
                    {item.last_name}<br />
                    {item.email}

                </div>
           ) )}
        </div>
    )
}

export default Iterator

import React from 'react'

const HomePage = ({display, IsInformation}) => {
return (
    <div>
        <h1>HomePage</h1>
        {
            IsInformation ? <h1>Welcome, {display}. Hope You have a Nice day yaa</h1> 
            : null
        }
    </div>
)

}

export default HomePage

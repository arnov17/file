import React from 'react'

const InputName = ({ user, SubmitName }) => {
  console.log(user)
  return (
    <div>
      <label htmlFor="name">Input Name:</label>
      <input type="text" name="name" value={user} onChange={SubmitName} />
    </div>
  )
}

export default InputName

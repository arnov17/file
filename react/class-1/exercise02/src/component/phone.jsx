import React from 'react'

const InputPhone = ({phone, submitPhone} ) => {
  console.log(phone)
  return (
    <div>
      <label htmlFor="name">Input Number Phone:</label>
      <input type="text" name="name" value={phone} onChange={submitPhone} />
    </div>
  )
}

export default InputPhone

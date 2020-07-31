import React from 'react'

const Alamat = ({addres, SubmitAddres}) => {
  console.log(addres)
  return (
    <div>
      <label htmlFor="name">Input Address :</label>
      <input type="text" name="name" value={addres} onChange={SubmitAddres} />
    </div>
  )
}

export default Alamat
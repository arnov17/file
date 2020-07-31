import React, { useState } from 'react'
// import React, { component} from 'react'
import InputName from './component/userInput'
import Alamat from './component/address'
import InputPhone from './component/phone'


// use function component
const App = () => {
  const [userName, setUserName] = useState('')
  const [SubmitAddres, setSubmitAddres] = useState('')
  const [userPhone, setPhone] = useState('') 
  const [isValiadation, setValidation] = useState(false)

  const SubmitName = (event) => {
    setUserName(event.target.value)
    CheckValidation()
  }

  const InputAddres = (event) => {
    setSubmitAddres(event.target.value)
    CheckValidation()
  }

  const SubmitPhone = (event) => {
    setPhone(event.target.value)
    CheckValidation()
  }


  const CheckValidation = () => {
    if(userName.length > 5 && SubmitAddres.length > 5 && userPhone.length > 8 && userPhone.length < 12 ) {
      setValidation(true)
    } else {
      setValidation(false)
    }
}

  return (
      <div className="app">
          <InputName  user={userName} SubmitName={SubmitName} />
          <Alamat addres={SubmitAddres} SubmitAddres={InputAddres}/>
          <InputPhone phone={userPhone} submitPhone={SubmitPhone}/>
          
          <button disabled={isValiadation ? false : true}>Submit</button>
      </div>
   )

  }

export default App
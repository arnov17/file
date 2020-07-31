import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [formRegister, setFormRegister] = useState({
        firstName : '',
        lastName : '',
        email : '',
        phoneNumber : '',
        password : ''
    })

    const handleChangeFormRegister = (event, param) => {
        setFormRegister({
            ...formRegister,
            [param] : event.target.value
        })
        console.log(formRegister)
        CheckValidation()
    }

    const [isValiadation, setValidation] = useState(false)
    const CheckValidation = () => {
        if(formRegister.firstName.length > 0 && formRegister.lastName.length > 0 && formRegister.phoneNumber.length > 8 && formRegister.password.length > 5 ) {
          setValidation(true)
        } else {
          setValidation(false)
        }
    }


    return(
        <div>
            <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First Name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Your First Name"
                            value={formRegister.firstName} onChange={(event) => handleChangeFormRegister(event, 'firstName')}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Last Name</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Your Last Name"
                            value={formRegister.lastName} onChange={(event) => handleChangeFormRegister(event, 'lastName')}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Your Email"
                        value={formRegister.email} onChange={(event) => handleChangeFormRegister(event, 'email')}/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" id="inputPhoneNumber" placeholder="Your Phone"
                        value={formRegister.phoneNumber} onChange={(event) => handleChangeFormRegister(event, 'phoneNumber')}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Your Password"
                        value={formRegister.password} onChange={(event) => handleChangeFormRegister(event, 'password')}/>
                    </div>
                    <Link to='/homepage'>
                        <button type="submit" className="btn btn-primary" disabled={isValiadation ? false : true}>Sign in</button>
                    </Link>
                <button type="submit" className="btn btn-warning"><Link to='/'>Log in</Link></button>

            </form>
        </div>
    )
}

export default SignUp
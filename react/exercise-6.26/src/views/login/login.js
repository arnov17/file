import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
    let db = {
        email: 'arnov.julian17@gmail.com',
        userName : 'arnov',
        password: '1234',
    }

    const [FormData, setFormData] = useState({
        email: '',
        password: '',
      })
    const [IsInformation, setIsInformation] = useState(false)
    
    const handleSignUpChange = (event, param) => {
          setFormData({
              ...FormData,
              [param] : event.target.value
          })
          console.log(FormData)
      }

      const checkInput = () => {
        if(FormData.email.length === 0 || FormData.password.length === 0) {
          alert('Email dan Password belum terisi')
        } else if(FormData.email === db.email && FormData.password === db.password) {
          console.log('log in sesuai')
          
        //   setIsInformation(true)
      } else {
          alert('email atau password salah')
      }
    }
    
    return(
        <div>
            <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Your Email"
                        value={FormData.email} onChange={(event) => handleSignUpChange(event, 'email')}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Your Password"
                        value={FormData.password} onChange={(event) => handleSignUpChange(event, 'password')}/>
                    </div>
                    <Link to='/homepage'>
                        <button type="submit" className="btn btn-primary" onClick={checkInput} >Log in</button>
                    </Link>
                <button type="submit" className="btn btn-warning"><Link to='/register'>Register</Link></button>

            </form>
        </div>
    )
}

export default LogIn
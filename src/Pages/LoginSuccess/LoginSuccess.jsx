import React, { useEffect, useState } from 'react'

function LoginSuccess() {
    const [loginDetails,setLoginDetails]=useState({})
    useEffect(() => {
      const formdata=localStorage.getItem("formdata")
      setLoginDetails(JSON.parse(formdata))
    }, [])
    
  return (
    <div className='d-flex align-items-center justify-content-center ' style={{height:"100vh"}}>
        <div className='border p-3 py-5 w-100 d-flex flex-column align-items-center justify-content-center' style={{maxWidth:"500px"}}>
            <h2 className='fs-2 text-success mb-3'>Thank you for login</h2>
            <p className='mb-2'>Your username is {loginDetails.username}</p>
            <p>Your password is {loginDetails.password}</p>
        </div>
    </div>
  )
}

export default LoginSuccess
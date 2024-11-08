import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css';
  import { CgEyeAlt } from "react-icons/cg";
  import { FiEyeOff } from "react-icons/fi";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { useDispatch } from 'react-redux';
  
 const Login = () => {
 //=================variable part start
 const [Email , setEmail]                            = useState ('')
 const [EmailError , setEmailError]                  = useState ('')
 const [password , setPassword]                      = useState ('')
 const [passwordError , setPasswordError]            = useState ('')
 const [show , setshow]                              = useState (false)
//    //=============== firebase variable part start 
  const Navigate = useNavigate ()
  
 //================ handel function part start
 const handelEmail = (e)=>{
 setEmail(e.target.value)
 setEmailError('')

 }
const handelPasword = (e)=>{
setPassword(e.target.value)   
setPasswordError('')

}
 //================ handel function part end

//============== function show part start
const handelshow = ()=>{
  setshow(!show)
   
}
//============== function show part end
//================ submit part start
 const handelsubmit = (e)=>{
  e.preventDefault()
  if(!Email){
   setEmailError('please enter your error')
  }
  if(!password){
   setPasswordError('please enter your error')
  }
  else{
  
  signInWithEmailAndPassword(auth, Email, password)
  .then((userCredential) => {
    const user= userCredential.user;
    if(userCredential.user.emailVerified == false){
      toast.success('🦄 please your varify Email', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
        Navigate('/')
        Dispatch(userdata(user))
    }
    else{
      toast.success('🦄 Login Succsse full', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
        console.log(user)

    }


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }

 }
 //================ submit part end

  return (
   <>
    <div className="container">
    
        <div className=' from_row flex justify-center items-center mt-[220px]'>
         <div className=' from_coll '>
            <h2 className=' text-3xl font-bold text-[#000]'> wellcom to back Login</h2>
            <form onSubmit={handelsubmit}>
          
            <label className=' text-[24px] font-bold mt-3 ' > Email</label>
            <br />
             <input onChange={handelEmail} className=' w-[350px] h-[55px] border-none border border-black mt-3 p-5 rounded-lg' type="text" placeholder=' enter your email' />
             <p className='font-bold mt-3 text-red-600'>{EmailError}</p>
             <br />
             <label className='text-[24px] font-bold mt-3'>Password</label>
              <br />
            <div className=' relative'>
            <CgEyeAlt onClick={handelshow} className=' absolute top-8 left-[320px]' />
            <FiEyeOff onClick={handelshow} className=' absolute top-8 left-[320px]' />

             <input onChange={handelPasword } className=' w-[350px] h-[55px] border-none border border-black mt-3 p-5 rounded-lg' type={show? 'text' : 'password'} placeholder=' enter your password' />
             <p className=' font-bold mt-3 text-red-600'> {passwordError}</p>
            </div>
             <button type='submit' className=' text-[16px] w-[350px] h-[55px] bg-green-600 hover:scale-105 transition mt-5 rounded-lg'>LOGIN</button>
             <br />
             <Link className=' text-[#fff] text-[20px] font-bold absolute' to='/ResetPass'> create have a new account <span className=' text-[px20] ml-1 text-[#000] font-bold '>ResetPass</span></Link>
             <Link className=' text-[#fff] text-[20px] font-bold absolute mt-10' to='/Register'> allredy have an use account <span className=' text-[px20] ml-1 text-[#000] font-bold '>Register</span></Link>



            </form>
                
         </div>
        </div>
    </div>
   
   </>
  )
}

export default Login
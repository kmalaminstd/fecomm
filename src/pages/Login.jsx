import React, { useEffect } from 'react'
import {BsGoogle, BsGithub} from 'react-icons/bs'
import { auth } from '../config/firebase.config'
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from 'firebase/auth'
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../redux/commerceSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const userInfo = useSelector(state => state.ecomm.userInfo)
  const googleSignInProvider= new GoogleAuthProvider()
  const githubSignInProvider= new GithubAuthProvider()
  const dispatch = useDispatch()


  const googleSignIn = ()=>{
    signInWithPopup(auth, googleSignInProvider)
    .then((user)=>{
      dispatch(addUser({
        _id: user.user.uid,
        name: user.user.displayName,
        email: user.user.email,
        image: user.user.photoURL
      }
      ));
      // console.log(user.user);
      // console.log(user.uid);
      toast.success('Sign in Successfull')
      setTimeout(()=>{
        navigate('/')
      },1500)
    })
    .catch((err)=>{
      toast.error("Sign in failed")
      console.log(err.message);
    })
  }

  const githubSignIn = ()=>{
    signInWithPopup(auth, githubSignInProvider)
    .then((res)=>{
      dispatch(addUser({
        _id: res.user.uid,
        name: res.user.displayName,
        email: res.user.email,
        image: res.user.photoURL
      }))

    })
    .catch((err)=>{
      console.log(err.message);
      toast.error('Sign in failed')
    })
  }

  const handleSignOut = ()=>{
    signOut(auth)
    .then((res)=>{
      toast.success("Sign out successfull")
      // console.log(res);
      navigate('/')
      dispatch(removeUser())
      
    })
    .catch((err)=>{
      toast.err("Something went wrong")
      console.log(err.message);
    })
  }
  // useEffect(()=>{
  //   console.log(userInfo);
  // },[userInfo])
  // console.log(userInfo);
  return (
    <>
      <div className='flex flex-col gap-10 items-center w-full my-10'>

        {
          !userInfo &&
          ( 
            <>
              <div onClick={googleSignIn} className="flex gap-2 items-center border-gray-400 border-[1px] py-3 px-8 cursor-pointer">
                <div className="text-orange-800">
                  <BsGoogle />
                </div>
                <div>
                  <p>
                    Sign in with Google
                  </p>
                </div>
              </div>

              <div onClick={githubSignIn} className="flex gap-2 items-center border-gray-400 border-[1px] py-3 px-8 cursor-pointer">
                <div className="text-black">
                  <BsGithub />
                </div>
                <div>
                  <p>
                    Sign in with Github
                  </p>
                </div>
              </div>
            </>
          )
        }

        {
          userInfo &&
          <button onClick={handleSignOut} className="bg-black px-10 py-3 text-white hover:bg-gray-[700] duration-300">Sign Out</button>
        }

      </div>
    </>
  )
}

export default Login
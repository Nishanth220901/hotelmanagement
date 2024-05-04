import React from 'react'
import { useAuth } from './Auth'


export default function RequriedAuth(props) {
    const auth = useAuth()
  if(auth.admin){
    return(<>{props.chilren}</>)
  }
  
}

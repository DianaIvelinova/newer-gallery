import React, { useState, useContext } from "react"
import { useUser }  from "../hooks/useUser"
import PrivateRoute from "../components/PrivateRoute";
import Image from "next/image";
 
//function Profile(props) {
const Profile = () => {
  const { user } = useUser()
 
  return (
    <>
      <div className="centered">
        <div className="block">
            <h1>Profile</h1>
            {user?.photoURL && <Image src={user.photoURL} alt="" />}
            <div><strong>Email:</strong> {user?.email}</div>
            <div><strong>Phone:</strong> {user?.phoneNumber}</div>
            <div><strong>Account type:</strong> {user?.claims?.admin ? "admin" : "regular"}</div>
            <br />
            <div><strong>Created:</strong> {user?.creationTime}</div>
            <div><strong>Last sign in:</strong> {user?.lastSignInTime}</div>
        </div>
      </div>
    </>
  )
}
 
export default PrivateRoute(Profile)

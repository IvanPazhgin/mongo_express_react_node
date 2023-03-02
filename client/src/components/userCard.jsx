import React, {useCallback, useContext} from "react";
import {EditUserForm} from "./editUserForm";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";

export const UserCard = ({ user }) => {
  const {request, loading} = useHttp()
  const {token} = useContext(AuthContext)

  const updateUser = useCallback(async (updatedUser) => {
    try {
      const fetched = await request(`/users/${user._id}`, 'PUT', {updatedUser}, {
        Authorization: `Bearer ${token}`
      })
    } catch (e) {}
  },[])

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <EditUserForm key = {user._id} user={user} updateUser={updateUser} loading={loading}/>
    </div>
  )
}
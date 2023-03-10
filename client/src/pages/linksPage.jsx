import React, {useCallback, useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/loader";
import {UsersList} from "../components/usersList";

export const LinksPage = () => {
  const [users, setUsers] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)

  const fetchUsers = useCallback(async () => {
    try {
      const fetched = await request('profile', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setUsers(fetched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => { fetchUsers() }, [fetchUsers])

  if (loading) return <Loader />

  return (
    <>
      {!loading && <UsersList users = {users} />}
    </>
  )
}
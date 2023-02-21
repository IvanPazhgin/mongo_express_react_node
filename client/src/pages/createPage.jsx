import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import { useNavigate } from 'react-router-dom'

export const CreatePage = () => {
  const history = useNavigate()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [user, setUser] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const pressHandler = async event => {
    // if (event.key === 'Enter') {
      try {
        // todo: переименовать generate в editingUser
        const data = await request('/profile/generate', 'POST', {from: user}, {
          Authorization: `Bearer ${auth.token}`
        })
        history(`/detail/${data.profile._id}`)
        // console.log(data)
      } catch (e) {}
    // }
  }

  return (
    <div className='row'>
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
        <div className="input-field">
          <input
            placeholder="Редактирование пользователя"
            id="user"
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            // onKeyPress={pressHandler}
          />
          <label htmlFor="user">Введите свои данные</label>

          <button className="btn yellow darken-4" onClick={pressHandler}>Сохранить</button>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from 'react';
import {Loader} from "./loader";

export const EditUserForm = ({ user, updateUser, loading }) => {
  const [data, setData] = useState({
    _id: user._id,
    userName: user.userName,
    surname: user.surname,
    email: user.email,
    password: user.password,
    gender: user.gender,
    photo: user.photo,
    registrationDate: new Date(user.registrationDate).toLocaleString()
  })

  const handleChange = ({target}) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(data) // отправляем запрос на сервер для обновления данных
  }

  if (loading) return <Loader/>

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">id пользователя</label>
        <input
          type="text"
          id="id"
          value={data._id}
          disabled='true'
        />
      </div>

      <div>
        <label htmlFor="userName">Имя пользователя</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={data.userName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="surname">Фамилия</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={data.surname}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          value={data.password}
          disabled='true'
        />
      </div>

      <div>
        <label htmlFor="gender">Пол</label>
        <select
          id="gender"
          name="gender"
          value={data.gender}
          onChange={handleChange}
        >
          <option value="">Выберите пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>

      <div>
        <label htmlFor="photo" style={{ marginRight: 5 }}>Фото</label>
        <input
          // style={{display: 'none'}}
          type="file"
          id="photo"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="registrationDate">Дата регистрации</label>
        <input
          type="text"
          id="registrationDate"
          value={data.registrationDate}
          disabled='true'
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={loading}>Обновить информацию</button>
    </form>
  )
}
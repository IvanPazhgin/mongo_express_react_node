import React from "react";
import {Link} from "react-router-dom";

export const UserList = ({ users }) => {
  if (!users.length) return <p className='center'>Пользователи отсутствуют</p>

  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Имя</th>
        <th>email</th>
        <th></th>
      </tr>
      </thead>

      <tbody>
      { users.map((user, index) => {
        return (
          <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/detail/${user._id}`}>Подробнее</Link>
            </td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}
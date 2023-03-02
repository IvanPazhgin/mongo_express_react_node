import React from "react"
import {Link} from "react-router-dom";

export const LinksList = ({ users }) => {
  if (!users.length) return <p className='center'>Пользователи отсутствуют</p>

  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Оригинальная</th>
        <th>Сокращенная</th>
        <th>Открыть</th>
      </tr>
      </thead>

      <tbody>
      { users.map((user, index) => {
        return (
          <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.from}</td>
            <td>{user.to}</td>
            <td>
              <Link to={`/detail/${user._id}`}>Открыть</Link>
            </td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}
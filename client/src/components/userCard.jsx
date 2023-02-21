import React from "react"

export const UserCard = ({ user }) => {
  return (
    <>
      <h2>Пользователь</h2>
      {/*<p>Ваша ссылка: <a href={user.to} target='_blank' rel='noopener noreferrer'>{user.to}</a></p>*/}
      <p>Ваша ссылка: {user.to}</p>
      <p>Дата создания: <strong>{new Date(user.date).toLocaleDateString()}</strong></p>
    </>
  )
}
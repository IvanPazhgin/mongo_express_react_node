import React from "react"

export const LinkCard = ({ profile }) => {
  return (
    <>
      <h2>Пользователь</h2>
      {/*<p>Ваша ссылка: <a href={user.to} target='_blank' rel='noopener noreferrer'>{user.to}</a></p>*/}
      <p>Ваша ссылка: {profile.to}</p>
      <p>Дата создания: <strong>{new Date(profile.date).toLocaleDateString()}</strong></p>
    </>
  )
}
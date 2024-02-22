import React from 'react'
import style from './style.module.css'
const Nav = () => {
  return (
    <div className={style.navbar}>
      <img className={style.logo}  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="netflixlogo" />
      <img className={style.avatar} src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="netavatar" />
    </div>
  )
}

export default Nav

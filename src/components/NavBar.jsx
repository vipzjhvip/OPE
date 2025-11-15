import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar(){return (<div><NavLink to='/'>首页</NavLink><NavLink to='/task'>任务</NavLink><NavLink to='/flow'>流水</NavLink></div>)}
import '../styles/global.css'

import React, { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }

    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className="bg-gray-200/20 rounded-md p-[8px] inline-flex">{
      <button
        key={theme}
        className=''
        onClick={toggleTheme}>
        {theme === 'light' ? <IoSunnyOutline /> : <IoMoonOutline />}
      </button>
    }</div>) : (<div />)
}

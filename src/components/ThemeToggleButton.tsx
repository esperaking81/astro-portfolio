import '../styles/global.css'

import React, { useEffect, useState } from "react";
import { IoSunny, IoMoon } from 'react-icons/io5'

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
    <div className="bg-gray-200/20 rounded-sm p-[4px] inline-flex ">{
      <button
        key={theme}
        className='link'
        onClick={toggleTheme}>
        {theme === 'light' ? <IoSunny /> : <IoMoon />}
      </button>
    }</div>) : (<div />)
}

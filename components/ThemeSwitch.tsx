'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

/**
 * Theme toggle modelled on Hugo PaperMod (the theme lilianweng.github.io uses):
 * a single icon button that flips between light and dark, bound to Alt + T.
 *
 * There is deliberately no "system" entry in the UI. System preference is the
 * default until the reader clicks once; from then on their choice is explicit
 * and persisted. That is exactly how PaperMod behaves.
 *
 * The moon shows in light mode (click to go dark), the sun in dark mode.
 */

const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // The server cannot know the resolved theme, so render a fixed-size
  // placeholder until we are on the client. Keeps the header from shifting.
  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  // PaperMod binds this to the accesskey attribute, but that trips
  // jsx-a11y/no-access-key -- access keys can silently collide with screen
  // reader shortcuts. A listener gives the same Alt + T and lets us stay out
  // of the way while the reader is typing.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.altKey || e.ctrlKey || e.metaKey || e.key.toLowerCase() !== 't') return
      const el = e.target as HTMLElement | null
      if (el?.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el?.tagName ?? '')) {
        return
      }
      e.preventDefault()
      setTheme(isDark ? 'light' : 'dark')
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isDark, setTheme])

  return (
    <button
      id="theme-toggle"
      type="button"
      title="(Alt + T)"
      /* Neutral until mount: the server cannot know the resolved theme. */
      aria-label={
        mounted ? (isDark ? 'Switch to light theme' : 'Switch to dark theme') : 'Toggle theme'
      }
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="hover:text-primary-500 dark:hover:text-primary-400 flex cursor-pointer items-center justify-center bg-transparent p-0 text-gray-900 dark:text-gray-100"
    >
      {mounted ? isDark ? <Sun /> : <Moon /> : <span className="block h-6 w-6" />}
    </button>
  )
}

export default ThemeSwitch

'use client'

import { ThemeProvider } from 'next-themes'
const defaultTheme = require('tailwindcss/defaultTheme')
export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem>{children}</ThemeProvider>
}
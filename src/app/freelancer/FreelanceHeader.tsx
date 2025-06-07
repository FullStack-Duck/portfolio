'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function FreelanceHeader() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="w-full bg-white/80 dark:bg-neutral-900 backdrop-blur shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <span className="text-chelsea text-lg sm:text-xl font-bold tracking-wide cursor-pointer hover:text-gold transition-colors">
            Nicolas Sandrin
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#contact">
            <Button size="sm" className="bg-gold text-black hover:bg-chelsea hover:text-white">
              Contact
            </Button>
          </Link>
          <div className="flex items-center gap-2 border-l border-neutral-300 dark:border-neutral-700 pl-4">
            {theme === 'dark' ? <Moon className="w-4 h-4 text-white" /> : <Sun className="w-4 h-4 text-black" />}
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

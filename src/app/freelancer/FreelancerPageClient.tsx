'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Toggle } from '@/components/ui/toggle'
import FreelanceHero from './FreelanceHero'
import FreelancerTechStack from './FreelancerTechStack'
import ExperienceSection from './ExperienceSection'
import ContactSection from './ContactSection'
import EducationSection from './EducationSection'
import FreelanceHeader from './FreelanceHeader'
import LookingForSection from './LookingForSection'

export default function FreelancerPage() {
  const router = useRouter()
  const [profile, setProfile] = useState<'freelancer' | 'business'>('freelancer')

  useEffect(() => {
    if (profile === 'business') {
      router.push('/business')
    }
  }, [profile, router])

  return (
    <><FreelanceHeader />
    <main className="min-h-screen w-full">
          <div className="w-full flex justify-end p-4">
              <Toggle
                  pressed={profile === 'business'}
                  onPressedChange={() => setProfile(profile === 'freelancer' ? 'business' : 'freelancer')}
              >
                  {profile === 'freelancer' ? 'Freelancer View' : 'Switch to Business'}
              </Toggle>
          </div>

          <FreelanceHero />
          <FreelancerTechStack />
          <ExperienceSection />
          <EducationSection />
          <LookingForSection />
          <ContactSection />
      </main></>
  )
}

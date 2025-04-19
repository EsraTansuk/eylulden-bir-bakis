import React from 'react'
import { AboutSideWidget, SocialMediaSideWidget, InstagramWidget } from '../stickMenuWidget'

export const StickySideMenu = () => {
  return (
    <div className="top-24 left-0 w-full space-y-8">
      <AboutSideWidget />
      <SocialMediaSideWidget />
      <InstagramWidget />
    </div>
  )
}

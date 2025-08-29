import React from 'react'
import { NavLink } from 'react-router-dom'
import { Protect, SignOutButton, useClerk, useUser } from '@clerk/clerk-react'

import {
  HiHome,
  HiPencil,
  HiHashtag,
  HiPhotograph,
  HiScissors,
  HiDocumentText,
  HiUserGroup
} from 'react-icons/hi';
import { CiEraser, CiLogout } from 'react-icons/ci';
import profileImg from '../assets/profile_img_1.png';

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: HiHome },
  { to: '/ai/write-article', label: 'Write Article', Icon: HiPencil },
  { to: '/ai/blog-titles', label: 'Blog Titles', Icon: HiHashtag },
  { to: '/ai/generate-images', label: 'Generate Images', Icon: HiPhotograph },
  { to: '/ai/remove-background', label: 'Remove Background', Icon: CiEraser },
  { to: '/ai/remove-object', label: 'Remove Object', Icon: HiScissors },
  { to: '/ai/review-resume', label: 'Review Resume', Icon: HiDocumentText },
  { to: '/ai/community', label: 'Community', Icon: HiUserGroup },
]

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { openUserProfile } = useClerk(); // ✅ added
  const userName = user?.fullName || 'User Profile';

  const isVisible = true;

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${isVisible ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      style={{
        border: '2px solid white',
        backgroundColor: 'white',
        zIndex: 1000
      }}
    >
      <div className='my-7 w-full px-4'>
        {/* User Profile Section */}
        <div className="text-center mb-6">
          <img
            src={user?.imageUrl || profileImg}
            alt="User avatar"
            className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-gray-200 shadow-sm"
          />
          <h1 className="mt-2 text-center text-gray-800 font-medium text-sm">
            {userName}
          </h1>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          <div className="text-xs text-gray-500 mb-2">
            Navigation Items ({navItems.length})
          </div>
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/ai'}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3 py-2.5 flex items-center gap-3 rounded-lg transition-all duration-200 ${isActive
                  ? 'bg-gradient-to-r from-[#3c81F6] to-[#9234EA] text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {Icon ? (
                    <Icon
                      className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`}
                    />
                  ) : (
                    <div className="w-5 h-5 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
                      {label.charAt(0)}
                    </div>
                  )}
                  <span className="font-medium text-sm">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Sign Out */}
      <div className='w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between'>
        <div
          onClick={openUserProfile} // ✅ fixed
          className='flex gap-2 items-center cursor-pointer'
        >
          <img
            src={user?.imageUrl || profileImg}
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h1 className='text-sm font-medium text-gray-800'>{userName}</h1>
            <p className='text-xs text-gray-500'>
              <Protect plan='premium' fallback="Free">Premium</Protect> Plan
            </p>
          </div>
        </div>

        {/* ✅ Proper SignOutButton usage */}
        <SignOutButton>
          <CiLogout className="cursor-pointer" />
        </SignOutButton>
      </div>
    </div>
  )
}

export default Sidebar

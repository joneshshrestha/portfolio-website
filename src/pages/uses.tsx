import React from 'react'
import Layout from '../components/Layout'

const UsesPage = () => {
  return (
    <Layout>
      <div className='space-y-12'>
        <section>
          <h1 className='text-2xl font-medium tracking-tight mb-6'>Uses</h1>
        </section>

        <section>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Left Column */}
            <div className='space-y-10'>
              <div>
                <h2 className='text-xl font-medium text-gray-900 dark:text-gray-100 mb-4'>
                  Development Tools
                </h2>
                <div className='space-y-3'>
                  <div className='flex items-baseline'>
                    <a
                      href='https://code.visualstudio.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      Visual Studio Code
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Text Editor
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <a
                      href='https://brew.sh/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      Homebrew
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Package Manager
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <a
                      href='https://iterm2.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      iTerm2
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Terminal Emulator
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <a
                      href='https://git-scm.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      Git
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Version Control
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='text-xl font-medium text-gray-900 dark:text-gray-100 mb-4'>
                  Softwares
                </h2>
                <div className='space-y-3'>
                  <div className='flex items-baseline'>
                    <a
                      href='https://transmissionbt.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      Transmission
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Bittorrent Client
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <a
                      href='https://www.telegram.org/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      Telegram
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Instant Messaging
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <a
                      href='https://www.zoho.com/mail/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      Zoho Mail
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Email Service
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <a
                      href='https://brave.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      Brave
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Web Browser
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <a
                      href='https://www.videolan.org/vlc/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      VLC
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Media Player
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className='space-y-10'>
              <div>
                <h2 className='text-xl font-medium text-gray-900 dark:text-gray-100 mb-4'>
                  Services
                </h2>
                <div className='space-y-3'>
                  <div className='flex items-baseline'>
                    <a
                      href='https://bitwarden.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      Bitwarden
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Password Manager
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <a
                      href='https://shop.ohodomain.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      OhoDomain
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Domain Provider
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <a
                      href='https://github.com/joneshshrestha/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      GitHub
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      My code repository
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <a
                      href='https://open.spotify.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      Spotify Web
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Music Player
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <a
                      href='https://www.cloudflare.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-light dark:text-primary-dark hover:underline font-medium'
                    >
                      Cloudflare
                    </a>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Email hosting
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='text-xl font-medium text-gray-900 dark:text-gray-100 mb-4'>
                  System
                </h2>
                <div className='space-y-3'>
                  <div className='flex items-baseline'>
                    <span className='font-medium text-gray-900 dark:text-gray-100'>
                      Model
                    </span>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      MacBook Air 2020
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <span className='font-medium text-gray-900 dark:text-gray-100'>
                      External Monitor
                    </span>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      HP EliteDisplay E232
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <span className='font-medium text-gray-900 dark:text-gray-100'>
                      SSD
                    </span>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Apple SSD AP0256Q
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <span className='font-medium text-gray-900 dark:text-gray-100'>
                      GPU
                    </span>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Apple M1 8-Core
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <span className='font-medium text-gray-900 dark:text-gray-100'>
                      Processor
                    </span>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Apple M1
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <span className='font-medium text-gray-900 dark:text-gray-100'>
                      OS
                    </span>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      macOS Ventura
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <span className='font-medium text-gray-900 dark:text-gray-100'>
                      RAM
                    </span>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      8 GB
                    </span>
                  </div>
                  <div className='flex items-baseline'>
                    <span className='font-medium text-gray-900 dark:text-gray-100'>
                      Keyboard
                    </span>
                    <span className='mx-2 text-gray-500 dark:text-gray-400'>
                      -
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>
                      E-YOOSO 60% Mechanical
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default UsesPage

export const Head = () => <title>Uses - Jonesh Shrestha</title>

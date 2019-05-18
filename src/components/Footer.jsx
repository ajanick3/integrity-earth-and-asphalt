import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/pro-regular-svg-icons'
import {
  faFacebook,
  faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons'

const links = [
  {
    key: 'facebook',
    label: 'facebook',
    icon: <FontAwesomeIcon icon={faFacebook} />,
    href: 'https://www.facebook.com/Integrityearthandasphalt',
  },
  {
    key: 'messenger',
    label: 'facebook messenger',
    icon: <FontAwesomeIcon icon={faFacebookMessenger} />,
    href: 'https://m.me/Integrityearthandasphalt',
  },
  {
    key: 'email',
    label: 'Email',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    href:
      'mailto:integrityearthandasphalt@gmail.com?subject=Integrity%20Earth%20and%20Asphalt',
  },
  {
    key: 'phone',
    label: 'Phone',
    icon: <FontAwesomeIcon icon={faPhone} />,
    href: 'tel:+1-231-499-6598',
  },
]

const Footer = () => {
  return (
    <div id='footer'>
      <div className='inner'>
        <ul className='icons'>
          {links.map((link) => (
            <li key={link.key}>
              <a href={link.href} className='icon' target='_blank'>
                <span>{link.icon}</span>
                <span className='label'>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <ul className='copyright'>
          <li>
            <a href='http://html5up.net'>HTML5 UP</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

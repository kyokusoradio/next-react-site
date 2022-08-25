-stimport styles from 'styles/social.module.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
imprt {
  faTwitter,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brandsvg-icons'

export default function Social() {
  return (
    <ul className={styles.list}>
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className='sr-only'>Twitter</span>
        </a>
      </li>
    </ul>
  )
}
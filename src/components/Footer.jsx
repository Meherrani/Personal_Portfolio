import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed &amp; built by {profile.name} · {new Date().getFullYear()}
      </p>
    </footer>
  )
}

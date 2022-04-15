import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'

export default function Home(props) {
  const { user, login } = useAuth()
  return (
    <div>
      {user ? (
        <>
          <CookieStandAdmin />
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

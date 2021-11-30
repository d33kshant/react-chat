import Login from './screens/Login'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import app from './firebase'
import Loading from './screens/Loading'
import Home from './screens/Home'

const App = () => {

	const [user, loading] = useAuthState(getAuth(app))

	if (loading) return <Loading />
	if (user) {
		console.log(user)
		return <Home user={user} />
	}

	return (
		<Login />
	)
}

export default App
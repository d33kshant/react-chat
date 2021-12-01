import Login from './screens/Login'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import { getFirestore, setDoc, doc, serverTimestamp} from 'firebase/firestore'
import app from './firebase'
import Loading from './screens/Loading'
import Home from './screens/Home'
import { useEffect } from 'react'

const App = () => {

	const [user, loading] = useAuthState(getAuth(app))

	useEffect(() => {
		if(user) {
			setDoc(doc(getFirestore(app), 'users', user.uid), {
				name: user.displayName,
				email: user.email,
				avatar: user.photoURL,
				uid: user.uid,
				lastSeen: serverTimestamp()
			}, {merge: true}).catch(()=>{})
		}
	}, [user])

	if (loading) return <Loading />
	if (user) return <Home user={user} />

	return <Login />
}

export default App
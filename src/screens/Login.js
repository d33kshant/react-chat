import styled from 'styled-components'
import Button from '../components/Button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import app from '../firebase'

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px;
	box-sizing: border-box;
`

const loginWithGoogle = () => {
	const auth = getAuth(app)
	const provider = new GoogleAuthProvider()
	signInWithPopup(auth, provider).catch(console.log)
}

const Login = ()=> {
	return (
		<Container>
			<Button onClick={loginWithGoogle} >Login with Google</Button>
		</Container>
	)
}

export default Login
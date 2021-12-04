import styled from 'styled-components'
import Button from '../components/Button'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import app from '../firebase'

const Container = styled.div`
	width: 100%;
	height: 100%;
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 16px;
	box-sizing: border-box;
`

const WelcomeImage = styled.img`
	/* margin-bottom: 16px; */
	height: 256px;
`

const loginWithGoogle = () => {
	const auth = getAuth(app)
	const provider = new GoogleAuthProvider()
	signInWithPopup(auth, provider).catch(console.log)
}

const WelcomeTitle = styled.p`
	margin: 0;
	font-size: medium;
	text-align: center;
	font-weight: 600;
`

const WelcomeSubtitle = styled.p`
	color: gray;
	margin: 0;
	margin-bottom: 32px;
	max-width: 280px;
	text-align: center;
`

const Login = ()=> {
	return (
		<Container>
			<WelcomeImage src="/login.png" />
			<WelcomeTitle>Welcome to react-chat</WelcomeTitle>
			<WelcomeSubtitle>a place where you can chat one to one with your friend.</WelcomeSubtitle>
			<Button style={{marginBottom: '64px'}} onClick={loginWithGoogle} >Login with Google</Button>
		</Container>
	)
}

export default Login
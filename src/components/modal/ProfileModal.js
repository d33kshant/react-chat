import React from 'react'
import styled from 'styled-components'
import { getAuth } from 'firebase/auth'
import Button from '../Button'
import Header from '../Header'
import IconButton from '../IconButton'
import Background from './Background'
import app from '../../firebase'
import HeaderTitle from '../Title'
import Container from './Container'


const Avatar = styled.img`
	width: 96px;
	border-radius: 50%;
	margin-top: 16px;
	box-sizing: border-box;
	border: 1px solid lightgray;
`

const Title = styled.p`
	font-family: inherit;
	font-size: 24px;
	font-weight: 600;
	margin: 0 32px;
`

const Subtitle = styled.p`
	margin: 0;
	color: gray;
	font-family: inherit;
	margin-bottom: 16px;
`

const LogOut = styled(Button)`
	background: #ed4956 ;
	margin-bottom: 16px;

	:hover {
		background: #962a32 !important;
	}
`

const logout = () => {
	getAuth(app).signOut().catch(()=>{})
}

const ProfileModal = ({user, onClose}) => {

	return (
		<Background onClick={onClose}>
			<Container onClick={event=>event.stopPropagation()}>
				<Header>
					<HeaderTitle style={{margin: 0, padding: '0 16px',fontWeight:600}}>Profile</HeaderTitle>
					<IconButton onClick={onClose}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
					</IconButton>
				</Header>
				<Avatar src={user.photoURL} />
				<Title>{user.displayName}</Title>
				<Subtitle>{user.email}</Subtitle>
				<LogOut onClick={logout}>Log Out</LogOut>
			</Container>
		</Background>
	)
}

export default ProfileModal
import React, { useState } from 'react'
import styled from 'styled-components'
import Chats from '../components/Chats'
import Contacts from '../components/Contacts'
import Header from '../components/Header'
import IconButton from '../components/IconButton'

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	overflow: hidden;
`

const Home = ({user}) => {

	const [screen, setScreen] = useState(0)

	return (
		<Container>
			<Contacts style={{transform: `translateX(-${(screen)*100}%)`}} >
				<Header>
					<p style={{margin: 0, padding: '0 16px',fontWeight:600}}>{user.email}</p>
					<IconButton onClick={()=>setScreen(1)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
					</IconButton>
				</Header>
				<p style={{flex: 1}} >This is Contacts List</p>
			</Contacts>
			<Chats style={{transform: `translateX(-${(screen)*100}%)`}}>
				<Header>
					<IconButton onClick={()=>setScreen(0)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><polyline points="15 18 9 12 15 6"/></svg>
					</IconButton>
					<p style={{margin: 0, padding: '0 16px',fontWeight:600}}>Other User</p>
					<IconButton>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
					</IconButton>
				</Header>
				<p style={{flex: 1}} >This is Chat Screen</p>
			</Chats>
		</Container>
	)
}

export default Home
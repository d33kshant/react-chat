import { collection, getDocs, getFirestore, limit, orderBy, query, where } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import styled from 'styled-components'
import app from '../firebase'
import ContactSkeleton from './ContactSkeleton'

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;
	background: white;

	:hover {
		background: rgba(0, 0, 0, 0.05);
	}
`

const Avatar = styled.img`
	padding: 12px;
	border-radius: 50%;
	width: 64px;
	box-sizing: border-box;
`

const Info = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	height: 64px;
	justify-content: center;
`

const Title = styled.p`
	margin: 0;
	font-size: 16px;
`

const Subtitle = styled.p`
	margin: 0;
	color: gray;
`

const Contact = ({ room, user, setTitle, onClick }) => {
	
	const [ userSnapshot, loading ] = useCollection(query(collection(getFirestore(app), 'users'), where('email', '==', user)))
	const [subtitle, setSubtitle] = useState('Loading...')

	useEffect(() => {
		getDocs(query(collection(getFirestore(app), 'rooms', room, 'chats'), orderBy('time', 'desc'), limit(1)))
		.then(res=>{
			if(res.docs.length > 0) {
				const chat = res.docs[0].data()
				if(chat.author === user){
					setSubtitle(res.docs[0].data().body)
				}else { setSubtitle(`Me: ${res.docs[0].data().body}`) }
			}else { setSubtitle(`Tap to start chat.`) }
		})
	}, [room, user])

	return (
		<>
			{loading ? 
				<ContactSkeleton />
			: 
				<Container title={userSnapshot.docs[0].data().name} onClick={()=>{onClick(); setTitle(userSnapshot.docs[0].data().name)}}>
					<Avatar src={userSnapshot.docs[0].data().avatar} />
					<Info>
						<Title>{userSnapshot.docs[0].data().name}</Title>
						<Subtitle>{subtitle}</Subtitle>
					</Info>
				</Container>
			}
		</>
	)
}

export default Contact
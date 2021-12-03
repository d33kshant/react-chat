import { collection, doc, getDoc, getDocs, getFirestore, query, where } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import app from '../../firebase'
import Button from "../Button"
import Header from "../Header"
import IconButton from "../IconButton"
import Background from "./Background"
import Container from "./Container"

const Delete = styled(Button)`
	background: #ed4956 ;
	margin: 0 8px;
	width: calc(100% - 16px);
	min-width: 190px;
	margin-bottom: 8px;

	:hover {
		background: #962a32 !important;
	}
`

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px;
	box-sizing: border-box;
	gap: 4px;
`

const Avatar = styled.img`
	border-radius: 50%;
	width: 96px;
	box-sizing: border-box;
	border: 1px solid lightgray;
`
const Title = styled.p`
	margin: 0;
	font-size: 18px;
	font-weight: 600;
`

const Subtitle = styled.p`
	margin: 0;
	color: gray;
`

const DummyAvatar = styled.div`
	width: 96px;
	height: 96px;
	border-radius: 50%;
	background: lightgray;
`

const DummyTitle = styled.div`
	width: 100px;
	height: 14px;
	margin: 5px 0;
	background: lightgray;
`

const DummySubtitle = styled.div`
	width: 150px;
	height: 14px;
	margin: 3px 0;
	background: lightgray;
`

const ChatInfoModal = ({ room, self, onClose, onAction}) => {
	
	const [user, setUser] = useState(null)

	useEffect(() => {
		const firestore = getFirestore(app)
		getDoc(doc(firestore, 'rooms', room)).then(docRef=>{
			const { users } = docRef.data()
			const email = users.filter(user=>user!==self)[0]
			getDocs(query(collection(firestore, 'users'), where('email', '==', email))).then(docsRef=>{
				const data = docsRef.docs[0].data()
				if(data) setUser(data)
			})
		})
	}, [room, self])

	return (
		<Background onClick={onClose}>
			<Container style={{minWidth: '206px'}} onClick={event=>event.stopPropagation()}>
				<Header>
					<Title style={{margin: 0, padding: '0 16px',fontWeight:600}}>Info</Title>
					<IconButton onClick={onClose}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
					</IconButton>
				</Header>
				{user ? 
				<Card>
					<Avatar src={user.avatar} />
					<Title>{user.name}</Title>
					<Subtitle>{user.email}</Subtitle>
				</Card> : 
				<Card>
					<DummyAvatar></DummyAvatar>
					<DummyTitle></DummyTitle>
					<DummySubtitle></DummySubtitle>
				</Card>
				}
				<Delete onClick={()=>{onClose();onAction()}}>Delete Chats For Both</Delete>
			</Container>
		</Background>
	)
}

export default ChatInfoModal
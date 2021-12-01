import { collection, getFirestore, orderBy, query } from '@firebase/firestore'
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import styled from 'styled-components'
import app from '../firebase'
import Chat from './Chat'

const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	box-sizing: border-box;
	padding: 0 16px;
	gap: 8px;
`

const Space = styled.div`
	width: 100%;
	height: 8px;
`

const ChatList = ({ room, self }) => {

	const [chats, loading, error] = useCollection(query(collection(getFirestore(app), 'rooms', room, 'chats'), orderBy('time')))

	return (
		<Container>
			{
				error ? 'Ooops Something Went Wrong' :
				loading ? 
				'Loading' :
				chats ? 
				chats.docs.map((doc, index)=>{
					const {body, author, time} = doc.data()
					return <Chat key={index} self={author===self} time={time ? time.toDate().toDateString(): 'sending..'}>{body}</Chat>
				}) : 'Ooops'
			}
			<Space>{/* Just for some extra bottom spacing */}</Space>
		</Container>
	)
}

export default ChatList
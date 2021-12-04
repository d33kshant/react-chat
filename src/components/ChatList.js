import { collection, getFirestore, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useRef } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import styled from 'styled-components'
import app from '../firebase'
import Chat from './Chat'
import EmptyChats from './EmptyChats'

const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	box-sizing: border-box;
	padding: 0 8px;
	gap: 8px;
	flex: 1;
`

const Space = styled.div`
	width: 100%;
`

const ChatList = ({ room, self }) => {

	const [chats, loading, error] = useCollection(query(collection(getFirestore(app), 'rooms', room, 'chats'), orderBy('time', 'desc')))
	const endRef = useRef()

	useEffect(()=>{
		if(chats){
			const timeout = setTimeout(()=>{				
				endRef.current.scrollIntoView({ behavior: "smooth" })
				clearTimeout(timeout)
			}, 500)
		}
	}, [chats])

	return (
		<Container>
			<Space ref={endRef}>{/* Just for some extra spacing */}</Space>
			{
				error ? 'Ooops Something Went Wrong' :
				loading ? 
				'Loading' :
				chats.docs.length > 0 ? 
				chats.docs.map((doc, index)=>{
					const {body, author, time} = doc.data()
					return <Chat key={index} self={author===self} time={time ? time.toDate().toDateString(): 'sending..'}>{body}</Chat>
				}) : <EmptyChats />
			}
			<Space >{/* Just for some extra spacing */}</Space>
		</Container>
	)
}

export default ChatList
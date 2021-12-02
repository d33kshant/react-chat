import { addDoc, collection, getDocs, getFirestore, query, where, serverTimestamp, orderBy, setDoc, doc } from '@firebase/firestore'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Chats from '../components/Chats'
import Contact from '../components/Contact'
import Contacts from '../components/Contacts'
import Header from '../components/Header'
import Input from '../components/Input'
import IconButton from '../components/IconButton'
import ProfileModal from '../components/modal/ProfileModal'
import Title from '../components/Title'
import app from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import ContactSkeleton from '../components/ContactSkeleton'
import ChatList from '../components/ChatList'
import NewChatModal from '../components/modal/NewChatModal'
import ErrorModal from '../components/modal/ErrorModal'

const Home = ({ user }) => {

	const [screen, setScreen] = useState(0)
	const [profileModal, setProfileModal] = useState(false)
	const [newChatModal, setNewChatModal] = useState(false)
	const [errorModal, setErrorModal] = useState(false)
	const [room, setRoom] = useState(null)
	const [title, setTitle] = useState('react-chat')

	const inputRef = useRef()

	const [rooms, loadingRooms, error] = useCollection(query(collection(getFirestore(app), 'rooms'), where('users', 'array-contains', user.email), orderBy('lastUpdate', 'desc')))

	const createChat = async (email) => {
		const valid = await emailExist(email) && !(await chatExist(email)) && email !== user.email
		if (valid) {
			await addDoc(collection(getFirestore(app), 'rooms'), {
				users: [user.email, email],
				lastUpdate: serverTimestamp(),
			})
		} else {
			setErrorModal(true)
		}
	}

	const chatExist = async (other) => {
		// return !!rooms?.docs.find(room => room.data().users.find(user => user !== other)?.length > 0)
		const result = await getDocs(query(collection(getFirestore(app), 'rooms'), where('users', 'array-contains', user.email)))
		return result.docs.filter(doc=>{
			const { users } = doc.data()
			return users.indexOf(other) !== -1
		}).length > 0
	}

	const emailExist = async (email) => {
		const result = await getDocs(query(collection(getFirestore(app), 'users'), where('email', '==', email)))
		return result.size > 0
	}

	const sendText = async () => {
		const text = inputRef.current.value.trim()
		inputRef.current.value = ''

		if(!text) return

		const data = {
			body: text,
			author: user.email,
			time: serverTimestamp()
		}
		const firestore = getFirestore(app)
		await addDoc(collection(firestore,  'rooms', room, 'chats'), data)
		await setDoc(doc(firestore, 'rooms', room), { lastUpdate: data.time }, {merge: true})
	}

	return (
		<>
			<Container>
				<Contacts style={{ transform: `translateX(-${(screen) * 100}%)` }} >
					<Header>
						<ProfileButton onClick={() => setProfileModal(true)} >
							<SmallAvatar width="24" src={user.photoURL} />
						</ProfileButton>
						<Title>react-chat</Title>
						<IconButton onClick={()=>setNewChatModal(true)} >
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
						</IconButton>
					</Header>
					<ContactList>
						{loadingRooms ? <ContactSkeleton /> : rooms ? rooms.docs.map((doc, index) => <Contact setTitle={setTitle} key={index} room={doc.id} user={doc.data().users.find(email => email !== user.email)} onClick={()=>{setRoom(doc.id);setScreen(1)}} />) : `${error}`}
					</ContactList>
				</Contacts>
				<Chats style={{ transform: `translateX(-${(screen) * 100}%)` }}>
					<Header>
						<IconButton onClick={() => setScreen(0)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><polyline points="15 18 9 12 15 6" /></svg>
						</IconButton>
						<Title>{title}</Title>
						<IconButton>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
						</IconButton>
					</Header>
					{room && <ChatList room={room} self={user.email} />}
					<Input to={inputRef} onSubmit={sendText} />
				</Chats>
			</Container>
			{profileModal && <ProfileModal user={user} onClose={() => setProfileModal(false)} />}
			{newChatModal && <NewChatModal onSubmit={(email)=>{createChat(email); setNewChatModal(false)}} onClose={()=>setNewChatModal(false)} />}
			{errorModal && <ErrorModal onClose={()=>setErrorModal(false)} />}
		</>
	)
}

export default Home

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	overflow: hidden;
`

const ContactList = styled.div`
	width: 100%;
	overflow-y: auto;
	height: calc(100% - 48px);
`

const ProfileButton = styled(IconButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	font-size: 16px;
	font-family: inherit;
	gap: 8px;
`

const SmallAvatar = styled.img`
	box-sizing: border-box;
	border: 1px solid lightgray;
	border-radius: 50%;
`
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Header from '../Header'
import IconButton from '../IconButton'
import Title from '../Title'
import Background from './Background'
import Container from './Container'

const Input = styled.input`
	padding: 8px 0;
	font-family: inherit;
	font-size: 16px;
	border: none;
	outline: none;
	background: none;
	min-width: 200px;
`

const InputField = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 12px 16px;
	box-sizing: border-box;
`

const Label = styled.p`
	margin: 0;
	font-family: inherit;
	font-weight: 600;
`

const Submit = styled(Button)`
	width: calc(100% - 20px);
`

const NewChatModal = ({onSubmit, onClose}) => {
	
	const inputRef = useRef()

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return (
		<Background onClick={onClose}>
			<Container onClick={event=>event.stopPropagation()}>
				<Header>
					<Title style={{margin: 0, padding: '0 16px',fontWeight:600}}>New Chat</Title>
					<IconButton onClick={onClose}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
					</IconButton>
				</Header>
				<InputField>
					<Label>To: </Label>
					<Input ref={inputRef} placeholder="example@email.com" />
				</InputField>
				<Submit onClick={()=>{onSubmit(inputRef.current.value)}}>Start</Submit>
			</Container>
		</Background>
	)
}

export default NewChatModal
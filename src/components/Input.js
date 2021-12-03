import React from 'react'
import styled from 'styled-components'
import IconButton from './IconButton'

const Container = styled.div`
	border-top: 1px solid lightgray;
	/* border-radius: 32px; */
	width: 100%;
	height: 52px;
	position: fixed;
	box-sizing: border-box;
	display: flex;
	background: white;
	bottom: 0;
	padding: 12px 0;
`

const InputBox = styled.input`
	flex: 1;
	border: none;
	outline: none;
	padding: 0 16px;
	font-size: 14px;
	font-family: inherit;
`

const SendButton = styled(IconButton)`
	:hover {
		svg {
			stroke: #0095f6;
		}
	}
`

const Input = ({ onSubmit, to, ...props}) => {
	return (
		<>
		<div style={{height: '52px'}}></div>
		<Container >
			<InputBox ref={to} {...props} placeholder="Type something here" />
			<SendButton onClick={onSubmit}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
			</SendButton>
		</Container>
		</>
	)
}

export default Input
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	transition: transform ease 0.3s;
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Chats = ({children, ...props}) => {
	return (
		<Container {...props} >
			{children}
		</Container>
	)
}

export default Chats
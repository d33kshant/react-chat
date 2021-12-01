import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	transition: transform ease 0.3s;
	width: 100%;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Contacts = ({children, ...props}) => {
	return (
		<Container {...props} >
			{children}
		</Container>
	)
}

export default Contacts
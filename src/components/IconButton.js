import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
	border: none;
	background: none;
	padding: 0 16px;
	height: 100%;
`

const IconButton = ({children, ...props}) => {
	return (
		<Container {...props}>
			{children}
		</Container>
	)
}

export default IconButton
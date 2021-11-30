import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
	height: 48px;
	width: 100%;
	box-sizing: border-box;
	border-bottom: 1px solid lightgray;
	background: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
`

const Header = ({children, ...props}) => {
	return (
		<Container {...props}>
			{children}
		</Container>
	)
}

export default Header
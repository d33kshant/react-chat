import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
	border-radius: 8px;
	background: white;
	min-height: 150px;
	min-width: 150px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: transform 0.1s ease;
`

const Container = ({children, ...props}) => {
	const [scale, setScale] = useState(1.1)

	useEffect(() => {
		setScale(1)
	}, [])

	return (
		<Box style={{transform: `scale(${scale})`}} {...props}>{children}</Box>
	)
}

export default Container
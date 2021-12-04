import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`

const Text = styled.p`
	/* margin: 0; */
	color: gray;
`

const EmptyChats = () => {
	return (
		<Container>
			<Text>Type and press</Text>
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
			<Text>to send a message.</Text>
		</Container>
	)
}

export default EmptyChats
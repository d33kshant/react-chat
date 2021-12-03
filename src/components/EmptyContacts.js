import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`

const Text = styled.p`
	/* margin: 0; */
	color: gray;
`

const EmptyContacts = () => {
	return (
		<Container>
			<Text>Tap</Text>
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
			<Text>to add someone for chat.</Text>
		</Container>
	)
}

export default EmptyContacts
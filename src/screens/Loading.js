import styled from 'styled-components'
import Spinner from '../components/Spinner'

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px;
	box-sizing: border-box;
`

const Loading = () => {
	return (
		<Container>
			<Spinner color="gray" />
		</Container>
	)
}

export default Loading
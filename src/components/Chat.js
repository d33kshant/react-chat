import styled from 'styled-components'

const Container = styled.div`
	width: fit-content;
	background: lightgray;
	border: 1px solid lightgray;
	box-sizing: border-box;
	border-radius: 8px;
	max-width: 60%;
	padding: 8px;
`

const Text = styled.p`
	margin: 0;
`

const Time = styled.p`
	color: gray;
	font-size: 14px;
	margin: 0;
	margin-top: 8px;
`


const Chat = ({self, time, children}) => {
	return (
		<Container style={self? {marginLeft: 'auto'} : {marginRight: 'auto', background: 'white'}} >
			<Text>
				{children}
			</Text>
			<Time>{time}</Time>
		</Container>
	)
}

export default Chat
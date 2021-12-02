import styled from "styled-components"
import Button from "../Button"
import Header from "../Header"
import IconButton from "../IconButton"
import Title from "../Title"
import Background from "./Background"
import Container from "./Container"

const Details = styled.p`
	margin: 8px;
	width: 100%;
	max-width: 240px;
`

const ErrorList = styled.div`
	width: calc(100% - 16px);
`

const Error = styled.p`
	margin: 0;
	color: #ed4956;
`

const Okay = styled(Button)`
	width: calc(100% - 16px);
	margin: 8px;
	margin-top: 16px;
`

const ErrorModal = ({onClose}) => {
	return (
		<Background onClick={onClose}>
			<Container onClick={event=>event.stopPropagation()}>
				<Header>
					<Title style={{margin: 0, padding: '0 16px',fontWeight:600}}>Oops!</Title>
					<IconButton onClick={onClose}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
					</IconButton>
				</Header>
				<Details>Something went wrong. Failed to create new chat for now</Details>
				<ErrorList>
					<Error>• Email is badly formated.</Error>
					<Error>• Email is not registred yet.</Error>
					<Error>• Email is your own</Error>
					<Error>• Chat already exist.</Error>
				</ErrorList>
				<Okay onClick={onClose}>Okay</Okay>
			</Container>
		</Background>
	)
}

export default ErrorModal
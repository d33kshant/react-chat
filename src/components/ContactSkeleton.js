import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`

const Info = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	height: 64px;
	justify-content: center;
`

const DummyAvatar = styled.div`
	width: 40px;
	height: 40px;
	margin: 12px;
	border-radius: 50%;
	background: lightgray;
`

const DummyTitle = styled.div`
	width: 40%;
	background: lightgray;
	height: 14px;
`

const DummySubtitle = styled.div`
	width: 30%;
	background: lightgray;
	height: 8px;
	margin-top: 8px;
`

const ContactSkeleton = () => {
	return (
		<Container>
			<DummyAvatar></DummyAvatar>
			<Info>
				<DummyTitle></DummyTitle>
				<DummySubtitle></DummySubtitle>
			</Info>
		</Container>
	)
}

export default ContactSkeleton
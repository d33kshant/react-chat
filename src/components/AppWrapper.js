import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const ViewPort = styled.div`
	width: 100%;
	height: 100%;
	max-width: 768px;
	overflow: hidden;
	border-left: 1px solid lightgray;
	border-right: 1px solid lightgray;
	box-sizing: border-box;

	@media (max-width: 768px) {
		border: none;
	}
`

const AppWrapper = ({children}) => {
	return (
		<Container>
			<ViewPort>
				{children}
			</ViewPort>
		</Container>
	)
}

export default AppWrapper
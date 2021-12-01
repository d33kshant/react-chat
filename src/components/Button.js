import styled from 'styled-components'

const Container = styled.button`
	border: none;
	background: #0095f6;
	border-radius: 4px;
	padding: 6px 24px;
	font-family: inherit;
	font-weight: 600;
	font-size: 14px;
	color: white;
	height: max-content;
	box-sizing: border-box;
	cursor: pointer;

	:hover {
		background: #005c99;
	}
`

const Button = ({children, ...props})=> {
	return (
		<Container {...props}>
			{children}
		</Container>
	)
}

export default Button
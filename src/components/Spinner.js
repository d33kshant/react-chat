import styled from 'styled-components'

const SVG = styled.svg`
    animation: rotate 0.8s linear infinite;
    @keyframes rotate {
        from { transform: translateZ(0) rotate(0deg); }
        to { transform: translateZ(0) rotate(360deg); }
    }
`

const Spinner = ({ color }) => {
	return (
		<SVG width="24" height="24" xmlns="http://www.w3.org/2000/svg" >
            <path d="M12 21a9 9 0 1 0-9-9" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"></path>
        </SVG>
	)
}

export default Spinner
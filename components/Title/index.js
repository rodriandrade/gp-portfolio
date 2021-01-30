import TitleText from './styled'

const Title = ({children, ...props}) =>{
    const {size, id, align} = props;
    return(
        <>
            <TitleText size={size} id={id} align={align}>{children}</TitleText>
        <img src=""/>
        </>
    )
}

export default Title
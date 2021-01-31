import {Container, IconContainer, Icon, TextContainer, JobText, CompanyText} from './styled'

const JobCard = props =>{

    /*
    <Container>
                <IconContainer>
                    <Icon src={props.icon} />
                </IconContainer>
                <TextContainer>
                    <JobText>{props.job}</JobText>
                    <CompanyText>{props.company}</CompanyText>
                </TextContainer>
            </Container>
    */

    return(
        <div>
            <Container>
                <IconContainer>
                    <Icon src={props.icon} />
                </IconContainer>
                <TextContainer>
                    <JobText>{props.job}</JobText>
                    <CompanyText>{props.company}</CompanyText>
                </TextContainer>
            </Container>
        </div>
    )

}

export default JobCard
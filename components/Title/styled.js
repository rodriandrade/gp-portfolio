import styled from 'styled-components'

const TitleText = styled.h1`
    font-size: ${(props) => {
    switch (props.size) {
      case "h1":
        return "48px";
      case "h2":
        return "36px";
      case "h3":
        return "28px";
      case "h4":
        return "18px";
      case "componentsHeading":
        return "60px";
    }
  }};
    font-family: 'Poppins', sans-serif; 
    color: rgb(12,12,12);
    margin:60px 0;
    text-align:${props => props.align || "left"};;

    ::after{
      content:'';
      display: block;
      position: relative;
      width:50px;
      height:6px;
      background-color:black;
      top:10px;
      margin:${props => props.align ? "0 auto" : ""};
    }

    @media (max-width: 768px) {
        text-align:center;
    }
    
    @media (max-width: 480px) {
        text-align:center !important;
        font-size:30px;

        ::after{
            margin:0 auto;
        }
    }
    
`

export default TitleText
import styled from "styled-components";


const BannerWrapper = styled.section`
  padding-top: 280px;
  padding-bottom: 160px;
  overflow: hidden;
  @media only screen and (min-width: 1367px) {
    min-height: 100vh;
    h2{
        font-size: 55px;
        }
  }
  @media (max-width: 990px) {
    padding-top: 150px;
    padding-bottom: 100px;
    
    h2{
        font-size: 55px;
        }
    
  }
  @media only screen and (max-width: 480px) {
    background: none;
    padding-top: 130px;
    padding-bottom: 60px;
    
     h2{
        font-size: 35px;
        }
  }
  
  .row {
    position: relative;
    z-index: 1;
  }
 .top-buffer { 
    margin-top:20px;
  }
  
  .button__wrapper {
    margin-top: 40px;
    .reusecore__button {
      &:first-child {
        transition: all 0.3s ease;
        &:hover {
          box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
        }
      }
    }
  }
`;

export default BannerWrapper;

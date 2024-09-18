import styled from "styled-components";
export const ConsultationWrap=styled.div`
margin-bottom: 30px;
background: var(--light-gray);
padding: 40px 0 ;
text-align: center;
@media (min-width: 992px){
    margin-bottom: 50px;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 768px){
        flex-direction: row;
    }
    .title{
        display: block;
        font-size: 28px;
        line-height: 32px;
        font-weight: 600;
        @media (min-width: 768px){
            font-size: 36px;
            line-height: 40px;
        }
        @media (min-width: 992px){
            font-size: 40px;
            line-height: 44px;
        }
    }
}
`;
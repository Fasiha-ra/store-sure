import styled from "styled-components";
export const ServiceWrap =styled.div`
text-align: center;
margin-bottom: 30px;
@media (min-width: 992px){
    margin-bottom: 50px;
}
.textWrap{
    font-size: 14px; 
    line-height: 18px;
    font-weight: 400;
    margin-bottom: 30px;
    @media (min-width: 768px){
        font-size: 16px;
        line-height: 20px;
    }
    .heading{
    margin-bottom: 30px;
    @media (min-width: 992px){
        margin-bottom: 50px;
    }
   
}
}
.imgHolders{
        display: flex;
        justify-content: space-between;
        align-content: center;
        gap: 20px;
        flex-wrap: wrap;
        .imgWrap{
            margin: 0 auto;
            max-width: 92px;
            min-height: 50px;
            img{
                width: 100%;
                height: auto;
            }
        }
    }

`;
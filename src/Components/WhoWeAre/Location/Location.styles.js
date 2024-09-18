import styled from "styled-components";
export const LocationWrap=styled.div`
margin-bottom: 30px;
text-align: center;
@media (min-width: 992px){
    margin-bottom: 50px;
}
.heading{
    margin-bottom: 35px;
}
.cards{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 10px;
    @media (min-width: 768px){
        flex-direction: row;
    }
    .card{
        img{
            margin-bottom: 10px;
        }
        .title{
            display: block;
            text-align: start;
            font-size: 16px;
            line-height: 20px;
            font-weight: 600;
            font-style: italic;
            @media (min-width: 992px){
                font-size: 20px;
                line-height: 24px;
            }
        }
    }
}
`;
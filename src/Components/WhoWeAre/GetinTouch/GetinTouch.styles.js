import styled from "styled-components";
export const GetWrapper=styled.div`
margin-bottom: 30px;
@media (min-width: 992px){
    margin-bottom: 50px;
}
.getWrap{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (min-width: 992px){
        flex-direction: row;
        justify-content: space-between;
    }
    gap: 20px;
    .imgWrap{
        max-width: 587px;
        img{
            width: 100%;
            height: auto;
        }
    }
    .formWrap{
        max-width: 500px;
        width: 100%;
        .heading{
            margin-bottom: 35px;
        }
        .grid{
           
          @media (min-width: 992px){
            display: grid;
            gap: 10px;
            grid-template-columns:279px repeat(1, 1fr);
          }
        }
        .btn{
            padding: 20px 0;
        }
    }
}
`;
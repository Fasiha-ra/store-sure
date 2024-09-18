import styled from "styled-components";
export const FormWrap=styled.form`
background-color: #B3DAB87D;
border-radius: 16px;


padding: 20px;
@media (min-width: 800px){
    max-width: 400px;
    width: 100%;
}
.fieldwrap{
    display: flex;
   
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
        gap: 20px;
    }
}
.btn{
    margin-top: 20px;
}
`;
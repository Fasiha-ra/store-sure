import styled from "styled-components";
export const VideosWrap = styled.div`
margin-bottom: 30px;
@media (min-width: 992px){
    margin-bottom: 50px;
}
.container{
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    img{
        max-width: 500px;
    width: 100%;
    height: auto;
    min-height: 542px
    }
}
`;
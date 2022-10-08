import styled from 'styled-components';

export const StyledContainer = styled.div`
    padding: 120px 0;
    text-align: center;
`;

export const StyledCatsContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
`;

export const StyledImage = styled.div`
    width: 300px;
    height: 300px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const StyledButton = styled.button`
    width: 200px;
    background-color: #fff;
    border: 1px solid #000;
    margin: 30px;
    font-size: 20px;
    padding: 10px;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`;
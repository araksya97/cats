import styled from 'styled-components';

export const StyledCategories = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    max-width: 'fit-content';
    gap: 40px;
    align-items: center;
`;

export const StyledCategoryItem = styled.div`
    color: #fff;
    text-transform: capitalize;
    cursor: pointer;

    &:hover {
        color: red;
    }
`;
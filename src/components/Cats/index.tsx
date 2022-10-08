import { useDispatch, useSelector } from 'react-redux';
import { getCats, getCatsThunk, getPage, getSelectedCategory, setPage } from "../../store/slices/general";
import { AppDispatch } from "../../store";
import { StyledCatsContainer, StyledImage, StyledButton, StyledContainer } from './styled';


const Cats = () => {
    const cats= useSelector(getCats)
    const page = useSelector(getPage)
    const selectedCategoryId = useSelector(getSelectedCategory)
    const dispatch = useDispatch<AppDispatch>();

    const handleLoadMore = () => {
        dispatch(setPage(page + 1))
        selectedCategoryId ? 
            dispatch(
                getCatsThunk({ 
                    limit: 10,
                    page: page + 1,
                    category_ids: selectedCategoryId
                })) :
            dispatch(
                getCatsThunk({ 
                    limit: 10,
                    page: page + 1,
                }))
    }
    return (
        <StyledContainer>
            <StyledCatsContainer> 
                {
                    cats?.map(el => {
                        return(
                            <StyledImage 
                            key={el.id}
                            >
                            <img src={el.url} alt="Cat" />
                            </StyledImage>
                        )
                    })
                }    
            </StyledCatsContainer>
            {
                cats && <StyledButton onClick={handleLoadMore}> Load more </StyledButton>
            }
        </StyledContainer>
    )
}


export default Cats;
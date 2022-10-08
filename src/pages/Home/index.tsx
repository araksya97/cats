import Category from "../../components/Categories";
import { useDispatch } from 'react-redux';
import { getAllCategoriesThunk, getCatsThunk } from '../../store/slices/general';
import { useEffect } from "react";
import { AppDispatch } from "../../store";
import Cats from "../../components/Cats";
import { StyledContainer, StyledSideBar } from "./styled";

const Home = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      dispatch(getAllCategoriesThunk())
      dispatch(
        getCatsThunk({ 
            limit: 10,
            page: 1,
        }))
    }, [])

    return (
        <>
            <StyledSideBar>
            <Category />
            </StyledSideBar>
    
            <StyledContainer>
                <Cats />
            </ StyledContainer>
        </>
    )
}


export default Home;
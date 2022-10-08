import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getCatsThunk, getSelectedCategory, setSelectedCategory } from "../../store/slices/general";
import { AppDispatch } from "../../store";
import { StyledCategories, StyledCategoryItem } from './styled';


const Category = () => {
    const categories = useSelector(getCategories)
    const selectedCategory = useSelector(getSelectedCategory)
    const dispatch = useDispatch<AppDispatch>();

    const handleChangeCategory = (id?: number) => {
        if(id){
            dispatch(setSelectedCategory(id));
            dispatch(
                getCatsThunk({ 
                    limit: 10,
                    page: 1,
                    category_ids: id
                }))
        } else {
            dispatch(setSelectedCategory(null));
            dispatch(
                getCatsThunk({ 
                    limit: 10,
                    page: 1,
                }))
        }

    }
    return (
        <StyledCategories> 
            <StyledCategoryItem 
                onClick={() => handleChangeCategory()}
                style={{
                    color: !selectedCategory ? 'red' : '#fff'      
                }}
            > 
                All
            </StyledCategoryItem>
            { categories?.map(el => {
                const selected = selectedCategory === el.id
                return(
                    <StyledCategoryItem 
                        key={el.id}
                        onClick={() => handleChangeCategory(el.id)}
                        style={{
                            color: selected ? 'red' : '#fff'      
                        }}
                    > 
                        {el.name}
                    </StyledCategoryItem>
                )
            })}    
        </StyledCategories>
    )
}


export default Category;
import React from 'react'
import { RecipeHeader } from '../../../../common/sharedtypes/Recipe';
import { Link, useParams } from 'react-router-dom';

interface RecipePageProps {

}

const RecipePage: React.FC<RecipePageProps> = (props) => {
    let { id } = useParams();
    console.log("id", id);
    return (
        <div>
            Hello World
        </div>
    )
}

export default RecipePage;
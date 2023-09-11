import { useRef } from "react";
import { IngredientProperties } from "../../../../common/sharedtypes/IngredientProperties";

export interface IIngredientEditorProps {
    onFinish: (ingredient:IngredientProperties) => void;
    buttonText:string;
}

export function IngredientEditor (props: IIngredientEditorProps) {
    const ingredientEntryRef = useRef<HTMLInputElement>(null);
    const shelfLifeRef = useRef<HTMLInputElement>(null);
    const unitRef = useRef<HTMLInputElement>(null);

    let getIngredient = (): IngredientProperties => {
        const ingredientProperties:IngredientProperties = {
            name: ingredientEntryRef.current?.value ?? "",
            unit: unitRef.current?.value ?? "",
            itemSize: 1,
            shelfLifeDays: Number(shelfLifeRef.current?.value ?? 1)
            };
        return ingredientProperties
    }

    return (
        <div>
            <span>
                <input ref={ingredientEntryRef} placeholder='Enter an ingredient'></input>
                <input ref={shelfLifeRef} type='number' min={ 1 } placeholder='Enter a shelf life (Days)'></input>
                <input ref={unitRef} placeholder='Enter a unit (gram, millilitre, single)'></input>
                <button onClick={() => props.onFinish(getIngredient())}>{props.buttonText}</button>
            </span>
        </div>  
    );
}
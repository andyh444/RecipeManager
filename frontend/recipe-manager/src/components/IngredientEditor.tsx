import { useRef } from "react";
import { IngredientProperties } from "../../../../common/sharedtypes/IngredientProperties";
import React from "react";

export interface IIngredientEditorProps {
    onFinish: (ingredient:IngredientProperties) => void;
    buttonText:string;
    initialProperties:IngredientProperties|null;
}

export function IngredientEditor (props: IIngredientEditorProps) {
    const ingredientEntryRef = useRef<HTMLInputElement>(null);
    const shelfLifeRef = useRef<HTMLInputElement>(null);
    const unitRef = useRef<HTMLSelectElement>(null);

    let validateFields = (): boolean => {
        // javascript is a stupid language
        if (ingredientEntryRef.current?.value
            && shelfLifeRef.current?.value
            && unitRef.current?.value) {
                return true;
        }
        return false;
    }

    let getIngredient = (): IngredientProperties => {
        const ingredientProperties:IngredientProperties = {
            name: ingredientEntryRef.current?.value ?? "",
            unit: unitRef.current?.value ?? "",
            itemSize: 1,
            shelfLifeDays: Number(shelfLifeRef.current?.value ?? 1)
            };
        return ingredientProperties
    }

    let resetFields = (): void => {
        if (ingredientEntryRef.current !== null) {
            ingredientEntryRef.current.value = "";
        }
        if (shelfLifeRef.current !== null) {
            shelfLifeRef.current.value = "";
        }
        if (unitRef.current !== null) {
            unitRef.current.value = "";
        }
    }

    return (
        <React.Fragment>
            <span>
                <input ref={ingredientEntryRef} defaultValue={props.initialProperties?.name ?? ""} placeholder='Enter an ingredient'></input>
                <input ref={shelfLifeRef} defaultValue={props.initialProperties?.shelfLifeDays} type='number' min={ 1 } placeholder='Enter a shelf life (Days)'></input>
                <select ref={unitRef} defaultValue={props.initialProperties?.unit}>
                    <option></option>
                    <option>Gram</option>
                    <option>Millilitre</option>
                    <option>Single</option>
                </select>
                <button onClick={() => {
                    if (validateFields()) {
                        props.onFinish(getIngredient())
                        resetFields()
                    } else {
                        // TODO: More user friendly message
                        alert("Invalid fields!!!")
                    }
                    }}>{props.buttonText}</button>
            </span>
        </React.Fragment>  
    );
}
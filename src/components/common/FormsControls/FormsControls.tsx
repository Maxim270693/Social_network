import React from "react";
import style from "./FormsControls.module.css"

const FormControl:React.FC<any> = (props) => {
    const {input,meta,child,...restProps} = props

    const hasError = meta.touched && meta.error
    return(
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea:React.FC<any> = (props) => {
    const {input,meta,child,...restProps} = props
    return  <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input:React.FC<any> = (props) => {
    const {input,meta,child,...restProps} = props
    return  <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

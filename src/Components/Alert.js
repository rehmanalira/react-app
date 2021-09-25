import React from 'react'

export default function Alert(props) {
    const upper=(word) =>{
        let newword=word.toLowerCase();
        return newword.charAt(0).toUpperCase()+ newword.slice(1)
    }
    return (
        props.alert && <div className={`alert alert-success  alert-dismissible fade show`} role="alert">
            <strong>{upper(props.alert.type)}</strong> {props.alert.message}
        </div>
    )
}

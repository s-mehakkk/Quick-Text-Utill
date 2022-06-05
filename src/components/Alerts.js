import React from 'react'

export default function alerts(props) {
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}: {props.alert.message}</strong>
            </div>
        </div>
    )
}

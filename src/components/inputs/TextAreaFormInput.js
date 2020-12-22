import React from 'react'
import {observer} from "mobx-react";

export default observer(({ field, placeholder = null }) => (
    <div className="input-spacing">
        <label htmlFor={field.id} >
            {field.label}
        </label>
        <textarea {...field.bind({ placeholder }) } />
        <small >
            {field.error}
        </small>
    </div>
));

import React from 'react';
import { observer } from 'mobx-react';



export default observer(({ field, type = 'text', placeholder = null }) => (
    <div className="input-spacing">
        <label htmlFor={field.id} >
            {field.label}
        </label>
        <input {...field.bind({ type, placeholder }) } />
        <small >
            {field.error}
        </small>
    </div>
));

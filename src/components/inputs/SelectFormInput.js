import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field }) => (
    <div  className="input-spacing" >
        <label
            htmlFor={field.id}
        >
            {field.label}
        </label>
        <select {...field.bind()}>
            {field.options.hasHidden === true ? <option hidden>{field.options.hiddenValue}</option> : null}
            {field.extra.map(val =>
                <option key={val} value={val}>{val}</option>)}
        </select>
    </div>
));

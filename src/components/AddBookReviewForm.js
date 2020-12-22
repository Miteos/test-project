import React from 'react';
import { observer } from 'mobx-react';
import TextAreaFormInput from "./inputs/TextAreaFormInput";
import {Link} from "react-router-dom";



export default observer(({ form, id}) => (
    <form onSubmit={form.onSubmit}>
        <TextAreaFormInput field={form.$('review')}/>
        <div className="row-buttons">
            {id=== undefined ?<button type="submit"  className="green-button" onClick={form.onSubmit}>Submit</button>:<button type="submit" onClick={form.onSubmit}>Edit</button>}
            <button type="button" className="green-button"  onClick={form.onClear}>Clear</button>
        </div>
        <p>{form.error}</p>
    </form>
));

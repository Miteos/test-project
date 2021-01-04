import React from 'react';
import { observer } from 'mobx-react';
import SimpleInput from './inputs/TextFormInput';
import {Link} from "react-router-dom";
import TextAreaFormInput from "./inputs/TextAreaFormInput";



export default observer(({ form,id,goBack }) => (
    <form onSubmit={form.onSubmit}>
        <SimpleInput field={form.$('library')} />
        <SimpleInput field={form.$('genre')} />
        <TextAreaFormInput  field={form.$('description')} />

        <br />
        <div className="row-buttons">
            {id=== undefined ?<button type="submit" className="green-button"  onClick={form.onSubmit}>Submit</button>:<button type="submit" onClick={form.onSubmit}>Edit</button>}
            {goBack === true ? <button type="button" className="green-button"  onClick={form.onClear}> <Link to={'/'}>Return</Link></button> : <button type="button" className="green-button"  onClick={form.onClear}>Clear</button> }
        </div>

        <p>{form.error}</p>
    </form>
));



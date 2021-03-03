import React from 'react';
import { observer } from 'mobx-react';
import SimpleInput from './inputs/TextFormInput';
import SelectFormInput from "./inputs/SelectFormInput";
import {Link} from "react-router-dom";
import FileFormInput from "./inputs/FileFormInput";

export default observer(({ form,id,goBack,grid }) => (
    <div>
            <form onSubmit={form.onSubmit} >
                    <div className={grid ? "form-grid" : null}>
                            <SimpleInput field={form.$('author')} />
                            <SimpleInput field={form.$('title')} />
                            <SimpleInput field={form.$('pages')} />
                            <SimpleInput field={form.$('url')} />
                            <SelectFormInput field={form.$('status')} />
                            <SelectFormInput field={form.$('cover')} />
                    </div>
                    <div>
                            <FileFormInput field = {form.$('image')} multiple/>
                            <br />
                            <p>{form.error}</p>
                    </div>
                    <div className="row-buttons">
                            {id=== undefined ?<button type="submit" className="green-button"  onClick={form.onSubmit}>Submit</button>:<button type="submit" onClick={form.onSubmit}>Edit</button>}
                            {goBack === true ? <button type="button" className="green-button"  onClick={form.onClear}> <Link to={'/'}>Return</Link></button> : <button type="button" className="green-button"  onClick={form.onClear}>Clear</button> }
                    </div>
            </form>
    </div>
));



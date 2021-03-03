import React ,{useEffect} from 'react'
import LibraryBox from "./ui/LibraryBox";
import {Observer} from "mobx-react";
import {  Trail, animated } from 'react-spring/renderprops'


const LibraryList = ({store}) => {

    useEffect(() => {
        store.getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Observer>{() =>
            <div>
                    <div className="grid-list">
                        {store.apiData.length === 0 ?
                            <p>Whoops! Seems like you dont have any libraries...</p> : null}
                        {!store.loading ? <Trail
                            items={store.apiData}
                            from={{ marginLeft:-600, opacity: 0,transform: 'translate3d(0,-90px,0)'}}
                            to={{  marginLeft: 0, opacity: 1,transform: 'translate3d(0,0px,0)' }}
                        >
                            {item => props => (
                                <animated.div key={item.id} style={props} className="library-list">
                                    <LibraryBox  title={item.library} id={item.id} store={store}/>
                                </animated.div>
                            )}
                        </Trail>: null}
                    </div>
            </div>

        }</Observer>
    )
}
export default LibraryList

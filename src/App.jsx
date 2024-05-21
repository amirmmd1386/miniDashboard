import React, { useContext, useState } from 'react';
import AddList from './AddToList';
import ListItem from './list';
import Listcontext from './contextList';
const App = () => {
    const [work, setWork] = useState([
    ])
    return (
        <>
            <Listcontext.Provider value={{
                work , setWork
            }}>
                <div>
                    <div><h1>MY SECOND REACT PROJECT TO_DO_LIST</h1></div>
                    <div className='container'>
                        <AddList />
                        <ListItem />
                    </div>
                </div>
            </Listcontext.Provider>
        </>
    );
}
export default App
import React from 'react';
import { Sidebar } from './sidebar';
import User from './components/user/users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Work } from './components/work/work';
import { Gallery } from './components/gallery/gallery';
import  Post  from './components/post/post';
import { Add } from './components/user/formEditAdd';
import { Addpost } from './components/post/addEditPost';
import { CommentModal } from './components/post/comments';
const App = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center w-100 overflow-hidden text-white '>

            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<User />} />
                    <Route path='/user/add' element={<Add />} >
                        <Route path=':userId' />
                    </Route>
                    <Route path='/post' element={<Post />} />
                    <Route path='/post/add' element={<Addpost />}>
                        <Route path=':userId' />
                    </Route>
                    <Route path='/post/comments' element={<CommentModal />} >
                        <Route path=':commentId' />
                    </Route>
                    <Route path='/work' element={<Work />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='*' element={<User />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App
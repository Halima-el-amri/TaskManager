import './bootstrap';

import ReactDOM from 'react-dom/client';        

import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Create from './components/tasks/Create';
import Edit from './components/tasks/Edit';
import Task from './components/tasks/Tasks';

ReactDOM.createRoot(document.getElementById('app')).render(     
     <div className='row'>
        <div className='col-md-12'>
        <BrowserRouter>
                <Header/>
        <Routes>
        <Route path='/' exact element={<Task/>}/>
        <Route path='/create' exact element={<Create/>}/>
        <Route path='/' exact element={<Edit/>}/>
        </Routes>
        
        </BrowserRouter>
        
        </div>
     </div>
    

);
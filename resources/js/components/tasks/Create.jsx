import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useCategories from '../../custom/useCategories';



export default function Create() {

   const [title,setTitle]=useState('');
   const [body,setBody]=useState('');
   const [categoryId,setCategoryId]=useState('');
   const [categories,setCategories]=useState([]);
   const[loading,setLoading]=useState('');
   const[navigate,setNavigate]=useState();

 useEffect(()=>{
 fetchCategories();

},[])
   const fetchCategories = async ()=>{
    const fetechedCategories= await useCategories();
    setCategories(fetechedCategories);


    const createTask=()=>
    {
      e.preventDefault();
       const task={
        title,
        body,
        categoryId
       }

       try {
        const response= axios.post('/api/tasks',task);
        navigate('/');
       
      } catch (error) {
       console.log(error)
      }
    }
}


  return (
    <form>
    <div className="form-row my-5">
      <div className="form-group col-md-6 mx-a">
        <label htmlFor="inputE">Title</label>
        <input type="text" className="form-control" id="inputTitle" placeholder="Title"
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
         
         />
      </div>
      <div className="form-group col-md-6">
      <div className="form-group">
      <label htmlFor="body">Body</label>
      <textarea className="form-control" id="body" rows="3"
      value={body}
      onChange={(e)=>setBody(e.target.value)}
    
      ></textarea>
    </div>
    </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputState">Category</label>
        <select id="catagory_id" name='category_id'  className="form-control" defaultValue={categoryId}>
          <option      value={categoryId}
          onChange={(e)=>setcategoryId(e.target.value)}
           selected>Choose a Category</option>
          {
          categories?.map(category=>(
              <option value={category.id}>{category.name}</option>
            ))
          }

        </select>
      </div>
 
    
    <div className="form-group">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck"/>
        <label className="form-check-label" htmlFor="gridCheck">
          Check me out
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Add New </button>
    </div>
  </form>
  )
}

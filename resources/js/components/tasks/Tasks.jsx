import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useCategories from '../../custom/useCategories';

export default function Task() {
   const [tasks,setTasks]=useState([]);
   const [categories,setCategories]=useState([]);
   const [page,setPage]=useState(1);
    
   
   useEffect(()=>{
     if(!categories.length){
           fetchCategories();
     
     }
      if(!tasks.length){
            fetchTasks();
      }

   },[page]);
   
   


   const fetchTasks =async ()=>{
 try {
  const response=await axios.get(`/api/tasks?page=${page}`);
   setTasks(response.data);
   //console.log(response.data.data)
 } catch (error) {
  console.log(error);
 }
    }








    const fetchNextPrev =(link)=>{
      const url=new URL(link);
      setPage(url.searchParams.get('page'));


    }



const fetchCategories = async ()=>{
     const fetechedCategories= await useCategories();
     setCategories(fetechedCategories);
}




 const  renderPagination =() => ( 
    <div className="pagination-container">
    <ul className="pagination">
     {
        tasks.links?.map((link,index) =>(
          <li key={index} className={`page-item ${link.active ? 'active': '' }`}>
          <a style={{cursor :'pointer'}}
           onClick={()=>fetchNextPrev(link.url)}
          className='page link'>
          {link.leble}
          </a>
          </li>
        ))
        
      }
      </ul>
</div>

     )
    
    
 
    
     

      
    



 function CkekIfTaskIsDone(done) {
    return (
      done ? (
        <span className='badge bg-success'>Done</span>
      ) :
        (
          <span className='badge bg-danger'>Processing...</span>
        )
    );
  }






return( 
 

 


                     <div className='row my-5'>
                   <div className='col-md-9 card'>
              <div className='card-body'>
          <div className='table'>

    <table> 
      <thead>
      <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Body</th>
      <th>Done</th>
      <th>Category</th>
      <th>Created</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
        {
          tasks.data?.map(task=>(
            <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.body}</td>
            <td>{CkekIfTaskIsDone()}</td>
            <td>{task.category.name}</td>
            <td>{task.created_at}</td>
            <td> Action</td>
            </tr>
          ))
        }
      </tbody>
      </table> 
      
      <div className='d-flex justfie-content-center'> 
      <div>
       

      {renderPagination()}
      </div>
      </div>
      
    

                     </div>
                  </div>
              </div>
           

            </div>
        
         
)
}

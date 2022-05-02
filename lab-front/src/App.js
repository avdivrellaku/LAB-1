import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className='container '>
        <div className='d-flex mw-100  flex-direction-column justify-content-center  mx-auto'>
          <h3 className='my-1'>PLAYERS</h3>
          <button class="btn btn-success  mx-4 my-1">Add a new Player</button>
     
        
        </div>  
       
        
        {Table()}
        </div>
  );


  function Table() {
    return (
      <div className='table-responsive mt-4'>
        <table className='table table-border'>
          <thead>
            <tr>
              <th scope='col'>
                Id
              </th>
              <th scope='col'>
                FirstName
              </th>
              <th scope='col'>
                LastName
              </th>
              <th scope='col'>
                Age
              </th>
              <th scope='col'>
                Position
              </th>
              <th scope='col'>
                Team
              </th>
            </tr>
            <tr>
              <td>
              LJ23
              </td>
              <td >
              LeBron
              </td>
              <td>
              James
              </td>
              <td>
              37
              </td>
              <td>
              SF
              </td>
              <td>
                LAL
              </td>
              
      
               <button class="btn btn-outline-warning mx-1 my-3">Update</button>
               <button class="btn btn-outline-danger  mx-1 my-3">Delete</button>
               
            </tr>
            <tr>
              <td>
              LJ23
              </td>
              <td >
              LeBron
              </td>
              <td>
              James
              </td>
              <td>
              37
              </td>
              <td>
              SF
              </td>
              <td>
                LAL
              </td>
              
      
              <button class="btn btn-outline-warning mx-1 my-3">Update</button>
               <button class="btn btn-outline-danger  mx-1 my-3">Delete</button>
               
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default App;

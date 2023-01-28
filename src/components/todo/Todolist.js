import React from 'react';
import { useSelector } from 'react-redux';
import todoDeleteAlert from './todoDeleteAlert';

import todoEditAlert from './todoEditAlert';
const Todolist = () => {

    const todoItems = useSelector((state) => state.todo.value);
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoItems.map((item,i) => {
                                        return(
                                            <tr key={i.toString()}>
                                                <td>{i}</td>
                                                <td>{item}</td>
                                                <td><button onClick={()=> todoEditAlert(i,item)} className='btn btn-sm btn-dark'>Edit</button></td>
                                                <td><button onClick={()=> todoDeleteAlert(i)} className='btn btn-sm btn-danger'>Remove</button></td>
                                            </tr>
                                        )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Todolist;
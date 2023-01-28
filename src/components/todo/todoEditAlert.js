import Swal from "sweetalert2";
import EditTodo from '../../redux/state/todo/todoSlice';
import store from "../../redux/store/store";


export default function todoEditAlert (i,item)  {
    Swal.fire({
        title: 'Update Task Name',
        input:'text',
        inputValue:item,

        inputValidator:(value) => {
            if(value){
                 store.dispatch(EditTodo({index:i, task:item}));
            }
        }
      })
      
}
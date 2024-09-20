import { useDispatch,useSelector } from "react-redux";
import Todoinput from "./Components/Todoinput";
import Todolist from './Components/Todolist'
import {addTodo} from '../src/store/'
import { deleteTodo } from "../src/store/";
import { startEdit } from "../src/store/";
import { saveEdit } from "../src/store/"

const App = () => {
  const dispatch = useDispatch();
  const { listTodo, editIndex} = useSelector((state) => state);
  const editText = useSelector((state) => state.editText);
  const handleAdd = (inputText) => {
    if (inputText) {
      dispatch(addTodo(inputText));
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleStartEdit = (index) => {
    dispatch(startEdit(index,listTodo[index]));

    };

  const handleSaveEdit = () => {
    if (editText) {
      dispatch(saveEdit(editIndex, editText));
    
    }
  };

  return (
    <div className='justify-center items-center m-2'>
      <strong className='text-4xl text-green-500'>Redux <span className='text-red-500'>To-Do App</span></strong>
      <Todoinput addList={handleAdd} />
      <hr />
      {listTodo.map((listItem, i) => (
        <Todolist
          key={i}
          index={i}
          item={listItem}
          deleteItem={handleDelete}
          editItem={handleStartEdit}
          isEditing={editIndex === i}
          editText={editText}
          setEditText={(text) => dispatch({ type: 'SAVE_EDIT_TEXT', payload: text })} 
          saveEdit={handleSaveEdit}
        />
      ))}
    </div>
  );
};
export default App
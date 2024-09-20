function Todolist({ index, item, deleteItem, editItem, isEditing, editText, setEditText, saveEdit }) {
  return (
    <div className="flex items-center border  w-[40%] rounded p-2 m-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)} 
              className="flex-1"
          />
          <button className="btn btn-info" onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span className="flex-1">{item}</span>
          <button className="btn btn-info" onClick={() => editItem(index)}>Edit</button>
        </>
      )}
      <button className="btn btn-danger" onClick={() => deleteItem(index)}>Delete</button>
    </div>
  );
}
export default Todolist
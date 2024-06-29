const TodoContainer = () => {
  return (
    <div>
      <button>Add task</button>
      <button>Filter</button>
      <div className='bg-red-400 w-full space-y-3 rounded-xl p-5'>
        <div className='bg-white rounded-md p-5 flex justify-center items-center text-2xl font-bold'>
          <p>There is no task pending</p>
        </div>
      </div>
    </div>
  )
}

export default TodoContainer

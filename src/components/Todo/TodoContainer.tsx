import { useAppSelector } from '@/redux/hook'
import AddTodoModel from './AddTodoModel'
import TodoCard from './TodoCard'
import TodoFilter from './TodoFilter'

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos)

  return (
    <div>
      <div className='flex justify-between mb-5'>
        <AddTodoModel />
        <TodoFilter />
      </div>
      <div className='bg-primary-gradient w-full rounded-xl p-[5px]'>
        <div className='bg-white h-full w-full rounded-lg p-5 space-y-3'>
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              title={todo.title}
              description={todo.description}
            />
          ))}
        </div>
        {/* <div className='bg-white rounded-md p-5 flex justify-center items-center text-2xl font-bold'>
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  )
}

export default TodoContainer

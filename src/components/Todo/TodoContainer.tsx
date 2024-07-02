import AddTodoModel from './AddTodoModel'
import TodoCard from './TodoCard'
import TodoFilter from './TodoFilter'
import { useGetTodosQuery } from '@/redux/api/api'

const TodoContainer = () => {
  type TTodo = {
    _id: string
    title: string
    description: string
    priority: string
    isCompleted?: boolean
  }

  // * FROM RTQ QUERY
  const { data: filteredTodo, isError, isLoading } = useGetTodosQuery(undefined)

  // * FROM REDUX STATE
  // const { filteredTodo } = useAppSelector((state) => state.todos)

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>Error :(</p>

  return (
    <div>
      <div className='flex justify-between mb-5'>
        <AddTodoModel />
        <TodoFilter />
      </div>
      <div className='bg-primary-gradient w-full rounded-xl p-[5px]'>
        <div className='bg-white h-full w-full rounded-lg p-5 space-y-3'>
          {filteredTodo?.data?.length ? (
            <>
              {filteredTodo?.data?.map((todo: TTodo) => (
                <TodoCard key={todo._id} {...todo} />
              ))}
            </>
          ) : (
            <div className='bg-white rounded-md p-5 flex justify-center items-center text-2xl font-bold'>
              <p>There is no task pending</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoContainer

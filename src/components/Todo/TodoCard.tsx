import { useAppDispatch } from '@/redux/hook'
import { TrashIcon } from '../Svg/Svg'
import { Button } from '../ui/button'
import { removeTodo, toggleComplete } from '@/redux/features/todoSlice'
import UpdateTodoModal from './UpdateTodoModel'

type TTodoCardProps = {
  id: string
  title: string
  description: string
  isCompleted?: boolean
  priority: string
}

const TodoCard = ({
  id,
  title,
  description,
  isCompleted,
  priority
}: TTodoCardProps) => {
  const dispatch = useAppDispatch()

  const toggleState = () => {
    dispatch(toggleComplete(id))
  }

  return (
    <div className='bg-white p-3 rounded-md flex justify-between items-center border'>
      <input
        onChange={toggleState}
        type='checkbox'
        name='complete'
        id='complete'
      />
      <p className='font-semibold'>{title}</p>
      {/* <p>Time</p> */}
      <div>
        {isCompleted ? (
          <p className='text-green-500'>Done</p>
        ) : (
          <p className='text-red-500'>Pending</p>
        )}
      </div>
      <p>{priority}</p>
      <p>{description}</p>
      <div className='space-x-5'>
        <Button onClick={() => dispatch(removeTodo(id))} className='bg-red-500'>
          <TrashIcon />
        </Button>
        <UpdateTodoModal
          id={id}
          title={title}
          description={description}
          priority={priority}
        />
      </div>
    </div>
  )
}

export default TodoCard

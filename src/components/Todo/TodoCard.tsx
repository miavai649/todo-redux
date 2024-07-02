import { useToggleTodoMutation } from '@/redux/api/api'
import { TrashIcon } from '../Svg/Svg'
import { Button } from '../ui/button'
import UpdateTodoModal from './UpdateTodoModel'

type TTodoCardProps = {
  _id: string
  title: string
  description: string
  isCompleted?: boolean
  priority: string
}

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority
}: TTodoCardProps) => {
  // ! FOR REDUX SATE
  // const dispatch = useAppDispatch()

  const [toggleComplete] = useToggleTodoMutation()

  const toggleState = () => {
    const taskData = {
      title,
      description,
      isCompleted: !isCompleted,
      priority
    }

    const options = {
      id: _id,
      data: taskData
    }

    toggleComplete(options)

    // ! FOR REDUX SATE
    // dispatch(toggleComplete(_id))
  }

  return (
    <div className='bg-white p-3 rounded-md flex justify-between items-center border'>
      <input
        className='mr-3'
        defaultChecked={isCompleted}
        onChange={toggleState}
        type='checkbox'
        name='complete'
        id='complete'
      />
      <p className='font-semibold flex-1'>{title}</p>
      <div className='flex-1 flex items-center gap-2'>
        <div
          className={`size-3 rounded-full ${
            priority === 'high' ? 'bg-red-500' : null
          } ${priority === 'medium' ? 'bg-yellow-500' : null}
           ${priority === 'low' ? 'bg-green-500' : null}`}></div>
        <p>{priority}</p>
      </div>
      <div className='flex-1'>
        {isCompleted ? (
          <p className='text-green-500'>Done</p>
        ) : (
          <p className='text-red-500'>Pending</p>
        )}
      </div>

      <p className='flex-[2]'>{description}</p>
      <div className='space-x-5'>
        <Button
          // onClick={() => dispatch(removeTodo(_id))}
          className='bg-red-500'>
          <TrashIcon />
        </Button>
        <UpdateTodoModal
          id={_id}
          title={title}
          description={description}
          priority={priority}
        />
      </div>
    </div>
  )
}

export default TodoCard

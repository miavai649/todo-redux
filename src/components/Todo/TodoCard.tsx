import { useAppDispatch } from '@/redux/hook'
import { EditIcon, TrashIcon } from '../Svg/Svg'
import { Button } from '../ui/button'
import { removeTodo, toggleComplete } from '@/redux/features/todoSlice'

type TTodoCardProps = {
  id: string
  title: string
  description: string
  isCompleted?: boolean
}

const TodoCard = ({ id, title, description, isCompleted }: TTodoCardProps) => {
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
      <p>{description}</p>
      <div className='space-x-5'>
        <Button onClick={() => dispatch(removeTodo(id))} className='bg-red-500'>
          <TrashIcon />
        </Button>
        <Button className='bg-[#5c53fe]'>
          <EditIcon />
        </Button>
      </div>
    </div>
  )
}

export default TodoCard

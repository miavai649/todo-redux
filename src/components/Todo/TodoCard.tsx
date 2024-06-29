import { useAppDispatch } from '@/redux/hook'
import { EditIcon, TrashIcon } from '../Svg/Svg'
import { Button } from '../ui/button'
import { removeTodo } from '@/redux/features/todoSlice'

type TTodoCardProps = {
  id: string
  title: string
  description: string
}

const TodoCard = ({ id, title, description }: TTodoCardProps) => {
  const dispatch = useAppDispatch()

  return (
    <div className='bg-white p-3 rounded-md flex justify-between items-center border'>
      <input type='checkbox' name='' id='' />
      <p className='font-semibold'>{title}</p>
      <p>Time</p>
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

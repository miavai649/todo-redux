import { EditIcon, TrashIcon } from '../Svg/Svg'
import { Button } from '../ui/button'

const TodoCard = () => {
  return (
    <div className='bg-white p-3 rounded-md flex justify-between items-center border'>
      <input type='checkbox' name='' id='' />
      <p className='font-semibold'>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className='space-x-5'>
        <Button className='bg-red-500'>
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

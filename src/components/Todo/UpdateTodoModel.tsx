import { FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog'
import { useAppDispatch } from '@/redux/hook'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import { EditIcon } from '../Svg/Svg'
import { updateTodo } from '@/redux/features/todoSlice'

type TUpdateTodoModelProps = {
  id: string
  title: string
  description: string
  priority: string
}

const UpdateTodoModal = ({
  id,
  title,
  description,
  priority
}: TUpdateTodoModelProps) => {
  const [updateTask, setUpdateTask] = useState(title)
  const [updateDescription, setUpdateDescription] = useState(description)
  const [updatePriority, setUpdatePriority] = useState(priority)
  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const updateTaskDetails = {
      id,
      title: updateTask,
      description: updateDescription,
      priority: updatePriority
    }

    dispatch(updateTodo(updateTaskDetails))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-[#5c53fe]'>
          <EditIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
          <DialogDescription>
            Update your task that you want to update.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='task' className='text-right'>
                Task
              </Label>
              <Input
                defaultValue={title}
                onBlur={(e) => setUpdateTask(e.target.value)}
                id='task'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'>
                Description
              </Label>
              <Input
                defaultValue={description}
                onBlur={(e) => setUpdateDescription(e.target.value)}
                id='description'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'></Label>
              <Select
                defaultValue={priority}
                onValueChange={setUpdatePriority}
                value={updatePriority}>
                <SelectTrigger id='priority' className='col-span-3 flex'>
                  <SelectValue placeholder='Select a priority' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value='high'>High</SelectItem>
                    <SelectItem value='medium'>Medium</SelectItem>
                    <SelectItem value='low'>Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex justify-end'>
            <DialogClose asChild>
              <Button type='submit'>Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default UpdateTodoModal

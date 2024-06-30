import { FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { DialogClose } from '@radix-ui/react-dialog'
import { useAppDispatch } from '@/redux/hook'
import { addTodo } from '@/redux/features/todoSlice'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '../ui/select'

const AddTodoModel = () => {
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('high')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const randomString = Math.random().toString(36).substring(2, 7)

    const taskDetails = {
      id: randomString,
      title: task,
      description,
      priority
    }
    dispatch(addTodo(taskDetails))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-primary-gradient text-xl font-semibold'>
          Add task
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='task' className='text-right'>
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id='task'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'>
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id='description'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'></Label>
              <Select onValueChange={setPriority}>
                <SelectTrigger className='col-span-3 flex'>
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

export default AddTodoModel

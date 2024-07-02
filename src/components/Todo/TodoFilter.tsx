import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'

type TTodoFilterProps = {
  priority: string
  setPriority: React.Dispatch<React.SetStateAction<string>>
}

const TodoFilter = ({ priority, setPriority }: TTodoFilterProps) => {
  // ! HANDLING FROM REDUX SATE
  // const [priority, setPriority] = useState('all')
  // const dispatch = useAppDispatch()

  // const handlePriority = (newPriority: string) => {
  //   dispatch(filterTodo(newPriority))
  //   setPriority(newPriority)
  // }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='bg-primary-gradient text-xl font-semibold'>
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
          <DropdownMenuRadioItem value=''>All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='high'>High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='medium'>Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='low'>Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default TodoFilter

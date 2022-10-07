import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const TasksAndCalendar: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        TASKS AND CALENDAR
      </h2>
      <TextEditor />
    </Container>
  )
}

export default TasksAndCalendar

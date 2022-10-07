import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const SeasonalCalendar: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        SEASONAL CALENDAR
      </h2>
      <TextEditor />
    </Container>
  )
}

export default SeasonalCalendar

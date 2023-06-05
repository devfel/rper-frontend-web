import { useState, useCallback } from 'react'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import { MdMenu } from 'react-icons/md'
import { RiExchangeFill } from 'react-icons/ri'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import {
  SubMenuItems,
  SectionsBtn,
  IconBtn,
  LinkBtn,
  SubMenuTitle,
} from '../../pages/dashboard/styles'
import { StyledMenu } from './styles'
import StatusButton from '../status-button'

const Menu = () => {
  const location = useLocation()
  const page = location.pathname.split('/')[2]

  const [togglePreparation, setTogglePreparation] = useState(false)
  const [toggleFieldwork, setToggleFieldwork] = useState(false)
  const [toggleFinalization, setToggleFinalization] = useState(false)
  const [selectedButton, setSelectedButton] = useState(page)

  const params = useParams()
  const navigate = useNavigate()

  const togglePreparationBtn = useCallback(() => {
    togglePreparation ? setTogglePreparation(false) : setTogglePreparation(true)
  }, [togglePreparation])

  const toggleFieldworkBtn = useCallback(() => {
    toggleFieldwork ? setToggleFieldwork(false) : setToggleFieldwork(true)
  }, [toggleFieldwork])

  const toggleFinalizationBtn = useCallback(() => {
    toggleFinalization
      ? setToggleFinalization(false)
      : setToggleFinalization(true)
  }, [toggleFinalization])

  const deselectOtherButtons = useCallback(
    (currentButton: string) => {
      if (selectedButton !== currentButton) {
        setSelectedButton(currentButton)
      }
    },
    [selectedButton],
  )

  const handleClick = useCallback(
    (button: string) => {
      deselectOtherButtons(button)
      navigate(`/dashboard/${button}/${params.id}`)
    },
    [selectedButton],
  )

  return (
    <>
      <StyledMenu>
        <h2>
          <MdMenu /> Menu
        </h2>
        <section>
          <SubMenuItems>
            <SectionsBtn isSelected={selectedButton === 'summary'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <LinkBtn onClick={() => handleClick('summary')}>Summary</LinkBtn>
            </SectionsBtn>
          </SubMenuItems>
        </section>
        <section>
          <SubMenuTitle
            onClick={togglePreparationBtn}
            toggle={togglePreparation}
          >
            Preparation
            <IoMdArrowDropup />
            <IoMdArrowDropdown />
          </SubMenuTitle>
          <SubMenuItems toggle={togglePreparation}>
            <SectionsBtn isSelected={selectedButton === 'team'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="team" />
              <LinkBtn onClick={() => handleClick('team')}>Team</LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'secondary-data'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="secondary-data" />
              <LinkBtn onClick={() => handleClick('secondary-data')}>
                Secondary Data
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'contact-collectivity'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="contact-collectivity" />
              <LinkBtn onClick={() => handleClick('contact-collectivity')}>
                Contact Collectivity
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'interview-guide'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="interview-guide" />
              <LinkBtn onClick={() => handleClick('interview-guide')}>
                Interview Guide
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'focus-group-guide'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="focus-group-guide" />
              <LinkBtn onClick={() => handleClick('focus-group-guide')}>
                Focus Group Guide
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'themes-framework'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="themes-framework" />
              <LinkBtn onClick={() => handleClick('themes-framework')}>
                Themes Framework
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'tasks-and-calendar'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="tasks-and-calendar" />
              <LinkBtn onClick={() => handleClick('tasks-and-calendar')}>
                Tasks and Calendar
              </LinkBtn>
            </SectionsBtn>
          </SubMenuItems>
        </section>
        <section>
          <SubMenuTitle onClick={toggleFieldworkBtn} toggle={toggleFieldwork}>
            Fieldwork
            <IoMdArrowDropup />
            <IoMdArrowDropdown />
          </SubMenuTitle>
          <SubMenuItems toggle={toggleFieldwork}>
            <SectionsBtn
              isSelected={selectedButton === 'collectivity-registration'}
            >
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="collectivity-registration" />
              <LinkBtn onClick={() => handleClick('collectivity-registration')}>
                Collectivity Registration
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'presentation'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="presentation" />
              <LinkBtn onClick={() => handleClick('presentation')}>
                Presentation
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'historical-mapping'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="historical-mapping" />
              <LinkBtn onClick={() => handleClick('historical-mapping')}>
                Historical Mapping
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'transect-walk'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="transect-walk" />
              <LinkBtn onClick={() => handleClick('transect-walk')}>
                Transect Walk
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'venn-diagram'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="venn-diagram" />
              <LinkBtn onClick={() => handleClick('venn-diagram')}>
                Venn Diagram
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'seasonal-calendar'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="seasonal-calendar" />
              <LinkBtn onClick={() => handleClick('seasonal-calendar')}>
                Seasonal Calendar
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'daily-routines'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="daily-routines" />
              <LinkBtn onClick={() => handleClick('daily-routines')}>
                Daily Routines
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'input-and-output'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="input-and-output" />
              <LinkBtn onClick={() => handleClick('input-and-output')}>
                Input and Output
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn
              isSelected={selectedButton === 'interview-focus-group'}
            >
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="interview-focus-group" />
              <LinkBtn onClick={() => handleClick('interview-focus-group')}>
                Interview & Focus Group
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn
              isSelected={selectedButton === 'reality-and-obj-Matrix'}
            >
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="reality-and-obj-Matrix" />
              <LinkBtn onClick={() => handleClick('reality-and-obj-Matrix')}>
                Reality and Obj. Matrix
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn
              isSelected={selectedButton === 'election-of-priorities'}
            >
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="election-of-priorities" />
              <LinkBtn onClick={() => handleClick('election-of-priorities')}>
                Election of Priorities
              </LinkBtn>
            </SectionsBtn>
          </SubMenuItems>
        </section>
        <section>
          <SubMenuTitle
            onClick={toggleFinalizationBtn}
            toggle={toggleFinalization}
          >
            Finalization
            <IoMdArrowDropup />
            <IoMdArrowDropdown />
          </SubMenuTitle>
          <SubMenuItems toggle={toggleFinalization}>
            <SectionsBtn isSelected={selectedButton === 'extra-information'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="extra-information" />
              <LinkBtn onClick={() => handleClick('extra-information')}>
                Extra Information
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'final-considerations'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="final-considerations" />
              <LinkBtn onClick={() => handleClick('final-considerations')}>
                Final Considerations
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn isSelected={selectedButton === 'acknowledgment'}>
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="acknowledgment" />
              <LinkBtn onClick={() => handleClick('acknowledgment')}>
                Acknowledgment
              </LinkBtn>
            </SectionsBtn>
            <SectionsBtn
              isSelected={selectedButton === 'generate-final-report'}
            >
              <IconBtn>
                <RiExchangeFill />
              </IconBtn>
              <StatusButton page="generate-final-report" />
              <LinkBtn onClick={() => handleClick('generate-final-report')}>
                Generate Final Report
              </LinkBtn>
            </SectionsBtn>
          </SubMenuItems>
        </section>
      </StyledMenu>
    </>
  )
}

export default Menu

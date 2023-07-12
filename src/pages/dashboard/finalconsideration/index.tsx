import { useEffect, useState } from 'react'
import Header from '../../../components/header'
import Menu from '../../../components/menu'
import EditorComponent from '../editor-component'
import { Content, Main } from '../styles'
import { useParams, useBeforeUnload } from 'react-router-dom'
import api, { handleUploadImage } from '../../../services/api'
import { useRper } from '../../../contexts/rper-context'
import { useAuth } from '../../../contexts/auth-context'
import { MAX_TIME_WITHOUT_EDITING } from '../../../utils/constants'

const FinalConsideration: React.FC = () => {
  const { id } = useParams()
  const { rper, findRper, findEditingResource } = useRper()
  const { user } = useAuth()
  const [contentText, setContentText] = useState('')
  const [readOnly, setReadOnly] = useState(true)

  const handleEditingResource = async (readonly: boolean) => {
    const isEditing = await findEditingResource(`${id}`, 'finalconsideration')
    if (isEditing) {
      window.alert('Este recurso já está sendo editado')
      return
    }

    await api.post('rpers/resources', {
      rper_id: id,
      user_id: user.user_id,
      resource: 'finalconsideration',
    })

    findRper(`${id}`)

    setReadOnly(readonly)
  }

  const handleRemoveEditingResource = async () => {
    await api.delete(`rpers/resources/${id}/${user.user_id}/finalconsideration`)
  }

  const handleSave = async () => {
    try {
      await api.put(`rpers/${id}/finalconsideration`, {
        content: contentText,
      })
      await handleRemoveEditingResource()
      setReadOnly(true)
      findRper(`${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    findRper(`${id}`)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      handleSave()
      findRper(`${id}`)
      setReadOnly(true)
    }, MAX_TIME_WITHOUT_EDITING)

    return () => clearInterval(timer)
  }, [contentText])

  useBeforeUnload(() => {
    handleSave()
    handleRemoveEditingResource()
    setReadOnly(true)
  })

  return (
    <>
      <Header />
      <Main>
        <h1>{rper?.name}</h1>
        <Menu />
        <Content>
          <EditorComponent
            title={'FINAL CONSIDERATIONS'}
            handleTextChange={setContentText}
            handleSave={handleSave}
            isReadOnly={readOnly}
            handleReadOnly={handleEditingResource}
            rper={rper}
            handleUploadImage={handleUploadImage}
          />
        </Content>
      </Main>
    </>
  )
}

export default FinalConsideration

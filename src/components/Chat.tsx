import Image from 'next/future/image'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'

import { ChatSpeaker } from 'context/data'
import { Wave } from './Wave'
import { AudioPlayerProvider } from 'react-use-audio-player'
import { Sound } from 'services/Sound'

interface MessageProps {
  id: number
  text: string
  from: ChatSpeaker
  link?: string
  audio?: string
  image?: string
  isPortrait?: boolean
}

interface ChatProps {
  title: string
  relation: object
  list: MessageProps[]
}

const ChatImage = ({ image = '', alt = '', isPortrait = true }) => <Image src={image} alt={alt} width={isPortrait ? 225 : 300} height={isPortrait ? 400 : 258} />

const timeoutValue = 3000

export const Chat = ({ title, relation, list }: ChatProps) => {
  const [messageList, setMessageList] = useState([] as MessageProps[])
  const [isTyping, setIsTyping] = useState(true)
  const [showQuestion, setShowQuestion] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const Router = useRouter()

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { current: messagesEnd } = messagesEndRef
    if (messagesEnd !== null) {
      messagesEnd.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messageList])

  let timer = setTimeout(() => showNextMessage(), timeoutValue)
  useEffect(() => {
    if (!list[messageIndex]) return clearTimeout(timer)
    if (messageIndex > 0 && list[messageIndex].from === ChatSpeaker.QUESTION) return clearTimeout(timer)
  }, [list, timer])

  const showNextMessage = (id: number = null) => {
    setIsTyping(false)
    const activeMessage = id ? list[relation[id]] : list[messageIndex]

    showAnswer(id)
    setMessageList((ml) => [...ml, activeMessage])
    setMessageIndex(relation[activeMessage.id])

    checkForQuestion(activeMessage)
  }

  const selectAnswer = (event, id: number) => {
    event.currentTarget.disabled = true
    setIsTyping(true)
    timer = setTimeout(() => showNextMessage(id), timeoutValue)
  }

  const showAnswer = (id: number) => {
    id !== null && setMessageList((ml) => [...ml, list[id]])
  }

  const checkForQuestion = (activeMessage: MessageProps) => {
    if (activeMessage.link) {
      setTimeout(() => Router.push(activeMessage.link), 1000)
    }

    if (list[activeMessage.id + 1]) {
      const nextSpeaker = list[activeMessage.id + 1].from
      setIsTyping(nextSpeaker !== ChatSpeaker.QUESTION)
      setShowQuestion(nextSpeaker === ChatSpeaker.QUESTION)
    }
  }

  return (
    <>
      <ChatTitle title={title} />
      <DialogContent
        dividers
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {messageList.map((message, index) => (
          <DialogContentText
            key={index}
            component="div"
            variant="h5"
            sx={{
              m: 2,
              p: 2,
              borderRadius: 1,
              width: '66%',
              alignSelf: message.from === ChatSpeaker.QUESTION ? 'flex-end' : 'flex-start',
              backgroundColor: message.from === ChatSpeaker.QUESTION ? 'secondary.dark' : 'secondary.light',
            }}
          >
            {message.text}
            {message.image && <ChatImage {...message} />}
            {message.audio && (
              <AudioPlayerProvider>
                <Sound {...message} />
              </AudioPlayerProvider>
            )}
          </DialogContentText>
        ))}
        {isTyping && Wave}
        <div ref={messagesEndRef} />
      </DialogContent>
      {showQuestion && (
        <DialogActions
          sx={{
            justifyContent: 'center',
            textTransform: 'none',
          }}
        >
          <Button
            sx={{
              textTransform: 'none',
            }}
            onClick={(event) => selectAnswer(event, messageIndex)}
          >
            {list[messageIndex].text}
          </Button>
          <Button
            sx={{
              textTransform: 'none',
            }}
            onClick={(event) => selectAnswer(event, messageIndex + 1)}
          >
            {list[messageIndex + 1].text}
          </Button>
        </DialogActions>
      )}
    </>
  )
}

const ChatTitle = ({ title }) => {
  return (
    <DialogTitle
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'secondary.main',
      }}
    >
      <Avatar sx={{ height: '6rem', width: '6rem', mr: '1rem' }} alt="Avatar Chat" src="avatar-chat.png" />
      <Typography variant="h2" color="text.secondary">
        {title}
      </Typography>
    </DialogTitle>
  )
}

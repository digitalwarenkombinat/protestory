import Image from 'next/image'
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
}

interface ChatProps {
  title: string
  relation: object
  list: MessageProps[]
}

const ChatImage = ({ image = '', alt = '' }) => (
  <Image
    src={image}
    alt={alt}
    width={300}
    height={400}
    style={{
      width: '100%',
      height: 'auto',
    }}
  />
)

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
    <div>
      <ChatTitle title={title} />
      <DialogContent
        dividers
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0.5rem',
        }}
      >
        {messageList.map((message, index) => (
          <DialogContentText
            key={index}
            component="div"
            variant="h5"
            sx={{
              m: '0.5rem',
              p: '0.5rem',
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
          disableSpacing
          sx={{
            justifyContent: 'center',
            textTransform: 'none',
          }}
        >
          {[messageIndex, messageIndex + 1].map((message, index) => (
            <Button
              key={index}
              sx={{
                textTransform: 'none',
                padding: '0.5rem',
                flexBasis: '100%',
              }}
              onClick={(event) => selectAnswer(event, message)}
            >
              <Typography component="span" variant="h6">
                {list[message].text}
              </Typography>
            </Button>
          ))}
        </DialogActions>
      )}
    </div>
  )
}

const ChatTitle = ({ title }) => {
  return (
    <DialogTitle
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem',
        backgroundColor: 'secondary.main',
      }}
    >
      <Avatar sx={{ height: '6rem', width: '6rem', m: 0 }} alt="Avatar Chat" src="chat/avatar-chat.webp" />
      <Typography variant="h2" color="text.secondary">
        {title}
      </Typography>
    </DialogTitle>
  )
}

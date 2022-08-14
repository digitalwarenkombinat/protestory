import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'

import { ChatSpeaker } from 'context/data'
import { Wave } from './Wave'

interface MessageProps {
  id: number
  text: string
  from: ChatSpeaker
  image?: string
  alt?: string
}

interface ChatProps {
  title: string
  relation: object
  list: MessageProps[]
}

export const Chat = ({ title, relation, list }: ChatProps) => {
  const [messageList, setMessageList] = useState([] as MessageProps[])
  const [isTyping, setIsTyping] = useState(true)
  const [showQuestion, setShowQuestion] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { current: messagesEnd } = messagesEndRef
    if (messagesEnd !== null) {
      messagesEnd.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messageList])

  const showNextMessage = (id: number = null) => {
    setIsTyping(false)
    const activeMessage = id ? list[relation[id]] : list[messageIndex]

    showAnswer(id)
    setMessageList((ml) => [...ml, activeMessage])
    setMessageIndex(relation[activeMessage.id])

    checkForQuestion(activeMessage)
  }

  const selectAnswer = (id: number) => {
    setIsTyping(true)
    timer = setTimeout(() => showNextMessage(id), 3000)
  }

  const showAnswer = (id: number) => {
    id !== null && setMessageList((ml) => [...ml, list[id]])
  }

  const checkForQuestion = (activeMessage: MessageProps) => {
    if (list[activeMessage.id + 1]) {
      const nextSpeaker = list[activeMessage.id + 1].from
      setIsTyping(nextSpeaker !== ChatSpeaker.QUESTION)
      setShowQuestion(nextSpeaker === ChatSpeaker.QUESTION)
    }
  }

  let timer = setTimeout(() => showNextMessage(), 3000)
  useEffect(() => {
    if (!list[messageIndex]) return clearTimeout(timer)
    if (
      messageIndex > 0 &&
      list[messageIndex].from === ChatSpeaker.QUESTION
    )
      return clearTimeout(timer)
  }, [list, timer])

  return (
    <>
      <DialogTitle
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'secondary.main',
        }}
      >
        <Avatar
          sx={{ height: '6rem', width: '6rem', mr: '1rem' }}
          alt="Avatar Chat"
          src="avatar-chat.png"
        />
        <Typography variant="h3" color="text.secondary">
          {title}
        </Typography>
      </DialogTitle>
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
              alignSelf:
                message.from === ChatSpeaker.QUESTION
                  ? 'flex-end'
                  : 'flex-start',
              backgroundColor:
                message.from === ChatSpeaker.QUESTION
                  ? 'secondary.dark'
                  : 'secondary.light',
            }}
          >
            {message.text}
            {message.alt && (
              <figure>
                <Image
                  src={message.image}
                  alt={message.alt}
                  width={300}
                  height={500}
                />
                <figcaption>{message.alt}</figcaption>
              </figure>
            )}
          </DialogContentText>
        ))}
        {isTyping && Wave}
        <div ref={messagesEndRef} />
      </DialogContent>
      {showQuestion && (
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={() => selectAnswer(messageIndex)}>
            {list[messageIndex].text}
          </Button>
          <Button onClick={() => selectAnswer(messageIndex + 1)}>
            {list[messageIndex + 1].text}
          </Button>
        </DialogActions>
      )}
    </>
  )
}

/* eslint-disable no-unused-vars */
export enum ChatSpeaker {
  YOU = 'you',
  BOT = 'bot',
  QUESTION = 'question',
}

export interface Clickable {
  id: number
  name?: string
  image: string
  left: number
  top: number
  message?: string
  item?: number
  scene?: number
  img?: HTMLImageElement
  imageData?: ImageData
}

export interface Scene {
  id: number
  name?: string
  image: string
  img?: HTMLImageElement
  imageData?: ImageData
  clickables?: Array<Clickable>
}

export interface Position {
  x: number
  y: number
}

export interface Item {
  id: number
  name?: string
  image: string
  img?: HTMLImageElement
}

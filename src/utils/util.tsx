import { Scene, Position } from '../context/data'

interface StyleProps {
  fontSize?: number
  fontFamily?: string
  color?: string
  textAlign?: string
}

export const writeText = (ctx, info, style: StyleProps = {}) => {
  const { text, x, y } = info
  const {
    fontSize = 20,
    fontFamily = 'Arial',
    color = 'black',
    textAlign = 'left',
  } = style

  ctx.beginPath()
  ctx.font = fontSize + 'px ' + fontFamily
  ctx.textAlign = textAlign
  ctx.fillStyle = color
  ctx.fillText(text, x, y)
  ctx.stroke()
}

export const getPositionRelativeToCanvas = (
  x: number,
  y: number,
  canvas: HTMLCanvasElement
): Position => {
  const rect: DOMRect = canvas.getBoundingClientRect()
  const root: HTMLElement = document.documentElement
  const relativeX: number = x - rect.left - root.scrollLeft
  const relativeY: number = y - rect.top - root.scrollTop

  return {
    x: relativeX,
    y: relativeY,
  }
}

export const getImageData = (img: HTMLImageElement): ImageData => {
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  const context: CanvasRenderingContext2D = canvas.getContext('2d')

  canvas.width = img.width
  canvas.height = img.height

  // draw the image on the temporary canvas
  context.drawImage(img, 0, 0)

  // pull the entire image into an array of pixel data
  return context.getImageData(0, 0, img.width, img.height)
}

const loadImage = (uri: string): Promise<HTMLImageElement> =>
  new Promise(
    (
      resolve: (img: HTMLImageElement) => void,
      reject: (e: ErrorEvent) => void
    ) => {
      const img: HTMLImageElement = new Image()

      img.onload = () => {
        resolve(img)
      }

      img.onerror = (e: ErrorEvent) => {
        reject(e)
      }

      img.src = uri
    }
  )

const loadSceneImages = (scene: Scene): Promise<HTMLImageElement[]> =>
  Promise.all(
    [scene.image, ...scene.clickables.map((c) => c.image)].map(
      loadImage
    )
  )

export const populateSceneWithImages = (
  scene: Scene
): Promise<void> =>
  loadSceneImages(scene).then(([sceneImage, ...clickableImages]) => {
    scene.img = sceneImage

    for (let i = 0; i < scene.clickables.length; i++) {
      scene.clickables[i].img = clickableImages[i]
      scene.clickables[i].imageData = getImageData(clickableImages[i])
    }
  })

export const pointIsInRect = (
  x: number,
  y: number,
  left: number,
  top: number,
  width: number,
  height: number
): boolean =>
  x > left && x < left + width && y > top && y < top + height

export const pointIsInImageContent = (
  x: number,
  y: number,
  left: number,
  top: number,
  width: number,
  data: Uint8ClampedArray
): boolean => {
  const imageXY: Position = getPositionRelativeToPosition(
    x,
    y,
    left,
    top
  )
  const pixelNumber: number = getImageDataPixelNumber(
    imageXY.x,
    imageXY.y,
    width
  )
  const imageDataPixelData: Uint8ClampedArray = getImageDataPixelData(
    pixelNumber,
    data
  )
  const pixelOpacity: number = getPixelOpacity(imageDataPixelData)
  return isGreaterThanZero(pixelOpacity)
}

function getPositionRelativeToPosition(
  x: number,
  y: number,
  left: number,
  top: number
): Position {
  return {
    x: x - left,
    y: y - top,
  }
}

function getImageDataPixelNumber(
  x: number,
  y: number,
  width: number
): number {
  return (y - 1) * width + x
}

function getImageDataPixelData(
  pixelNumber: number,
  data: Uint8ClampedArray
): Uint8ClampedArray {
  const start: number = pixelNumber * 4 - 4

  return data.slice(start, start + 4)
}

function getPixelOpacity(pixelData: Uint8ClampedArray): number {
  return pixelData[3]
}

function isGreaterThanZero(number: number): boolean {
  return number > 0
}

export const formatTime = (seconds: number) => {
  const floored = Math.floor(seconds)
  let from = 14
  let length = 5
  // Display hours only if necessary.
  if (floored >= 3600) {
    from = 11
    length = 8
  }

  return new Date(floored * 1000).toISOString().substr(from, length)
}

import { useState } from 'react'
import useCanvas from '../../hooks/useCanvas'
import {
  getPositionRelativeToCanvas,
  pointIsInRect,
  pointIsInImageContent,
} from '../../utils/util'
import { scenes } from '../../config/startthedemo'

const Canvas = ({ draw }) => {
  const [scene, setScene] = useState(scenes[0])
  const canvasRef = useCanvas(draw, scene)

  const handleCanvasClick = (event) => {
    const { x, y } = getPositionRelativeToCanvas(
      event.clientX,
      event.clientY,
      canvasRef.current
    )
    scene.clickables.forEach((c) => {
      const left = c.left
      const top = c.top
      const { width, height } = c.img
      if (!pointIsInRect(x, y, left, top, width, height)) {
        return
      }
      const { data } = c.imageData
      if (!pointIsInImageContent(x, y, left, top, width, data)) {
        return
      }
      if (c.scene) {
        const newScene = scenes.find((s) => s.id === c.scene)
        setScene(newScene)
      }
    })
  }

  return (
    <canvas
      ref={canvasRef}
      width="1200"
      height="812"
      onClick={handleCanvasClick}
    />
  )
}

export default Canvas

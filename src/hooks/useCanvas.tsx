import { useRef, useEffect } from 'react'

const useCanvas = (draw, scene) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const render = () => {
      draw(context, scene)
    }
    render()
  }, [draw, scene])

  return canvasRef
}

export default useCanvas

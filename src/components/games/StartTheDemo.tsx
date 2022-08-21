import Container from '@mui/material/Container'

import { populateSceneWithImages, writeText } from 'utils/util'
import Canvas from './Canvas'
import { Scene } from 'context/data'

const StartTheDemo = () => {
  const draw = (context: CanvasRenderingContext2D, scene: Scene) => {
    populateSceneWithImages(scene).then(() => {
      context.clearRect(
        0,
        0,
        context.canvas.width,
        context.canvas.height
      )
      context.drawImage(scene.img, 0, 0)
      //TODO add clickables
      // scene.clickables.forEach((c) => {
      //   context.drawImage(c.img, c.left, c.top)
      //   writeText(
      //     context,
      //     {
      //       text: c.message || 'Hello',
      //       x: c.left + 80,
      //       y: c.top + 40,
      //     },
      //     {
      //       fontSize: 24,
      //       color: 'white',
      //     }
      //   )
      // })
    })
  }

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Canvas draw={draw} />
    </Container>
  )
}

export default StartTheDemo

import fs from 'node:fs/promises'

async function getImages(dir) {
  const files = await fs.readdir(dir)
  try {
    const images = files
      .filter((file) => file.endsWith('.webp'))
      .map(async (file) => {
        return {
          name: file.substr(0, file.lastIndexOf('.')),
          source: `${dir.split('/')[1]}/${file}`,
        }
      })

    return await Promise.all(images)
  } catch (err) {
    console.log(err)
  }
}

export async function createData() {
  const mediaDataHome = await getImages('public/protestart')
  const mediaDataPoster = await getImages('public/posterParade')
  const mediaDataChat = await getImages('public/chat')
  const mediaData = mediaDataHome.concat(mediaDataPoster.concat(mediaDataChat))

  const mediaDataFile = `export const mediaData = ${JSON.stringify(mediaData, null, 2)};`
  const mediaDataFilePath = 'src/config/mediaData.tsx'
  await fs.writeFile(mediaDataFilePath, mediaDataFile, 'utf-8')
}

createData()

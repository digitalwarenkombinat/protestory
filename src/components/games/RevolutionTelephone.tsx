/* eslint-disable no-sparse-arrays */
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { useState } from 'react'
import { AudioPlayerProvider } from 'react-use-audio-player'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { names } from 'config/revolutionstelephone'
import { revolutionstelephone } from 'config'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'
import { Call } from 'services/Call'

const RevolutionTelephone = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const [telephoneNumber, setTelephoneNumber] = useState('')
  const [activeElement, setActiveElement] = useState(null)

  function isElementActive(element: { name: string; value: string }) {
    return telephoneNumber.length === 5 && telephoneNumber === element.value
  }

  function dialNumber(digit: string) {
    telephoneNumber.length === 5 && resetTelephoneNumber()
    telephoneNumber.length === 4 && setActiveElement(names.find((element) => element.value === telephoneNumber.concat(digit)))
    return setTelephoneNumber((previousNumber) => previousNumber.concat(digit))
  }

  function resetTelephoneNumber() {
    setTelephoneNumber('')
    setActiveElement(null)
  }

  return (
    <Grid container alignItems="center" textAlign="center" flexWrap="wrap" justifyContent="center" my="2rem" maxWidth="xl" mx="auto">
      <Grid item>
        <Typography sx={{ mb: 4 }} variant="h2" color="text.secondary">
          Revolutions-Telefon
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="text.secondary">
          {hasHydrated && revolutionstelephone[language].description1}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="text.secondary">
          {hasHydrated && revolutionstelephone[language].description2}
        </Typography>
      </Grid>
      <AudioPlayerProvider>
        <Call number={telephoneNumber} caller={activeElement} onEnd={resetTelephoneNumber} />
      </AudioPlayerProvider>
      <Grid item maxWidth="lg" sm={12} md={8} sx={{ width: '100%', overflow: 'hidden' }}>
        <style>{`
          #Feld0:hover,
          #Feld1:hover,
          #Feld2:hover,
          #Feld3:hover,
          #Feld4:hover,
          #Feld5:hover,
          #Feld6:hover,
          #Feld7:hover,
          #Feld8:hover,
          #Feld9:hover,
          #Feldraute:hover,
          #Feldstern:hover {
            filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7));
            cursor: pointer
          }
          #Hoerer {
              transform-origin: 50% 50%;
              animation: ring 2s ease 10s infinite;
              transform: rotate(0deg);
          }
          .scale {
            transform: scale(1.5);
            margin-bottom: 4rem;
            margin-top: 4rem;
          }
          .cls-8,
          .cls-9 {
            stroke: #000;
            stroke-miterlimit: 11.34;
          }
          .cls-7 {
            isolation: isolate;
          }
          .cls-8 {
            fill: #ffe1e1;
          }
          .al,.an{stroke:#000;stroke-miterlimit:11.34}.al{fill:#ffe1e1}.aq{isolation:isolate}
          @keyframes ring {
            0% {
            }   /* rotate right */
            20% {
              transform: rotate(5deg);
            }   /* rotate left */
            40% {
              transform: rotate(-5deg);
            }   /* rotate right */
            60% {
              transform: rotate(5deg);
            }   /* return center */
            80% {
              transform: rotate(0deg);
            }
          }
        `}</style>
        <svg id="Revolutionstelefon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537.46 361.7" className={hasHydrated && isDesktop ? '' : 'scale'}>
          <defs></defs>
          <g id="b">
            <path
              id="c"
              d="M170.37 112.5c-16.84 20.39-117.65 225.33-7.23 226.1 113.33.79 101.73.57 219.84.57 105.14 0 11.87-207.97-2.26-228.32-14.69-32.78-176.83-38.94-210.35 1.65Z"
              style={{
                strokeWidth: '2.85px',
                fill: '#f50057',
                strokeMiterlimit: '11.34',
                stroke: '#000',
              }}
            />
            <path
              id="d"
              d="M369.99 216.03c0 54.09-43.68 98.02-97.77 98.32-54.09.3-98.26-43.13-98.87-97.21-.61-54.08 42.58-98.5 96.65-99.42 54.08-.91 98.74 42.02 99.96 96.09"
              style={{
                fill: '#fff',
                strokeWidth: '3.35px',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                stroke: '#000',
              }}
            />
            <circle
              id="e"
              cx="272.1"
              cy="215.29"
              r="90"
              style={{
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                stroke: '#000',
                fill: '#00f59f',
                strokeWidth: '1.89px',
              }}
            />
            <g id="Hoerer">
              <path
                id="g"
                d="M279.56 16.47c124.22-.27 222.16 56.42 242.32 107.74 4.46 11.35-2.51 24-14.47 26.38-16.95 3.37-45.01 3.61-86.74 7.37-3.34.3-6.75-.29-9.66-1.96-15.01-8.64-4.38-34.47 1.96-49.83 1.31-3.16.3-6.8-2.47-8.81-11.54-8.37-47.24-27.71-130.37-27.2-85.56.39-129.81 23.63-144.05 31.5a5.594 5.594 0 0 0-2.13 7.69c23.03 40.03 8.91 44.48-11.44 46.62-83.7 4.61-97.83 15.91-105.17-7.26C-1.89 88.24 141.16 17.3 279.56 16.47Z"
                style={{
                  fill: '#f50057',
                  strokeWidth: '2.25px',
                  strokeMiterlimit: '11.34',
                  stroke: '#000',
                }}
              />
              <path
                id="h"
                d="m15.73 129.32 123.56-9.91 1.5 1.96-124.93 11-.12-3.05Z"
                style={{
                  strokeWidth: '.74px',
                  strokeMiterlimit: '11.34',
                  stroke: '#000',
                }}
              />
              <path
                id="i"
                d="M406.53 127c102.64-6.38 64.61-4.16 114.59-6.98l1.36 3.22-116.63 9.36.68-5.6Z"
                style={{
                  strokeMiterlimit: '11.34',
                  strokeWidth: '.6px',
                  stroke: '#000',
                }}
              />
            </g>
          </g>
          <g id="j">
            <g
              id="Feld2"
              className="aq"
              onClick={() => {
                dialNumber('2')
              }}
            >
              <rect id="l" className="al" x="256.37" y="146.36" width="29.25" height="29.73" rx="8.25" ry="8.25" />
              <g className="aq">
                <path
                  className="an"
                  d="M271.53 153.76c-.4 0-.76.07-1.09.22-.33.15-.64.34-.93.57-.29.23-.56.5-.79.79-.24.3-.46.6-.66.9l-1.47-1.74c.34-.42.69-.83 1.04-1.22.35-.39.72-.73 1.12-1.03.4-.3.83-.54 1.31-.71.47-.17.99-.25 1.57-.25 1.64 0 2.94.49 3.9 1.47s1.44 2.29 1.44 3.94c0 .58-.1 1.15-.3 1.71-.2.56-.45 1.11-.75 1.64s-.62 1.04-.97 1.53-.69.97-1 1.43l-4.95 7.12h8.31v2.4h-13.05l8.43-11.91c.22-.32.45-.64.7-.96.25-.32.48-.65.68-.99.2-.34.36-.69.5-1.06.13-.37.19-.75.19-1.16 0-.44-.09-.83-.27-1.17-.18-.34-.42-.62-.72-.85-.3-.23-.64-.4-1.02-.51s-.78-.17-1.2-.17Z"
                />
              </g>
            </g>
            <g
              id="Feld1"
              className="aq"
              onClick={() => {
                dialNumber('1')
              }}
            >
              <rect id="n" className="al" x="219.26" y="146.28" width="29.25" height="29.73" rx="9.33" ry="9.33" />
              <g className="aq">
                <path className="an" d="m231.16 158.19-1.92-1.71 5.1-5.52v21.75h-2.43v-15.3l-.75.78Z" />
              </g>
            </g>
            <g
              id="Feld3"
              className="aq"
              onClick={() => {
                dialNumber('3')
              }}
            >
              <rect id="p" className="al" x="293.9" y="146.88" width="29.25" height="29.73" rx="9.57" ry="9.57" />
              <g className="aq">
                <path
                  className="an"
                  d="M312.14 165.98c0-1.14-.19-2.02-.56-2.65-.37-.63-.86-1.09-1.47-1.38-.61-.29-1.33-.46-2.15-.51-.82-.05-1.68-.08-2.58-.08l5.58-7.62h-7.86v-2.31h12.21l-5.88 8.16c1.78.28 3.09.97 3.93 2.06.84 1.09 1.26 2.52 1.26 4.27 0 1.18-.17 2.19-.5 3.03s-.81 1.53-1.44 2.07-1.4.94-2.29 1.19c-.9.25-1.91.38-3.03.38-.92 0-1.8-.15-2.66-.45-.85-.3-1.64-.71-2.38-1.23l1.44-2.04c.58.34 1.18.62 1.81.86s1.29.34 1.96.34 1.31-.08 1.88-.23c.57-.15 1.05-.39 1.46-.72.4-.33.71-.75.93-1.26.22-.51.33-1.13.33-1.88Z"
                />
              </g>
            </g>
            <g
              id="Feld4"
              className="aq"
              onClick={() => {
                dialNumber('4')
              }}
            >
              <rect id="r" className="al" x="218.91" y="181.53" width="29.25" height="29.73" rx="8.83" ry="8.83" />
              <g className="aq">
                <path className="an" d="m237.84 186.39-8.58 13.14h4.95v-3.73l2.37-3.83v7.53h2.55v2.46h-2.52v4.71h-2.46v-4.74h-9.27l11.13-16.86 1.83 1.32Z" />
              </g>
            </g>
            <g
              id="Feld5"
              className="aq"
              onClick={() => {
                dialNumber('5')
              }}
            >
              <rect id="t" className="al" x="256.63" y="181.53" width="29.25" height="29.73" rx="9.19" ry="9.19" />
              <g className="aq">
                <path
                  className="an"
                  d="M274.67 200.21c0-.86-.13-1.56-.41-2.12-.27-.55-.63-.98-1.08-1.3s-.97-.55-1.56-.71-1.21-.24-1.84-.29c-.64-.04-1.29-.05-1.95-.03s-1.28.03-1.86.03l1.23-10.14h8.36v2.4h-6.23l-.75 5.55c1.14 0 2.22.09 3.25.27 1.03.18 1.93.52 2.71 1.01s1.4 1.16 1.86 2.02.7 1.96.7 3.3c0 1-.15 1.91-.46 2.73-.31.82-.75 1.52-1.32 2.1a5.94 5.94 0 0 1-2.08 1.35c-.81.32-1.72.48-2.71.48-.84 0-1.65-.13-2.42-.41a6.7 6.7 0 0 1-2.12-1.21l1.86-1.89c.38.28.79.53 1.24.73.45.21.92.32 1.4.32.6 0 1.16-.1 1.67-.32.51-.21.95-.5 1.32-.87.37-.37.66-.82.87-1.34.21-.52.32-1.08.32-1.68Z"
                />
              </g>
            </g>
            <g
              id="Feld6"
              className="aq"
              onClick={() => {
                dialNumber('6')
              }}
            >
              <rect id="v" className="al" x="293.64" y="180.96" width="29.25" height="29.73" rx="9.62" ry="9.62" />
              <g className="aq">
                <path
                  className="an"
                  d="M302 199.88c0-.54.08-1.07.25-1.59s.38-1.02.62-1.5l5.88-11.97h2.52l-4.41 8.76c.28-.12.56-.2.85-.25s.58-.07.89-.07c.92 0 1.78.17 2.58.51.8.34 1.5.81 2.1 1.41s1.07 1.31 1.41 2.12c.34.81.51 1.67.51 2.59s-.17 1.78-.51 2.58c-.34.8-.81 1.5-1.41 2.1-.6.6-1.3 1.07-2.1 1.41-.8.34-1.66.51-2.58.51s-1.78-.17-2.58-.51c-.8-.34-1.5-.81-2.1-1.41s-1.07-1.3-1.41-2.1c-.34-.8-.51-1.66-.51-2.58Zm6.57-4.23c-1.24 0-2.25.38-3.04 1.14-.79.76-1.19 1.78-1.19 3.04 0 .6.11 1.16.32 1.69.21.52.5.97.88 1.36s.83.68 1.35.89c.52.21 1.08.32 1.68.32s1.16-.1 1.67-.32.96-.5 1.35-.86c.39-.36.7-.8.92-1.31.22-.51.33-1.07.33-1.67s-.1-1.19-.31-1.72-.51-.97-.89-1.35-.83-.68-1.35-.89c-.52-.21-1.09-.32-1.71-.32Z"
                />
              </g>
            </g>
            <g
              id="Feld0"
              className="aq"
              onClick={() => {
                dialNumber('0')
              }}
            >
              <rect id="x" className="al" x="256.69" y="248.26" width="29.25" height="29.73" rx="8.85" ry="8.85" />
              <g className="aq">
                <path
                  className="an"
                  d="M271.57 273.03c-1.62 0-2.93-.32-3.94-.97-1.01-.65-1.8-1.5-2.37-2.54-.57-1.04-.96-2.21-1.16-3.53-.2-1.31-.3-2.61-.3-3.91s.1-2.6.31-3.9c.21-1.3.6-2.47 1.17-3.53.57-1.05 1.36-1.9 2.37-2.55 1.01-.65 2.32-.98 3.92-.98s2.88.33 3.89.99a7.04 7.04 0 0 1 2.37 2.57c.57 1.05.96 2.23 1.17 3.52a24.596 24.596 0 0 1 0 7.77c-.21 1.3-.6 2.47-1.17 3.51a7.062 7.062 0 0 1-2.37 2.55c-1.01.66-2.31.99-3.89.99Zm0-19.44c-1.18 0-2.11.28-2.79.82-.68.55-1.2 1.25-1.54 2.09s-.58 1.75-.67 2.74c-.1.99-.15 1.94-.15 2.84s.05 1.84.15 2.83c.1.99.33 1.91.67 2.75.35.84.87 1.54 1.54 2.08.68.55 1.61.83 2.79.83s2.11-.27 2.79-.83a5.07 5.07 0 0 0 1.53-2.08c.34-.84.55-1.76.64-2.75.09-.99.14-1.93.14-2.83s-.04-1.82-.14-2.82c-.09-1-.3-1.92-.64-2.76s-.85-1.54-1.53-2.09c-.68-.55-1.61-.82-2.79-.82Z"
                />
              </g>
            </g>
            <g
              id="Feldstern"
              className="aq"
              onClick={() => {
                dialNumber('*')
              }}
            >
              <rect id="a`" className="al" x="219.39" y="248.52" width="29.25" height="29.73" rx="9.85" ry="9.85" />
              <g className="aq">
                <path className="an" d="M235.38 254.49v6l5.6-1.8 1.3 4-5.7 1.9 3.5 4.8-3.4 2.5-3.5-4.8-3.5 4.8-3.4-2.5 3.5-4.8-5.7-1.9 1.3-4 5.7 1.9v-6.1h4.3Z" />
              </g>
            </g>
            <g
              id="Feldraute"
              className="aq"
              onClick={() => {
                dialNumber('#')
              }}
            >
              <rect id="ab" className="al" x="293.73" y="248.52" width="29.25" height="29.73" rx="9.98" ry="9.98" />
              <g className="aq">
                <path
                  className="an"
                  d="M306.91 252.04v5.6h3.6v-5.6h3.12v5.6h2.32v3.64h-2.32v3.28h2.32v3.52h-2.32v5.96h-3.12v-5.96h-3.6v5.96h-3.08v-5.96h-2.32v-3.52h2.32v-3.32h-2.32v-3.6h2.32v-5.6h3.08Zm0 12.52h3.6v-3.28h-3.6v3.28Z"
                />
              </g>
            </g>
            <g
              id="Feld7"
              className="aq"
              onClick={() => {
                dialNumber('7')
              }}
            >
              <rect id="ad" className="al" x="219.14" y="215.12" width="29.25" height="29.73" rx="8.88" ry="8.88" />
              <g className="aq">
                <path className="an" d="m239.71 219.34-9.69 20.67h-2.64l8.46-18.27h-7.68v-2.4h11.55Z" />
              </g>
            </g>
            <g
              id="Feld8"
              className="aq"
              onClick={() => {
                dialNumber('8')
              }}
            >
              <rect id="af" className="al" x="256.63" y="215.38" width="29.25" height="29.73" rx="9.5" ry="9.5" />
              <g className="aq">
                <path
                  className="an"
                  d="M275.51 228.73c.7.62 1.25 1.33 1.63 2.13.39.8.58 1.68.58 2.64s-.17 1.78-.49 2.58c-.33.8-.78 1.5-1.35 2.1s-1.25 1.07-2.05 1.41c-.8.34-1.66.51-2.58.51s-1.77-.17-2.55-.51c-.78-.34-1.46-.8-2.04-1.39s-1.04-1.29-1.37-2.09c-.33-.8-.5-1.65-.5-2.55 0-1.88.7-3.46 2.1-4.74-1.08-1.14-1.62-2.5-1.62-4.08 0-.8.15-1.56.46-2.28.31-.72.73-1.34 1.26-1.86s1.15-.93 1.86-1.24c.71-.31 1.47-.47 2.29-.47s1.55.16 2.26.47c.71.31 1.33.72 1.86 1.24s.95 1.14 1.26 1.85c.31.71.46 1.46.46 2.26 0 .74-.12 1.46-.38 2.15a5.83 5.83 0 0 1-1.12 1.88Zm-4.23 1.02c-.56 0-1.08.11-1.56.31-.48.21-.9.5-1.26.86s-.64.79-.86 1.28c-.21.49-.31 1.01-.31 1.57s.1 1.08.31 1.56.5.9.86 1.26.78.64 1.26.86c.48.21 1 .31 1.56.31s1.08-.11 1.57-.31a4.06 4.06 0 0 0 2.14-2.12c.21-.48.31-1 .31-1.56s-.1-1.08-.31-1.57-.5-.92-.86-1.28-.79-.64-1.28-.86c-.49-.21-1.01-.31-1.57-.31Zm-.06-8.43c-.46 0-.9.09-1.3.27-.41.18-.76.43-1.07.73-.3.31-.54.67-.72 1.08-.18.41-.27.85-.27 1.31s.09.9.27 1.3c.18.41.42.78.72 1.09.3.32.66.57 1.07.75.41.18.84.27 1.3.27s.92-.09 1.33-.27c.41-.18.77-.43 1.07-.75.3-.32.54-.68.72-1.09.18-.41.27-.84.27-1.3s-.09-.9-.27-1.31c-.18-.41-.42-.77-.74-1.08a3.49 3.49 0 0 0-1.08-.73c-.41-.18-.85-.27-1.31-.27Z"
                />
              </g>
            </g>
            <g
              id="Feld9"
              className="aq"
              onClick={() => {
                dialNumber('9')
              }}
            >
              <rect id="ah" className="al" x="293.9" y="215.72" width="29.25" height="29.73" rx="9.63" ry="9.63" />
              <g className="aq">
                <path
                  className="an"
                  d="M315.29 225c0 .32-.01.64-.04.96s-.1.62-.22.9l-5.97 13.41h-2.52l4.29-9.42c-.26.12-.53.2-.81.24-.28.04-.56.06-.84.06-.86 0-1.66-.16-2.4-.48a6.18 6.18 0 0 1-1.94-1.3c-.55-.55-.98-1.2-1.29-1.95-.31-.75-.46-1.55-.46-2.42s.16-1.63.46-2.38c.31-.75.74-1.4 1.29-1.95s1.2-.99 1.94-1.31c.74-.32 1.54-.48 2.4-.48s1.66.16 2.4.48c.74.32 1.38.75 1.93 1.31.55.55.99 1.2 1.31 1.93.32.74.48 1.54.48 2.4Zm-2.37.02c0-.52-.09-1.01-.28-1.48-.19-.46-.45-.86-.78-1.19-.33-.33-.72-.59-1.18-.78-.46-.19-.95-.29-1.46-.29s-1 .09-1.45.27-.84.44-1.18.77c-.34.33-.6.72-.79 1.17-.19.45-.28.94-.28 1.46s.09 1.01.28 1.48a3.516 3.516 0 0 0 1.96 1.97c.46.19.95.29 1.46.29 1.08 0 1.96-.34 2.66-1.01.7-.67 1.05-1.56 1.05-2.67Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </Grid>
      <Grid
        item
        sx={{
          flexGrow: 1,
          maxWidth: '300px',
        }}
      >
        <List dense={true} sx={{ py: 0, border: '4px solid black', backgroundColor: 'background.default', color: 'text.primary', transform: [, , 'rotate(5deg)'] }}>
          {names.map((element, index) => (
            <ListItem
              key={index}
              sx={{ py: 0, pl: 0 }}
              secondaryAction={
                isElementActive(element) ? (
                  <IconButton edge="end" aria-label="play" disabled>
                    <MusicNoteIcon sx={{ fontSize: '1.5rem', color: 'accent.main' }} />
                  </IconButton>
                ) : (
                  <IconButton edge="end" aria-label="play" disabled></IconButton>
                )
              }
            >
              <ListItemText sx={{ mx: '.75rem', flex: '0 0 49%' }} primary={element.name} primaryTypographyProps={{ fontSize: '1.2rem' }} />
              <Box
                sx={{
                  height: '40px',
                  borderLeft: '4px solid #000',
                }}
              />
              <ListItemText sx={{ flex: '0 0 49%', mx: '2rem' }} primary={element.value} primaryTypographyProps={{ fontSize: '1.2rem' }} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}

export default RevolutionTelephone

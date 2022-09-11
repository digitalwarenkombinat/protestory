import { useState } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

const RevolutionTelephone = () => {
  const [telephoneNumber, setTelephoneNumber] = useState('')

  function dialNumber(digit: string) {
    return setTelephoneNumber((previousNumber) =>
      previousNumber.concat(digit)
    )
  }

  return (
    <Grid
      container
      alignItems="center"
      textAlign="center"
      flexWrap="wrap"
      justifyContent="center"
      my="2em"
    >
      <Grid item>
        <Typography component="h2" variant="h2">
          {telephoneNumber}
        </Typography>
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
                filter: drop-shadow(-3px 3px 3px rgba(0, 0, 0, 0.7));
              }
              #Hoerer {
                  transform-origin: 50% 50%;
                  animation: ring 2s ease 10s infinite;
                  transform: rotate(0deg);
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
        <svg
          id="Revolutionstelefon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 509.9 325.28"
        >
          <g id="Telefon">
            <path
              id="Roterumriss"
              d="M155.91 97.16c-16.84 20.39-117.65 225.32-7.23 226.1 113.33.79 101.72.57 219.84.56 105.14 0 11.87-208-2.26-228.31-14.7-32.78-176.83-38.95-210.35 1.65Z"
              style={{
                strokeWidth: '2.85px',
                strokeMiterlimit: '11.34',
                stroke: '#000',
                fill: '#f50057',
              }}
            />
            <path
              id="Weisserinnenkreis"
              d="M355.53 200.69a98.54 98.54 0 1 1 0-2.22"
              style={{
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                fill: '#fff',
                strokeWidth: '3.35px',
                stroke: '#000',
              }}
            />
            <circle
              id="Gruenerkreis"
              cx="257.64"
              cy="199.94"
              r="90"
              style={{
                fill: '#00f59f',
                strokeWidth: '1.89px',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                stroke: '#000',
              }}
            />
            <g id="Hoerer">
              <path
                id="Hoererknochen"
                d="M265.1 1.13C389.31.86 487.26 57.55 507.42 108.87A19.64 19.64 0 0 1 493 135.25c-17 3.37-45 3.61-86.75 7.36a16.44 16.44 0 0 1-9.66-2c-15-8.64-4.38-34.48 2-49.83A7.38 7.38 0 0 0 396 82c-11.54-8.37-47.23-27.71-130.37-27.2-85.56.39-129.81 23.64-144 31.51a5.59 5.59 0 0 0-2.15 7.69c23 40 8.92 44.48-11.44 46.62-83.7 4.61-97.83 15.91-105.17-7.26C-16.35 72.9 126.7 2 265.1 1.13Z"
                style={{
                  strokeWidth: '2.25px',
                  strokeMiterlimit: '11.34',
                  stroke: '#000',
                  fill: '#f50057',
                }}
              />
              <path
                id="Strichlinks"
                d="m1.27 114 123.56-9.9 1.5 2L1.39 117Z"
                style={{
                  strokeWidth: '.74px',
                  strokeMiterlimit: '11.34',
                  stroke: '#000',
                }}
              />
              <path
                id="Strichrechts"
                d="M392.07 111.66c102.64-6.39 64.61-4.17 114.59-7l1.34 3.24-116.63 9.36Z"
                style={{
                  strokeWidth: '.6px',
                  strokeMiterlimit: '11.34',
                  stroke: '#000',
                }}
              />
            </g>
          </g>
          <g id="Tastenfeld">
            <g
              id="Feld2"
              className="cls-7"
              onClick={() => {
                dialNumber('2')
              }}
            >
              <rect
                id="Taste2"
                className="cls-8"
                x="241.91"
                y="131.01"
                width="29.25"
                height="29.73"
                rx="8.25"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="M257.07 138.41a2.59 2.59 0 0 0-1.09.23 4.47 4.47 0 0 0-.93.57 5 5 0 0 0-.8.79q-.36.45-.66.9l-1.47-1.74c.34-.42.69-.82 1-1.21a7.81 7.81 0 0 1 1.12-1 5 5 0 0 1 1.31-.7 4.57 4.57 0 0 1 1.57-.26 5.21 5.21 0 0 1 3.9 1.47 5.41 5.41 0 0 1 1.44 3.94 5 5 0 0 1-.3 1.71 10.5 10.5 0 0 1-.75 1.64 17.2 17.2 0 0 1-1 1.53l-1 1.43-5 7.12h8.31v2.4h-13l8.43-11.91c.22-.32.46-.64.71-1a9.06 9.06 0 0 0 .67-1 6 6 0 0 0 .5-1.06 3.48 3.48 0 0 0 .19-1.16 2.46 2.46 0 0 0-.27-1.17 2.57 2.57 0 0 0-.72-.85 3.06 3.06 0 0 0-1-.51 4.3 4.3 0 0 0-1.16-.16Z"
                />
              </g>
            </g>
            <g
              id="Feld1"
              className="cls-7"
              onClick={() => {
                dialNumber('1')
              }}
            >
              <rect
                id="Taste1"
                className="cls-8"
                x="204.8"
                y="130.93"
                width="29.25"
                height="29.73"
                rx="9.33"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="m216.7 142.84-1.92-1.71 5.1-5.52v21.75h-2.43v-15.3Z"
                />
              </g>
            </g>
            <g
              id="Feld3"
              className="cls-7"
              onClick={() => {
                dialNumber('3')
              }}
            >
              <rect
                id="Taste3"
                className="cls-8"
                x="279.44"
                y="131.54"
                width="29.25"
                height="29.73"
                rx="9.57"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="M297.68 150.64a5.3 5.3 0 0 0-.55-2.66 3.36 3.36 0 0 0-1.47-1.38 5.81 5.81 0 0 0-2.15-.51c-.82-.05-1.68-.07-2.58-.07l5.58-7.62h-7.86v-2.31h12.21l-5.86 8.16a5.87 5.87 0 0 1 3.93 2.05 6.83 6.83 0 0 1 1.26 4.28 8.3 8.3 0 0 1-.49 3 5.15 5.15 0 0 1-1.44 2.07 5.91 5.91 0 0 1-2.3 1.18 11.31 11.31 0 0 1-3 .38 7.89 7.89 0 0 1-2.65-.45 9.84 9.84 0 0 1-2.39-1.23l1.44-2a11.15 11.15 0 0 0 1.82.85 5.66 5.66 0 0 0 2 .35 7.39 7.39 0 0 0 1.88-.23 3.73 3.73 0 0 0 1.45-.72 3.29 3.29 0 0 0 .93-1.26 4.71 4.71 0 0 0 .24-1.88Z"
                />
              </g>
            </g>
            <g
              id="Feld4"
              className="cls-7"
              onClick={() => {
                dialNumber('4')
              }}
            >
              <rect
                id="Taste4"
                className="cls-8"
                x="204.45"
                y="166.18"
                width="29.25"
                height="29.73"
                rx="8.83"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="m223.38 171-8.58 13.15h4.95v-3.74l2.37-3.82v7.53h2.55v2.46h-2.52v4.71h-2.46v-4.74h-9.27l11.13-16.86Z"
                />
              </g>
            </g>
            <g
              id="Feld5"
              className="cls-7"
              onClick={() => {
                dialNumber('5')
              }}
            >
              <rect
                id="Taste5"
                className="cls-8"
                x="242.17"
                y="166.18"
                width="29.25"
                height="29.73"
                rx="9.19"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="M260.21 184.86a4.78 4.78 0 0 0-.4-2.11 3.42 3.42 0 0 0-1.08-1.31 4.62 4.62 0 0 0-1.56-.7 10.06 10.06 0 0 0-1.85-.29q-1-.06-1.95 0h-1.86l1.23-10.14h8.36v2.4h-6.23l-.75 5.55a19 19 0 0 1 3.26.27 7.44 7.44 0 0 1 2.71 1 5.42 5.42 0 0 1 1.86 2 7 7 0 0 1 .69 3.3 7.67 7.67 0 0 1-.46 2.73 5.69 5.69 0 0 1-1.32 2.1 5.9 5.9 0 0 1-2.07 1.35 7.36 7.36 0 0 1-2.72.48 7.21 7.21 0 0 1-2.41-.4 6.93 6.93 0 0 1-2.12-1.22l1.86-1.87a7.35 7.35 0 0 0 1.25.74 3.24 3.24 0 0 0 1.39.31 4.35 4.35 0 0 0 1.67-.31 4 4 0 0 0 1.32-.87 4.08 4.08 0 0 0 .87-1.34 4.44 4.44 0 0 0 .31-1.67Z"
                />
              </g>
            </g>
            <g
              id="Feld6"
              className="cls-7"
              onClick={() => {
                dialNumber('6')
              }}
            >
              <rect
                id="Taste6"
                className="cls-8"
                x="279.18"
                y="165.62"
                width="29.25"
                height="29.73"
                rx="9.62"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="M287.54 184.53a5.09 5.09 0 0 1 .26-1.59 11 11 0 0 1 .61-1.5l5.88-12h2.52l-4.41 8.76a3.83 3.83 0 0 1 .86-.25 5.14 5.14 0 0 1 .88-.08 6.52 6.52 0 0 1 6.09 4 6.61 6.61 0 0 1 .51 2.59 6.6 6.6 0 1 1-13.2 0Zm6.57-4.23a4.21 4.21 0 0 0-3 1.15 4 4 0 0 0-1.19 3 4.45 4.45 0 0 0 .32 1.68 3.94 3.94 0 0 0 .88 1.36 4 4 0 0 0 1.35.89 4.44 4.44 0 0 0 1.68.31 4.35 4.35 0 0 0 1.67-.31 4.51 4.51 0 0 0 1.35-.86 3.81 3.81 0 0 0 .91-1.31 4.18 4.18 0 0 0 .33-1.67 4.61 4.61 0 0 0-.31-1.72 4 4 0 0 0-2.24-2.24 4.53 4.53 0 0 0-1.75-.28Z"
                />
              </g>
            </g>
            <g
              id="Feld0"
              className="cls-7"
              onClick={() => {
                dialNumber('0')
              }}
            >
              <rect
                id="Taste0"
                className="cls-8"
                x="242.23"
                y="232.91"
                width="29.25"
                height="29.73"
                rx="8.85"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="M257.11 257.69a7.16 7.16 0 0 1-3.94-1 6.76 6.76 0 0 1-2.37-2.53 10.41 10.41 0 0 1-1.16-3.53 25.84 25.84 0 0 1-.3-3.91 24.41 24.41 0 0 1 .31-3.9 11 11 0 0 1 1.18-3.53 6.8 6.8 0 0 1 2.36-2.55 7.14 7.14 0 0 1 3.92-1 6.59 6.59 0 0 1 6.25 3.55 11.3 11.3 0 0 1 1.18 3.53 24.5 24.5 0 0 1 0 7.77 11.09 11.09 0 0 1-1.18 3.51 6.61 6.61 0 0 1-6.25 3.54Zm0-19.44a4.31 4.31 0 0 0-2.79.82 5.24 5.24 0 0 0-1.55 2.09 9.91 9.91 0 0 0-.67 2.74 26.87 26.87 0 0 0 0 5.67 10 10 0 0 0 .67 2.75 5.2 5.2 0 0 0 1.55 2.08 5.1 5.1 0 0 0 5.58 0 5.07 5.07 0 0 0 1.53-2.08 9.62 9.62 0 0 0 .64-2.75 28 28 0 0 0 .14-2.83c0-.88 0-1.82-.14-2.82a9.61 9.61 0 0 0-.64-2.76 5.1 5.1 0 0 0-1.53-2.09 4.31 4.31 0 0 0-2.79-.82Z"
                />
              </g>
            </g>
            <g
              id="Feldstern"
              className="cls-7"
              onClick={() => {
                dialNumber('*')
              }}
            >
              <rect
                id="Tastestern"
                className="cls-8"
                x="204.93"
                y="233.17"
                width="29.25"
                height="29.73"
                rx="9.85"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="M220.92 239.14v6l5.6-1.8 1.3 4-5.7 1.9 3.5 4.8-3.4 2.5-3.5-4.8-3.5 4.8-3.4-2.5 3.5-4.8-5.7-1.9 1.3-4 5.7 1.9v-6.1Z"
                />
              </g>
            </g>
            <g
              id="Feldraute"
              className="cls-7"
              onClick={() => {
                dialNumber('#')
              }}
            >
              <rect
                id="Tasteraute"
                className="cls-8"
                x="279.27"
                y="233.17"
                width="29.25"
                height="29.73"
                rx="9.98"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="M292.45 236.69v5.6h3.6v-5.6h3.12v5.6h2.32v3.64h-2.32v3.28h2.32v3.52h-2.32v6h-3.12v-6h-3.6v6h-3.08v-6h-2.32v-3.52h2.32v-3.32h-2.32v-3.6h2.32v-5.6Zm0 12.52h3.6v-3.28h-3.6Z"
                />
              </g>
            </g>
            <g
              id="Feld7"
              className="cls-7"
              onClick={() => {
                dialNumber('7')
              }}
            >
              <rect
                id="Taste7"
                className="cls-8"
                x="204.68"
                y="199.77"
                width="29.25"
                height="29.73"
                rx="8.88"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="m225.25 204-9.69 20.67h-2.64l8.46-18.27h-7.68V204Z"
                />
              </g>
            </g>
            <g
              id="Feld8"
              className="cls-7"
              onClick={() => {
                dialNumber('8')
              }}
            >
              <rect
                id="Taste8"
                className="cls-8"
                x="242.17"
                y="200.03"
                width="29.25"
                height="29.73"
                rx="9.5"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="M261.05 213.38a6.81 6.81 0 0 1 1.63 2.13 6 6 0 0 1 .59 2.64 6.79 6.79 0 0 1-1.85 4.68 6.05 6.05 0 0 1-2.05 1.41 6.53 6.53 0 0 1-2.58.51 6.31 6.31 0 0 1-2.55-.51 6.37 6.37 0 0 1-3.41-3.48 6.62 6.62 0 0 1-.49-2.55 6.17 6.17 0 0 1 2.1-4.74 5.87 5.87 0 0 1 .1-8.22 6.12 6.12 0 0 1 1.86-1.25 5.7 5.7 0 0 1 2.3-.47 5.58 5.58 0 0 1 2.3.47 6.12 6.12 0 0 1 1.86 1.24 5.84 5.84 0 0 1 1.26 1.85 5.58 5.58 0 0 1 .47 2.26 6.28 6.28 0 0 1-.38 2.15 5.68 5.68 0 0 1-1.16 1.88Zm-4.23 1a3.85 3.85 0 0 0-1.56.32 4 4 0 0 0-2.12 2.13 3.93 3.93 0 0 0-.31 1.57 3.85 3.85 0 0 0 .31 1.56 4.11 4.11 0 0 0 2.12 2.12 3.85 3.85 0 0 0 1.56.31 3.93 3.93 0 0 0 1.57-.31 4 4 0 0 0 2.13-2.12 3.85 3.85 0 0 0 .32-1.56 3.93 3.93 0 0 0-.32-1.57 3.88 3.88 0 0 0-2.13-2.13 3.93 3.93 0 0 0-1.57-.3Zm-.06-8.43a3.23 3.23 0 0 0-1.31.27 3.32 3.32 0 0 0-1.06.74 3.64 3.64 0 0 0-.72 1.08 3.19 3.19 0 0 0-.27 1.3 3.23 3.23 0 0 0 .27 1.31 3.83 3.83 0 0 0 .72 1.09 3.19 3.19 0 0 0 1.06.75 3.3 3.3 0 0 0 3.71-.75 3.83 3.83 0 0 0 .72-1.09 3.23 3.23 0 0 0 .27-1.31 3.19 3.19 0 0 0-.27-1.3 3.56 3.56 0 0 0-1.82-1.82 3.19 3.19 0 0 0-1.3-.22Z"
                />
              </g>
            </g>
            <g
              id="Feld9"
              className="cls-7"
              onClick={() => {
                dialNumber('9')
              }}
            >
              <rect
                id="Taste9"
                className="cls-8"
                x="279.44"
                y="200.37"
                width="29.25"
                height="29.73"
                rx="9.63"
              />
              <g className="cls-7">
                <path
                  className="cls-9"
                  d="M300.83 209.65c0 .32 0 .64-.05 1a3 3 0 0 1-.22.9l-6 13.41h-2.52l4.29-9.42a2.9 2.9 0 0 1-.81.24 6.15 6.15 0 0 1-3.24-.42 6.18 6.18 0 0 1-1.94-1.3 5.93 5.93 0 0 1-1.29-2 6.28 6.28 0 0 1-.46-2.42 6.15 6.15 0 0 1 .46-2.38 5.93 5.93 0 0 1 1.29-2 6.21 6.21 0 0 1 1.94-1.31 6.24 6.24 0 0 1 4.8 0 6.21 6.21 0 0 1 3.24 3.24 6 6 0 0 1 .51 2.46Zm-2.37 0a3.9 3.9 0 0 0-.29-1.48 3.46 3.46 0 0 0-1.95-2 3.82 3.82 0 0 0-1.47-.29 3.62 3.62 0 0 0-3.7 3.68 3.9 3.9 0 0 0 .28 1.48 3.57 3.57 0 0 0 .78 1.18 3.45 3.45 0 0 0 1.18.79 3.79 3.79 0 0 0 1.46.28 3.66 3.66 0 0 0 2.66-1 3.55 3.55 0 0 0 1.05-2.62Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </Grid>
    </Grid>
  )
}

export default RevolutionTelephone

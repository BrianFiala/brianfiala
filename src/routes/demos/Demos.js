import { h, render } from 'preact';
import { useContext } from 'preact/hooks';
import style from './demos.scss'
import Stocks from '../../components/stocks/Stocks'
import Weather from '../../components/weather/Weather'
import MyResponsiveLine from '../../components/responsive-line-graph/MyResponsiveLine'
import { Theme } from '../../context/ThemeContext';

// let stock = {
//   "c":[45.025,44.815,44.805,44.985,45.285,45.32,44.675,44.47,44.2],
//   "h":[45.235,45.14,45.045,45.215,45.43,45.5,45.29,44.825,44.555],
//   "l":[44.03,44.625,44.685,44.77,44.815,44.92,44.585,44.265,44.05],
//   "o":[44.5,44.995,44.83,44.81,44.975,45.345,45.29,44.68,44.48],
//   "s":"ok",
//   "t":[1585897200,1585900800,1585904400,1585908000,1585911600,1585915200,1585918800,1585922400,1585926000],
//   "v":[0,156726,228712,138121,166738,287855,265073,370750,275611]
// }

let data = [
  {
    id: 'HD',
    data: [
      {
        y: 45.025,
        x: 1585897200
      },
      {
        y: 44.815,
        x: 1585900800
      },
      {
        y: 44.805,
        x: 1585904400
      },
      {
        y: 44.985,
        x: 1585908000
      },
      {
        y: 45.285,
        x: 1585911600
      },
      {
        y: 45.32,
        x: 1585915200
      },
      {
        y: 44.675,
        x: 1585918800
      },
      {
        y: 44.47,
        x: 1585922400
      },
      {
        y: 44.2,
        x: 1585926000
      },
    ]
  }
]

// const data = [
//   {
//     id: 'japan',
//     color: 'hsl(122, 70%, 50%)',
//     data: [
//       {
//         x: 'plane',
//         y: 232
//       },
//       {
//         x: 'helicopter',
//         y: 67
//       },
//       {
//         x: 'boat',
//         y: 141
//       },
//       {
//         x: 'train',
//         y: 57
//       },
//       {
//         x: 'subway',
//         y: 208
//       },
//       {
//         x: 'bus',
//         y: 111
//       },
//       {
//         x: 'car',
//         y: 256
//       },
//       {
//         x: 'moto',
//         y: 211
//       },
//       {
//         x: 'bicycle',
//         y: 69
//       },
//       {
//         x: 'horse',
//         y: 7
//       },
//       {
//         x: 'skateboard',
//         y: 106
//       },
//       {
//         x: 'others',
//         y: 119
//       }
//     ]
//   },
//   {
//     id: 'france',
//     color: 'hsl(97, 70%, 50%)',
//     data: [
//       {
//         x: 'plane',
//         y: 296
//       },
//       {
//         x: 'helicopter',
//         y: 292
//       },
//       {
//         x: 'boat',
//         y: 263
//       },
//       {
//         x: 'train',
//         y: 30
//       },
//       {
//         x: 'subway',
//         y: 260
//       },
//       {
//         x: 'bus',
//         y: 165
//       },
//       {
//         x: 'car',
//         y: 107
//       },
//       {
//         x: 'moto',
//         y: 27
//       },
//       {
//         x: 'bicycle',
//         y: 249
//       },
//       {
//         x: 'horse',
//         y: 62
//       },
//       {
//         x: 'skateboard',
//         y: 261
//       },
//       {
//         x: 'others',
//         y: 108
//       }
//     ]
//   },
//   {
//     id: 'us',
//     color: 'hsl(123, 70%, 50%)',
//     data: [
//       {
//         x: 'plane',
//         y: 16
//       },
//       {
//         x: 'helicopter',
//         y: 168
//       },
//       {
//         x: 'boat',
//         y: 116
//       },
//       {
//         x: 'train',
//         y: 125
//       },
//       {
//         x: 'subway',
//         y: 18
//       },
//       {
//         x: 'bus',
//         y: 216
//       },
//       {
//         x: 'car',
//         y: 32
//       },
//       {
//         x: 'moto',
//         y: 18
//       },
//       {
//         x: 'bicycle',
//         y: 101
//       },
//       {
//         x: 'horse',
//         y: 168
//       },
//       {
//         x: 'skateboard',
//         y: 157
//       },
//       {
//         x: 'others',
//         y: 142
//       }
//     ]
//   },
//   {
//     id: 'germany',
//     color: 'hsl(95, 70%, 50%)',
//     data: [
//       {
//         x: 'plane',
//         y: 160
//       },
//       {
//         x: 'helicopter',
//         y: 15
//       },
//       {
//         x: 'boat',
//         y: 51
//       },
//       {
//         x: 'train',
//         y: 171
//       },
//       {
//         x: 'subway',
//         y: 284
//       },
//       {
//         x: 'bus',
//         y: 152
//       },
//       {
//         x: 'car',
//         y: 239
//       },
//       {
//         x: 'moto',
//         y: 145
//       },
//       {
//         x: 'bicycle',
//         y: 217
//       },
//       {
//         x: 'horse',
//         y: 110
//       },
//       {
//         x: 'skateboard',
//         y: 69
//       },
//       {
//         x: 'others',
//         y: 150
//       }
//     ]
//   },
//   {
//     id: 'norway',
//     color: 'hsl(47, 70%, 50%)',
//     data: [
//       {
//         x: 'plane',
//         y: 136
//       },
//       {
//         x: 'helicopter',
//         y: 293
//       },
//       {
//         x: 'boat',
//         y: 125
//       },
//       {
//         x: 'train',
//         y: 154
//       },
//       {
//         x: 'subway',
//         y: 260
//       },
//       {
//         x: 'bus',
//         y: 109
//       },
//       {
//         x: 'car',
//         y: 232
//       },
//       {
//         x: 'moto',
//         y: 291
//       },
//       {
//         x: 'bicycle',
//         y: 300
//       },
//       {
//         x: 'horse',
//         y: 159
//       },
//       {
//         x: 'skateboard',
//         y: 112
//       },
//       {
//         x: 'others',
//         y: 208
//       }
//     ]
//   }
// ]

export default function Demos() {
  return (
    <div class={style.demos}>
      <Stocks />
      <Weather />
      <article class={style.graph}>
        <MyResponsiveLine data={data} areaBaselineValue={44.2} />
      </article>
    </div>
  )
}
Demos.displayName = 'Demos'
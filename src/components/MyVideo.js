import {h} from 'preact' /** @jsx h */
import MyPaper from './MyPaper'

export default function MyVideo() {

  return (
    <MyPaper unscrollable={true}>
      <video controls preload="metadata">
        <source src="//brianfiala.club/assets/videos/NM Rock Biking -- just the hard stuff.mp4" type="video/mp4" />
      </video>
    </MyPaper>
  )
}

import {h} from 'preact' /** @jsx h */
import {useStore} from '../../api/StoreProvider'
import MyResponsiveLine from '../MyResponsiveLine'
import StockGraphTitleBar from './StockGraphTitleBar'
import MyPaper from '../MyPaper'

export default function MyGraph() {
  const {stocks} = useStore()

  return (
    <MyPaper unscrollable={true}>
      <StockGraphTitleBar />
      <MyResponsiveLine
        height="200px"
        width="100%"
        data={stocks} />
    </MyPaper>
  )
}
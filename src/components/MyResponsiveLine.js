import {h} from 'preact' /** @jsx h */
import {ResponsiveLine} from '@nivo/line'
import {useTheme} from '@material-ui/styles'

export default function ResponsiveLineGraph({data, height, width}) {
  const theme = useTheme()
  theme.tooltip = {
    container: {
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      fontSize: 'inherit',
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[4],
      padding: theme.spacing(1)
    }
  }

  return (
    <section style={{
      height,
      width
    }}>
      <ResponsiveLine
        theme={theme}
        data={data}
        margin={{top: 30}}
        xScale={{type: 'point'}}
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
          stacked: false,
          reverse: false
        }}
        curve="natural"
        enableGridX={false}
        enableGridY={false}
        colors={{scheme: 'spectral'}}
        areaOpacity={theme.palette.type === 'dark' ? .15 : .3}
        enableSlices="x"
        enablePoints={false}
        enableArea={true} />
    </section>
  )
}
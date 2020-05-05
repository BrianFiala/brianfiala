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
        margin={{
          top: 30,
          right: 0,
          bottom: 40,
          left: 0
        }}
        xScale={{type: 'point'}}
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
          stacked: false,
          reverse: false
        }}
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors={{scheme: 'spectral'}}
        enablePoints={false}
        enableArea={true}
        areaOpacity={0.15}
        enableSlices="x"
        legends={[{
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 32,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [{
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }]
        }]}
      />
    </section>
  )
}
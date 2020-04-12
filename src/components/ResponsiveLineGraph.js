import { h } from 'preact' /** @jsx h */
import Title from './Title'
import { ResponsiveLine } from '@nivo/line'

export default function ResponsiveLineGraph({ data, height, width }) {
  return (
    <>
      <Title>Timeseries</Title>
      <section style={{ height, width }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 30, right: 20, bottom: 40, left: 20 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
          curve="natural"
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          colors={{ scheme: 'spectral' }}
          enablePoints={false}
          enableArea={true}
          areaOpacity={0.15}
          enableSlices="x"
          legends={[
            {
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
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </section>
    </>
  )
}
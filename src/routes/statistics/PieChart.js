import { ResponsivePie } from '@nivo/pie';

const PieChart = ({enableArcLinkLabels, data}) => {
return (
  <ResponsivePie
    theme={{
      textColor: '#001529',
      fontSize: 14,
    }}
    data={data}
    colors={['#0096FA', '#27A8FF', '#47B2FF', '#67C1FF', '#86CFFF', '#9DD3FA', '#BDE5FF', '#C3E1FF']}
    margin={{top: 40, right: 80, bottom: 80, left: 80}}
    innerRadius={0.4}
    padAngle={0.7}
    cornerRadius={3}
    enableArcLinkLabels={enableArcLinkLabels}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
    arcLabel={(e) => `${e.value}%`}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{from: 'color'}}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{from: 'color', modifiers: [['darker', 2]]}}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#001529',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
      },
    ]}
  />
)
};
export default PieChart;
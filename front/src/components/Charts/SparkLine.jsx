import React from 'react'
import {SparklineComponent, Inject,SparklineTooltip} from '@syncfusion/ej2-react-charts';
import {Resize} from '@syncfusion/ej2-react-grids'

const SparkLine = ({id,height,width,color,data,type,currentColor}) => {
  return (
    <SparklineComponent 
      id={id} 
      height={height} 
      width={width} 
      LineWidth={1} 
      valueType="Numeric" 
      fill={color} 
      border={{color:currentColor,width:2}}
      dataSource={data}
      xName="x"
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${yval}'
      }}
      IsResponsive="true"

      >
      <Inject services={[SparklineTooltip,Resize]} />
    </SparklineComponent>
  )
}

export default SparkLine
import React, { useRef, useEffect, useCallback } from 'react'

const CharCancvas = (props:any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas : HTMLCanvasElement = canvasRef.current
  // const measuredRef = useCallback(node => {
  //   if (node !== null) {
  //     canvas.getContext('2d')
  //   }
  // }, []);

  const XAXIS_PADDING = 10
  const YAXIS_PADDING = 25
  const DURATION = 1000 * 30
  const MAX_VALUE = 100
  const Y_THICK_COUNT = 5;
  const TOP_PADDING = 15;

  // 캔버스 크기/ 차트 크기
  let canvasWidth = 0 || canvas.clientWidth 
  let canvasHeight = 0 || canvas.clientHeight 
  let chartHight = canvasWidth - YAXIS_PADDING
  let chartWidth = canvasHeight - XAXIS_PADDING

  const draw = (ctx:CanvasRenderingContext2D) => {
    ctx.beginPath()
    ctx.moveTo(YAXIS_PADDING, 0)
    // YAXIS_PADDING 그리기
    ctx.lineTo(YAXIS_PADDING, canvasWidth)
    // XAXIS_PADDING
    ctx.lineTo(XAXIS_PADDING, canvasHeight)
    const yInterval = MAX_VALUE / (Y_THICK_COUNT - 1)
    for (let i = 0; i < Y_THICK_COUNT; i++) {
      const value = i * yInterval
      const yPoint = TOP_PADDING + chartHight - value / MAX_VALUE - chartHight
      ctx.fillText(value.toString(), 0, yPoint)
    }

    ctx.lineTo(canvasWidth, chartHight + TOP_PADDING)
    ctx.stroke()
  }

  useEffect(() => {
    const canvas : HTMLCanvasElement | null = canvasRef.current
    const context : CanvasRenderingContext2D | null = canvas.getContext('2d')
    if(!context) return 

    // 캔버스 크기 조절 해주는 함수
    const resizeCanvasToDisplaySize = (canvas:HTMLCanvasElement) => {
      const { width, height } = canvas.getBoundingClientRect()

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        return true 
      }

      return false
    }

    draw(context)
    resizeCanvasToDisplaySize(canvas)
    console.log('canvasWidth :>>', canvasWidth)
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default CharCancvas;

// class LineChartClass {
//   constructor(id) {
//     this.canvas = document.getElementById(id)
//     this.ctx = this.canvas.getContext("2d")

//     this.canvasWidth = this.canvas.clientWidth
//     this.canvasHeight = this.canvas.clientHeight
//     this.chartHight = this.canvasWidth - YAXIS_PADDING
//     this.chartWidth = this.canvasHeight - XAXIS_PADDING
//   }

//   setTime = () => { }

//   // 차트를 그리는 함수
//   drawChart = () => {
//     const {
//       ctx, canvasWidth, canvasHeight, chartHight, chartWidth
//     } = this

//     ctx.beginPath()
//     ctx.moveTo(YAXIS_PADDING, 0)
//     // YAXIS_PADDING 그리기
//     ctx.lineTo(YAXIS_PADDING, this.canvasWidth)
//     // XAXIS_PADDING
//     ctx.lineTo(XAXIS_PADDING, this.canvasHeight)
//     const yInterval = MAX_VALUE / (Y_THICK_COUNT - 1)
//     for (let i = 0; i < Y_THICK_COUNT.length; i++) {
//       const value = i * yInterval
//       const yPoint = TOP_PADDING + chartHight - value / MAX_VALUE - chartHight
//       ctx.fillText(value, 0, yPoint)
//     }

//     ctx.lineTo(this.canvasWidth, chartHight + TOP_PADDING)
//     ctx.stroke()

//     let currentTime = this.startTime - this.startTime % this.xTimeInterval

//     while (currentTime < this.endTime + this.xTimeInterval) {
//       currentTime += this.xTimeInterval

//     }
//   }

//   updateChart = () => { }
// }

// export default LineChartClass

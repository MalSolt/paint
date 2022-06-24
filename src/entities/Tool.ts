import { canvas } from './Canvas'

export class Tool {
  private isDraw = false
  protected canvas = canvas

  constructor() {
    this.canvas.canvas.onmousedown = this.mouseDown.bind(this)
    this.canvas.canvas.onmouseup = this.mouseUp.bind(this)
    this.canvas.canvas.onmousemove = this.mouseMove.bind(this)
  }

  mouseDown() {
    this.isDraw = true
  }

  mouseUp() {
    this.isDraw = false
    this.canvas.ctx.beginPath()
  }

  mouseMove(e: MouseEvent) {
    const x = e.offsetX
    const y = e.offsetY

    if (this.isDraw) {
      const radius = 10

      this.canvas.ctx.lineWidth = 10 * 2
      this.canvas.ctx.lineTo(x, y)
      this.canvas.ctx.stroke()

      this.canvas.ctx.beginPath()
      this.canvas.ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
      this.canvas.ctx.fill()

      this.canvas.ctx.beginPath()
      this.canvas.ctx.moveTo(x, y)
    }
  }
}

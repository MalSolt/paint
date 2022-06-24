class Canvas {
  public canvas: HTMLCanvasElement
  public ctx: CanvasRenderingContext2D

  constructor() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.canvas.style.display = 'block'
    document.body.appendChild(this.canvas)
  }
}

export const canvas = new Canvas()

abstract class view {
    constructor() {
        window.addEventListener('resize', this.resize.bind(this))
    }
    protected abstract resize() : void
}

abstract class canvas extends view {
    private static readonly scale = 2
    private static readonly frame = 0.0625

    private canvas : HTMLCanvasElement;
    protected context : CanvasRenderingContext2D;
    protected stageHeight : number;
    protected stageWidth : number;
    protected frameRate : number;
    protected elapsed : number;
    protected fps : number;
    private lastUpdated : number;
    private lastDoubleUpdated : number;
    constructor() {
        super()
        this.frameRate = 12;
        this.lastUpdated = 0;
        this.lastDoubleUpdated = 0;
        this.initializeCanvas()
        this.resize()
        window.requestAnimationFrame(this.animate.bind(this))
    }

    private initializeCanvas() : void {
        this.canvas = document.createElement('canvas')
        document.body.appendChild(this.canvas)
        this.context = this.canvas.getContext('2d')!
    }

    protected resize() : void {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight
        this.canvas.width = this.stageWidth * canvas.scale
        this.canvas.height = this.stageHeight * canvas.scale
        this.context.scale(canvas.scale, canvas.scale)
    }

    private animate(t : number) : void {
        window.requestAnimationFrame(this.animate.bind(this))
        this.fps = (t-this.elapsed) * canvas.frame;
        this.elapsed = t;
        if (this.elapsed - this.lastUpdated >= 1000 / this.frameRate) {
            this.update()
            this.lastUpdated = this.elapsed
        }
        if (this.elapsed - this.lastDoubleUpdated >= 500 / this.frameRate) {
            this.doubleUpdate()
            this.lastDoubleUpdated = this.elapsed
        }
    }

    private update() {
        this.context.clearRect(0, 0, this.stageWidth, this.stageHeight)
        this.present(this.context)
    }

    protected doubleUpdate() : void {}

    protected abstract present(context : CanvasRenderingContext2D) : void
}

export default view
export {
    canvas
}
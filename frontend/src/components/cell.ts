import { size, vector2 } from "../util/mathf";

export interface cellArgs{
    size : size
}

interface presentOption {
    blink : boolean
    opacity : number
}

class cell {
    protected coord: vector2
    protected size: size
    protected color : number
    protected stared : boolean
    protected lock : boolean
    constructor(args : cellArgs) {
        this.coord = { x: 0, y: 0 }
        this.size = args.size
    }

    public present(context : CanvasRenderingContext2D, option : presentOption = { blink : false, opacity : 1}) {
        if (this.lock) {
            return
        }
        this.lock = true
        setTimeout(() => {
            this.lock = false
        }, (16));
        if (this.coord.x == undefined || this.coord.y == undefined) {
            return
        }
        context.font = `${this.size.height}px consolas`
        context.fillStyle = option.blink ? '#FFFFFF' : '#03A062'
        context.globalAlpha = option.opacity
        context.fillText(Math.random().toString(36).charAt(2), this.coord.x * this.size.width, this.coord.y * this.size.height)
    }

    public setCoord(x? : number, y? : number) : cell {
        if (x) {
            this.setX(x)
        }
        if (y) {
            this.setY(y)
        }
        return this
    }

    public moveDown(value : number = 1) : cell {
        this.setY(this.coord.y! + value)
        return this
    }

    protected setX(value: number) : cell {
        this.coord.x = value
        return this
    }

    protected setY(value: number) : cell {
        this.coord.y = value
        return this
    }

    public startStared() : cell {
        this.stared = true
        return this
    }

    public drawStared() : cell {
        this.stared = false
        return this
    }

    public isStared() : boolean {
        return this.stared
    }
}

export default cell
import { vector2 } from "../util/mathf"

export interface simulacreArgs {
}

abstract class simulacre  {
    protected coord: vector2

    constructor(args : simulacreArgs) {
        this.coord = { x: 0, y: 0 }
    }

    abstract present(context : CanvasRenderingContext2D) : void

    public setCoord(x? : number, y? : number) : simulacre {
        if (x) {
            this.setX(x)
        }
        if (y) {
            this.setY(y)
        }
        return this
    }
    public moveDown(value : number = 1) : simulacre {
        this.setY(this.coord.y! + value)
        return this
    }
    protected setX(value: number) : simulacre {
        this.coord.x = value
        return this
    }

    protected setY(value: number) : simulacre {
        this.coord.y = value
        return this
    }
}

export default simulacre
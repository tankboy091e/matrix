import { vector2 } from "../util/mathf"
import space from "../views/space"

export interface simulacreArgs {
    horizon : space
    coord : vector2
}

abstract class simulacre {
    protected coord: vector2
    protected horizon : space

    constructor(args: simulacreArgs) {
        this.horizon = args.horizon
        this.coord = args.coord
    }

    abstract present(context : CanvasRenderingContext2D) : void;
}

export default simulacre
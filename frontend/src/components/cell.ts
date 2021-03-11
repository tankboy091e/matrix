import { size } from "../util/mathf";
import simulacre, { simulacreArgs } from "./simulacre";

export interface cellArgs extends simulacreArgs {
    size : size
}

class cell extends simulacre {
    protected size: size
    protected color : number
    constructor(args : cellArgs) {
        super(args)
        this.size = args.size
    }
    public present(context : CanvasRenderingContext2D) {
        if (this.coord.x == undefined || this.coord.y == undefined) {
            return
        }
        context.font = `${this.size.height}px consolas`
        context.fillStyle = '#03A062'
        context.fillText(Math.random().toString(36).charAt(2), this.coord.x * this.size.width, this.coord.y * this.size.height)
        if (this.coord.y * this.size.height > context.canvas.height) {

        }
    }
}

export default cell
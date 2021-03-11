import cell, { cellArgs } from "./cell";
import simulacre from "./simulacre";

interface snakeArgs extends cellArgs {
    length : number
}

class snake extends simulacre {
    protected length : number
    protected children : Array<cell>

    constructor(args : snakeArgs) {
        super(args)
        this.length = args.length

        this.children = new Array<cell>()
        for (let i = 0; i < this.length; i ++) {
            const child = new cell({
                size : args.size})
            this.children.push(child)
        }
    }

    public present(context : CanvasRenderingContext2D): void {
        for (let i = 0; i < this.children.length; i ++) {
            this.children[i].present(context)
            this.children[i].moveDown()
        }
    }

    protected move() : void {
        for (let i = 0; i < this.children.length; i ++) {
            this.children[i].moveDown()
        }
    }

    public setCoord(x? : number, y? : number) : snake {
        super.setCoord(x, y)
        for (let i = 0; i < this.children.length; i ++) {
            this.children[i].setCoord(
               this.coord.x,
               this.coord.y - i
            )
        }
        return this
    }
}

export default snake
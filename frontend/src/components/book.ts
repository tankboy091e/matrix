import { size, vector2 } from "../util/mathf";
import simulacre, { simulacreArgs } from "./simulacre";

interface bookArgs extends simulacreArgs {
    size: size
    fontSize: size
}

class book extends simulacre {
    protected size: size
    protected fontSize: size
    protected step: number;
    protected children: Array<Array<vector2>>
    protected axis: vector2
    protected opened : boolean

    constructor(args: bookArgs) {
        super(args)
        this.size = args.size
        this.fontSize = args.fontSize
        this.step = 0;
        this.children = new Array<Array<vector2>>()
        this.axis = {
            x: 0,
            y: 0
        }
        this.initializeCoord()
    }

    protected initializeCoord(): void {
        const width = this.size.width / this.fontSize.width
        const height = this.size.height / this.fontSize.height
        for (let i = 0; i < width; i++) {
            this.children[i] = new Array<vector2>()
            for (let j = 0; j < height; j++) {
                this.children[i].push({
                    x: this.coord.x + i - Math.floor(width * 0.5),
                    y: this.coord.y + j - Math.floor(height * 0.5)
                })
            }
        }
    }

    public present(context: CanvasRenderingContext2D): void {
        this.axis.y = 0
        for (let i = -1 * this.axis.x; i <= this.axis.x; i++) {
            const xindex = Math.floor(this.children.length * 0.5 + i)
            for (let j = -1 * this.axis.y; j <= this.axis.y; j++) {
                const yindex = Math.floor(this.getChildRow(xindex).length * 0.5 + j)
                if (xindex ===0 && yindex === 0) {
                    this.opened = true
                }
                const child = this.getChild(xindex, yindex)
                const blink = Math.abs(j) === this.axis.y
                this.horizon.borrowCell(child.x, child.y).cell?.present(context, {
                    blink : blink,
                    opacity : 1
                })
            }
            if (i < 0) {
                this.axis.y ++
            }else {
                this.axis.y --
            }
        }
        if (this.opened) {
            return
        }
        this.axis.x++
    }

    protected getChildRow(row : number) : Array<vector2> {
        if (row < 0) {
            row = 0
        }
        if (row > this.children.length -1) {
            row = this.children.length -1
        }
        return this.children[row]
    }

    protected getChild(row : number, col : number) : vector2 {
        if (col < 0) {
            col = 0;
        }
        if (col > this.getChildRow(row).length -1 ) {
            col = this.getChildRow(row).length -1 
        }
        return this.getChildRow(row)[col]
    }

    protected requestDestroy(): void {
        if (this.children.length < 1) {
            this.horizon.destroy(this)
        }
    }
}

export default book
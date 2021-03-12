import { vector2 } from "../util/mathf";
import { borrowResponse } from "../views/space";
import simulacre, { simulacreArgs } from "./simulacre";

interface snakeArgs extends simulacreArgs {

}

class snake extends simulacre {
    protected length: number
    protected tick: number
    protected children: Array<vector2>

    constructor(args: snakeArgs) {
        super(args)
        this.length = Math.floor(Math.random() * 7) + 12
        this.children = new Array<vector2>()
        this.initializeCoord()
        this.tick = 0;
        
    }

    protected initializeCoord(): void {
        for (let i = 0; i < this.length; i++) {
            this.children.push({
                x: this.coord.x,
                y: this.coord.y - i,
            })
        }
    }

    public present(context: CanvasRenderingContext2D): void {
        this.requestDestroy()
        const toBeRemoved = []
        for (let i = this.children.length-1; i >= 0; i--) {
            const result = this.horizon.borrowCell(this.children[i].x, this.children[i].y)
            if (result.response === borrowResponse.out) {
                toBeRemoved.push(i)
                continue;
            }
            result.cell?.present(context, {
                blink: i === 0,
                opacity: 1 - (i / this.children.length)
            })
        }
        for (let i = 0; i < toBeRemoved.length; i++) {
            this.children.splice(toBeRemoved[i], 1)
        }
        if (this.tick % 2 == 0) {
            this.move()
        }
        this.tick++
    }

    protected move(): void {
        if (this.children[0]) {
            this.children[0].y++
        }
        for (let i = 1; i < this.children.length; i++) {
            if (this.children[i-1].y - this.children[i].y > 1) {
                this.children[i].y++
            }
        }
    }

    protected requestDestroy(): void {
        if (this.children.length < 1) {
            this.horizon.destroy(this)
        }
    }
}

export default snake
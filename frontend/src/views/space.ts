import cell from "../components/cell";
import snake from "../components/snake";
import { size } from "../util/mathf";
import { canvas } from "./view";


class space extends canvas {
    private static readonly luck = 0.99
    private cellSize: size
    private children: Array<snake>
    private lanes: Array<Array<snake>>

    constructor() {
        super()
        this.cellSize = { width: 14, height: 20 }
        console.log(this.context.font)
        this.context.textBaseline = 'top'
        this.children = new Array<snake>()

        this.lanes = new Array<Array<snake>>()
        for (let i = 0; i < this.stageWidth / this.cellSize.width; i++) {
            this.lanes.push(new Array<snake>())
        }
        this.resize()
    }

    private initializeLane() {
        if (!this.cellSize) {
            return
        }
        const delta = (this.stageWidth / this.cellSize.width) - this.lanes.length
        if (delta < 0) {
            for (let i = 0; i < -1 * delta; i++) {
                this.lanes.pop()
            }
        }
        if (delta > 0) {
            for (let i = 0; i < delta; i++) {
                this.lanes.push(new Array<snake>())
            }
        }
    }

    protected present(): void {
        if (!this.children) {
            return
        }
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].present(this.context)
        }
    }

    protected doubleUpdate(): void {
        if (Math.random() < space.luck) {
            this.born()
        }
    }

    protected born(): void {
        const child = new snake({
            length: 7,
            size: this.cellSize,
        })
        const lane = Math.floor(Math.random() * this.lanes.length)
        child.setCoord(lane, 0)
        this.children.push(child)
        this.lanes[lane].push(child)
    }

    protected resize(): void {
        super.resize()
        this.initializeLane()
    }
}

export default space
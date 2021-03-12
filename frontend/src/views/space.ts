import book from "../components/book";
import cell from "../components/cell";
import simulacre from "../components/simulacre";
import snake from "../components/snake";
import { size } from "../util/mathf";
import { canvas } from "./view";

export enum borrowResponse {
    success,
    failed,
    out,
}

export interface response {
    cell : cell | null
    response : borrowResponse
}

class space extends canvas {
    private static readonly luck = 0.99

    private cellSize: size
    private chessBoard: Array<Array<cell>>
    private lives : Array<simulacre>
    private selectedCell : cell

    constructor() {
        super()
        this.context.textBaseline = 'top'
        this.initializeChessBoard()
        this.initializeLives()
        
        this.resize()

        document.body.style.cursor = 'pointer'
        window.addEventListener('click', this.detect.bind(this))
    }

    protected initializeChessBoard() : void {
        this.initializeCellSize()
        this.chessBoard = new Array<Array<cell>>()
        for (let i = 0; i < this.stageWidth / this.cellSize.width; i++) {
            this.chessBoard[i] = new Array<cell>()
            for (let j = 0; j < this.stageHeight / this.cellSize.height + 1; j ++) {
                const child = new cell({
                    size : this.cellSize,  
                })
                child.setCoord(i, j)
                this.chessBoard[i][j] = child
            }
        }
    }

    protected initializeCellSize() : void {
        if (this.cellSize) {
            return
        }
        this.cellSize = { width: 14, height: 20 }
    }

    protected initializeLives() : void {
        this.lives = new Array<simulacre>()
    }

    protected present(): void {
        if (!this.lives) {
            return
        }
        for (let i = this.lives.length-1; i >= 0; i--) {
            this.lives[i].present(this.context)
        }
    }

    public borrowCell(x : number, y : number) : response {
        if (!this.chessBoard) {
            return {
                cell : null,
                response : borrowResponse.failed
            }
        }
        if (x < 0  || this.chessBoard.length-1 < x || y < 0) {
            return {
                cell : null,
                response : borrowResponse.failed
            }
        }
        if (!this.chessBoard[x]) {
            return {
                cell : null,
                response : borrowResponse.failed
            }
        }
        if (this.chessBoard[x].length-1 < y) {
            return {
                cell : null,
                response : borrowResponse.out
            }
        }
        return {
            cell : this.chessBoard[x][y],
            response : borrowResponse.success
        }
    }

    protected doubleUpdate(): void {
        if (Math.random() < space.luck) {
            this.born()
        }
    }

    protected born(): void {
        const life = new snake({
            horizon : this,
            coord : {
                x : Math.floor(this.chessBoard.length  * Math.random()),
                y : 0
            },
        })
        this.lives.push(life)
    }

    protected detect(e : MouseEvent) : void {
        this.lives.push(new book({
            horizon : this,
            coord : {
                x : Math.floor(e.clientX / this.cellSize.width),
                y : Math.floor(e.clientY / this.cellSize.height)
            },
            size : {
                width : Math.floor(this.stageWidth * 0.4),
                height : Math.floor(this.stageHeight * 0.9)
            },
            fontSize : this.cellSize
        }
        ))
        document.body.style.cursor = 'default'
    }

    protected resize() : void {
        super.resize()
        this.initializeChessBoard()
    }

    public destroy(life : simulacre) :void {
        this.lives.splice(this.lives.findIndex(x => x == life), 1)
    }
}

export default space
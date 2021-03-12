import { size, vector2 } from "../util/mathf";
import simulacre, { simulacreArgs } from "./simulacre";

interface bookArgs extends simulacreArgs {
    size : size
    fontSize : size
}

class book extends simulacre{
    protected size : size
    protected fontSize : size
    protected step : number;
    protected children: Array<Array<vector2>>

    constructor(args : bookArgs) {
        super(args)
        this.size = args.size
        this.fontSize = args.fontSize
        this.step = 0;
        this.children = new Array<Array<vector2>>()
        this.initializeCoord()
    }

    protected initializeCoord() : void {
        for (let i = 0; i < this.size.width/this.fontSize.width; i ++) {
            this.children[i] = new Array<vector2>()
            for (let j = 0; j < this.size.height/this.fontSize.height; j ++) {
                this.children[i].push({
                    x : i,
                    y : j
                })
            }
        }
    }

    public present(context: CanvasRenderingContext2D): void {
 
    }

    protected requestDestroy(): void {
        if (this.children.length < 1) {
            this.horizon.destroy(this)
        }
    }
}
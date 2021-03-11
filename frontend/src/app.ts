import view from './views/view'
import space from './views/space'

window.onload = () => new app()

class app {
    private view : view
    constructor() {
        this.view = new space()
    }
}
import canvasTemplate from '../templates/canvas.html' 
import Path from './path.js'

export class Board {

    constructor() {
       this.canvas = canvasTemplate;
       this.path = new Path();
    }

    render() {
        document.write(this.canvas);
    }
    
    onMouseMove() {
        
    }
    
    getContext() {
        const canvas = document.getElementById('whiteboard');
        return canvas.getContext("2d");
    }
}
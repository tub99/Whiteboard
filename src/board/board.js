import canvasTemplate from '../templates/canvas.html'

export class Board {

    constructor() {
        this.canvas = canvasTemplate;
        this.color = 'black';
        this.prevX = 0;
        this.currX = 0;
        this.prevY = 0;
        this.currY = 0;
        this.lineWidth = 2;
        this.canDraw = false;
    }

    render() {
        document.write(this.canvas);
        this.bindEvents();
    }

    bindEvents() {
        this.getCanvas().addEventListener('mousemove', (event) => {
            this.onMouseEvent('move', event);
        });

        this.getCanvas().addEventListener('mousedown', (event) => {
            this.onMouseEvent('down', event);
        });

        this.getCanvas().addEventListener('mouseup', (event) => {
            this.onMouseEvent('up', event);
        });

        this.getCanvas().addEventListener('mouseout', (event) => {
            this.onMouseEvent('out', event);
        });
    }

    onMouseEvent(mouseEventType, event) {
        this.getCoordinates(mouseEventType, event);
    }

    getContext() {
        const canvas = document.getElementById('whiteboard');
        return canvas.getContext("2d");
    }

    getCanvas() {
        return document.getElementById('whiteboard');
    }

    getCoordinates(mouseEventType, event) {
        const canvas = this.getCanvas();
        const ctx = this.getContext();
        if (mouseEventType === 'down') {
            this.prevX = this.currX;
            this.prevY = this.currY;
            this.currX = event.clientX - canvas.offsetLeft;
            this.currY = event.clientY - canvas.offsetTop;

            this.canDraw = true;

            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.currX, this.currY, 2, 2);
            ctx.closePath();
        }
        else if (mouseEventType == 'up' || mouseEventType == "out") {
            this.canDraw = false;
        }
        else if (mouseEventType == 'move') {
            if (this.canDraw) {
                this.prevX = this.currX;
                this.prevY = this.currY;
                this.currX = event.clientX - canvas.offsetLeft;
                this.currY = event.clientY - canvas.offsetTop;
                this.draw();
            }
        }
    }

    draw() {
        const ctx = this.getContext()
        ctx.beginPath();
        ctx.moveTo(this.prevX, this.prevY);
        ctx.lineTo(this.currX, this.currY);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.closePath();
    }
}

import {Observable} from 'rxjs'

class WebsocketService {
    url;
    socket;
    observer;

    constructor(url){
        this.url = url;
    }

    resetSocket = ()=>{
        if (this.socket){
            this.socket.close()
        }
        if(this.observer){
            this.observer.complete('Connection Closed')
        }
        this.socket = undefined;
        this.observer = undefined;
        return true;
    }

    startSocket = ()=>{
        this.socket = new WebSocket(this.url);
        this.socket.onopen = this.handleOpen
        this.socket.onmessage = this.handleMessage
        this.socket.onclose = this.handleClose
    }

    connect = ()=>{

        return Observable.create(
            (observer)=>{
                this.startSocket()
                this.observer =observer;
            }
        )
    }

    handleOpen = (e)=>{
        // this.observer.next(e)
    }

    handleMessage = (e)=>{
        this.observer.next(e)
    }
    handleClose = (e)=>{
        this.observer.complete(e)
        this.resetSocket()
    }

    send = (data)=>{
        if (this.socket){
            return this.socket.send(JSON.stringify(data))
        }
        return new Error('Connection Already Closed')

    }

    unsubscribe = ()=> {
        return this.resetSocket()
    }

}

export default  WebsocketService;
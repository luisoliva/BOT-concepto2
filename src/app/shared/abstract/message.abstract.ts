export abstract class Message<T> {
    constructor(protected notification: Notification){}
    abstract ShowMessage(en);
    public typeMessage(){
        console.log("soy un mensaje de tipo");
    }
}
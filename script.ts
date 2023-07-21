interface Ismartphone{

    carica:number,
    numeroChiamate:number,
    costoAlMinuto:number,
    
   

 ricarica(euro:number):void
get numero404():string
get getNumeroChiamate():number
chiamata(min:number):void
azzeraChiamate():void
}

class Smartphone implements Ismartphone{
constructor(public carica:number=0,public numeroChiamate:number=0,public costoAlMinuto:number=0.20,){} 
   

    ricarica(euro: number): void {
        this.carica+=euro
    }

    get numero404(): string {
        return this.carica+'€'
    }

    get getNumeroChiamate(): number {
        return this.numeroChiamate
    }


    chiamata(min: number): void {
        if(this.carica>0){
        this.numeroChiamate=this.numeroChiamate+1
        this.carica-=(min*this.costoAlMinuto)
        
        } else{
        console.log('attenzione credito insufficente')
        }   
        }
    

    azzeraChiamate(): void {
        this.numeroChiamate=0
    }



} 

let user1=new Smartphone()
user1.ricarica(20)
user1.chiamata(3)
user1.chiamata(5)
user1.getNumeroChiamate
console.log(user1.getNumeroChiamate)
console.log(user1.numero404)

let user2=new Smartphone()
let user3=new Smartphone()


console.log(user1)

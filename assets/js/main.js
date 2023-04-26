//Array-a dərsdə keçdiyimizə uyğun remove funksiyası yazın. Bu method Arrayın sonuncu elementini silsin.

let obj={
    arr:[2,45,43,94,44],
    remove:function(num){
        return this.arr[this.arr.length--];
    }
}
obj.remove()
console.log(obj.arr);
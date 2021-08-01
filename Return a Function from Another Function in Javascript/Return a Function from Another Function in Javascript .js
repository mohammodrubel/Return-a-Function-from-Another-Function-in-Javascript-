
function one(message){
    function person(man){
        return message +' '+ man + ' !'
    }
    return person
}
var result = one ('good morning')

var mainResult = result('Fardin Tazbeed')
console.log(mainResult)
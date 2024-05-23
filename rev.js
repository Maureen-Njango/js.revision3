    //1 create a function that prints out all the ood numbers between 1 and 100
    function oddNumbers(number){

        if(number % 2==0){
            return "odd" 
        }else{
            return "not odd number"
        }

    }
    
    console.log(oddNumbers(50))
///2 your creating a robot to serve drinks at a party .The robot is required to serve a glass of milk for guest under the age of 6 For quuest under the age of 15 but over 
//the age of 6 ,the robot serves a bottle of fanta orange .Everybody else gets a bottle of cocacola

function serveDrinks(age){
    if(age ==6){
        console.log("you will have milk")
    }else if(age < 6 >15){
    console.log("you will have fanta")}
    else{
        console.log("drink a bottle of cocacola")
    }

}
serveDrinks(40)


//Create a function that takes in an array of names and returns  the number of names longer than 5 characters 
    function countNamesLonger(names){
        let count = 0
        for(let i = 0; i<names.length; i++){
            if(names[i.length >5]){
                count ++;
            }
        }
        return count;

    }
    const names = ['Alice', 'Morin', 'Njango', 'jaysm', 'jay']
    console.log(countNamesLonger(names))


    //create class with the following attributes  make model color capacity
    //carry(people :int ):prints out "carrying $people passangers"If the nuber of peaple is within its capacity else it prints out "over capacity bt $xpeople "Where x is the number of people exceeding its capacity
    class Car{
        constructor(make,model,color,capacity){
            this.make = make,
            this.color = color,
            this.model = model,
            this.capacity = capacity
        }
    }
    function carry(){
        if(people <= this.capacity){
            console.log( `carrying ${people} passengers.`)
        }else{
            let exceeding = people - this.capacity
            console.log(`over capacity by ${exceeding} people`)
        }

    }
    let car = new Car ('porsche', 'panarema', 'purple', 20)
    carry()
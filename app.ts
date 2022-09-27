// question Number One 

var Question1 = () => {
    var userInputNum1: string | null = prompt("Enter Your Natural Number", "10");
    if (userInputNum1) {

        var num: number = parseInt(userInputNum1);
        var n: number = 1
        while (n <= num) {
            console.log(n);
            let myContainer = <HTMLElement>document.getElementById('ans');
            myContainer.innerHTML += n + " ";
            n++
        }

        return 0
    }
}

// question Number Two 

var Question2 = () => {
    var userInputNum1: string | null = prompt("Enter Your Natural Number", "10");
    if (userInputNum1) {

        var num: number = parseInt(userInputNum1);
        var n: number = 1
        while (num >= n) {
            console.log(num);
            let myContainer = <HTMLElement>document.getElementById('ans2');
            myContainer.innerHTML += num + " ";
            num--
        }

        return 0
    }
}


// question Number 3

var Question3 = () => {

    var upper = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

    for(var j = 0; j < upper.length; j++)
    {
        var result = upper[j];
        let myContainer = <HTMLElement>document.getElementById('ans3');
            myContainer.innerHTML += result + " ";
    }
   
}

// question Number 4

var Question4 = () => {

    var n:number =1;


    for( n;n<=100; n++)
    {
        if(n%2 == 0){
        var result = n
        let myContainer = <HTMLElement>document.getElementById('ans4');
            myContainer.innerHTML += result + " ";
    }
}
   
}


// question Number 5

var Question5 = () => {

    var n:number =1;


    for( n;n<=100; n++)
    {
        if(n%2 == 1){
        var result = n
        let myContainer = <HTMLElement>document.getElementById('ans5');
            myContainer.innerHTML += result + " ";
    }
}
   
}
// question Number 6

var Question66 = () => {

    var userInputNum1: string | null = prompt("Enter Your Natural Number", "10");
    console.log("Logggggg");
    
    if (userInputNum1) {
     var Num:number = parseInt(userInputNum1);   
        var count:number = 1;
        var sum:number = 0
        
        
        for( count; count <= Num; count++)
        {
            sum = sum + count;
            console.log("Sum", sum);
            
            
        }
        let myContainer = <HTMLElement>document.getElementById('ans66');
        myContainer.innerHTML += sum + " ";
    }

   
}

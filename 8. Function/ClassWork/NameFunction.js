// Normal Functions  // Name Function
// - parameters Function (with Arguments) Return type in function switch programs

// Type of Function :
        // i. without argument and without return type 
        // ii. with argument and without return type 
        // iii. without argument and with return type 
        // iv. with argument and with return type 

        
        
    // i] without argument and without return type 
        /* 
        Syntax : 
            1. function initialization + declaration
        
            function functionname (){
                //code
            }
        
            functionname(); // function calling / Function Invoked
        */
        
        function printData()
        {
            console.log("Hello World");
            // alert("Welcome to JavaScript");
            document.write("Welcome");
        }
        printData();

        function changeText(){
            // document.querySelector('h1').innerHTML = "Hello World";
        }
        changeText();

    // ii] with argument and without return type 

        /* 
        Syntax : 
            1. function initialization + declaration

            function functionname (n1,n2){   //n1,n2 Parameter
                //code
            }

            functionname(data1,data2); // data1,data2 : Argument // function calling / Function Invoked

        */ 

        function addition(n1,n2){
            console.log("sum is : ",n1+n2);
        }
        addition(2,3);
        

        // Addition only Two Numbers

        function sum(n1,n2){
            console.log(n1+n2);
        }
        sum(11);

        // Default Parameter
        function addition(n1=0,n2=0){
            console.log(n1+n2);
        }
        addition(5,5);

    
    // iii] without argument and with return type 
    
        /* 
        Syntax : 
            1. function initialization + declaration

            function functionname (){  
                return ;
            }
        */ 

        function PI(){
            return 3.14;
        }
        console.log(PI());


    // iv] with argument and with return type
    
        /* 
        Syntax : 
            1. function initialization + declaration

            function functionname (n1,n2){   //n1,n2 Parameter
                //code

                return ;
            }

            functionname(data1,data2); // data1,data2 : Argument // function calling / Function Invoked

        */ 

        function result(marks){
            if(marks>=33){
                return "Pass";
            }else{
                return "Fail";
            }
        }
        console.log(result(50));



        
        function arithmatic(n1,n2,op){
            switch (op) {
                case "+":
                    return n1+n2;
                case '-' : 
                    return n1-n2;
                default: 
                    return "Please Enter Valid Choice!!";
            }
        }
        
        alert(arithmatic(4,4,"+"));
    
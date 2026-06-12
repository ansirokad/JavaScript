var reStart = true;

while(reStart)
{
        var RandomNumber = parseInt(Math.random() * 100);
        console.log(RandomNumber);

        var count = 0;
        var Flag = false;

        while(count < 10)
        {
            var num = prompt("Guess the Number (0-100) : ");

            if (num > RandomNumber) {
                count++;
                alert("Too Low!");
            }
            else if (num == RandomNumber) {
                alert("Congratulations! You Win!");
                alert("The total Attempts " + count);
                Flag = true;
                break;
            }
            else {
                count++;
                alert("Too High!");
            }
        }

        if(Flag == false)
        {
            alert("Game Over!");
        }

        reStart = confirm("Do you want to Game Play Again? (yes/no)");
}

if(reStart == false)
{
    alert("Thank You for Playing!");
}

        

    
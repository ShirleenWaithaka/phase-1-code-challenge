function StudentGrades(Marks) {
    if(Marks >79 && Marks <=100) {
        return 'A';

    }else if (Marks >=60 && Marks <=79){
        return 'B';

    }else if (Marks >=49 && Marks <=59){
        return 'C';

    }else if (Marks >=40 && Marks <=48){
        return 'D';

    }else if (Marks >40){
        return 'E';

    }else {
        return 'invalid'
    }
}

//prompt the user to input and validates the input is between 0-100
//parse (coverts input to number)
function main() {
    const input =prompt ('Enter Your Marks');
    const Marks = parseFloat(input);

    if (!isNaN(Marks) &&Marks >=0 && Marks <=100){
    const grade = StudentGrades(Marks);
    alert(`The grade is ${grade}`);

    }else {
        alert ('Please enter a valid value between 0-100')
    }

}
// call out the main function to run the program

main()

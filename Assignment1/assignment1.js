const fs = require('fs');

const readline = require('readline');

//Student class with grader method
class Student{
    constructor(name,assignment,grade){
        this.name =name;
        this.assignment = assignment;
        this.grade = grade;
    }
    

grader(grade){
     let lgrade;
    if(grade > 89 && grade < 101){
        lgrade = "A"
    }else if (grade > 79 && grade <90){
        lgrade = "B"
    }else if (grade > 69 && grade <80){
        lgrade = "C"
    }else if (grade > 59 && grade <60){
        lgrade = "D"
    }else if(grade > 49 && grade <1){
        lgrade = "F"
    }else if(grade > 101){
       lgrade="Invalid input, try again!"
    }else if(grade<0){
        lgrade="Invalid input, try again!"
    };
      
    return lgrade
};

};
//creating readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
//gathering information from the user and displaying it in the console
rl.question("What is your student's name?", (name)=>{
    rl.question("What is the assignment?", (assignment)=>{
       rl.question("What is the student's grade?",(grade)=>{
        let student = new Student(name, assignment, grade);
        console.log("Student Name: " + name )
        console.log("Assignment: " + assignment )
        console.log("Grade: " + student.grader(grade) )
         process.exit(0);
       });
      
    });
});




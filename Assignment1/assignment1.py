import sys


class Grader:


    def grader(g):

        if g >= 90:
            grade = "A"
        elif g >= 80:
            grade = "B"
        elif g >= 70:
            grade = "C"
        elif g >= 60:
            grade = "D"
        elif g >= 50:
            grade = "F"
        return grade


def output(name,assignment, grade):
    if grade != 'E':
        print(name + ' got a ' + grade + ' on '+ assignment)


name=input("Enter the Student Name:") 
assignment = input("Enter Assignment Name:")
grade = int(float(input("Enter Numeric Grade:")))

g=Grader()
letter=g.grader(grade)
g.output(name,letter,assignment)


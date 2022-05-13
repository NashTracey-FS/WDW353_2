#Grader  to convert Grades
class Grader  
    def grader(grade)
    if grade > 89 && grade < 101
        lgrade = "A"
    elsif grade > 79 && grade <90
        lgrade = "B"
    elsif grade > 69 && grade <80
        lgrade = "C"
    elsif grade > 59 && grade <60
        lgrade = "D"
    elsif grade > 49 && grade <1
        lgrade = "F"
    elsif grade >101
        lgrade="Invalid input, try again!"
    elsif grade < 0
        lgrade="Invalid input, try again!"
    end

    return lgrade
end
end
#     # Getting information from user
  
   puts "What's the students name?"
   name = gets.chomp()
   puts "What's the assignment name?"
   assignment = gets.chomp()
   puts "What is the numerical grade?"
   number = gets.chomp()
   grade = Grader.new
   letter= grade.method(:grader)
  
    puts (name+" got a/an "+letter.call(number.to_f)+" on "+assignment+"!"   )
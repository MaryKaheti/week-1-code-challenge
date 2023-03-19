// Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
// I will use the equals or greater than sign >= for grades A-D
// For grade E I will use < less than since the question asks if its less than 40 it returns E.


 function studentGradeGenerator(grade) {
  if (grade >= 79){//The score from 79 - 100 will equal the grade A
  return 'A'}
  else if (grade >= 60){//The score from 60 - 78 will give the grade B
  return 'B'}
  else if (grade >= 49){//The score from 49 - 59 will produce the grade C
  return 'C'}
  else if (grade >= 40){//The score from 40 - 49 will be equivalent to the grade D
  return 'D'}
  else (grade <  40); {//For any score less than 40 will produce the grade E
  return 'E'}
}
//Challenge 2: Speed Detector (Toy Problem)
//Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

function speedDetector (speed) {// Speed has to be less than 70 that means to we should use (<) sign
   const rightSpeed = 70;
   const overSpeedingPoint = 5
   if (speed < 70) {
        return ('OK')
    }
    else if //Need to create demerit point.Make sure it runs.Copy the code to onecompiler. Has to be (y-x)/5
        const demeritPoint = ((speed - rightSpeed) / overSpeedingPoint);//Dont know why const is screaming.
        if (demeritPoint >= 12) //For points more than 12 'License Suspended'
            return("License Suspended");
        else  (demeritPoint < 12)//Should I add this? How will JS engine know what im trying to communicate?
        return(`points: ${demeritPoint}`) 
}
//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

function individualNetSalary (Tax) {// NHIF is 500ksh and NSSF is 6% payed by the individual and the other 6% paid by the employer.
    const nhifDeductions = 500;
    const nssfDeductions = 6% ${grossSalary} ;
    
    if (grossSalary <= 15,000) {//Upon calculation individuals earning 15,000 and less dont pay PAYE allegedly
         return(`grossSalary - nhifDeductions - nssfDeductions`)
    }
    else if (grossSalary > 15,000 && grossSalary <25,000) {
        return(`grossSalary - nhifDeductions - nssfDeductions - (grossSalary * 0.3)`)// Tax is paid to the tune of 30%
    }
    else if (grossSalary > 25,000 && grossSalary < 50,000) {
        return(`grossSalary - nhifDeductions - nssfDeductions - (grossSalary * 0.3)`)}// Calculation of net salary
    else (grossSalary > 50,000) {
        return(`grossSalary - nhifDeductions - nssfDeductions - (grossSalary * 0.3)`)
}
let deductions = (nhifDeductions + nssfDeductions);
const individualNetSalary = (`grossSalary - nhifDeductions - nssfDeductions`)

}
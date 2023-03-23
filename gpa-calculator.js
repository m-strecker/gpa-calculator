//this is javascript!!

//GPA calculation
function calculateGPA(arr){

   var sum = 0;
   var avg = 0;

    // find numeric sum of GPA
    for(var i = 0; i < arr.length; i++) {
  
        if(arr[i] == "A"){
            sum += 100;
        }
        else if(arr[i] == "B"){
            sum += 80;
        }
        else{
            sum += 70;
        } 
    }
    
    //find numeric average GPA
    avg = sum / arr.length;

    //switch number average GPA to alphanumeric average GPA
    if(avg >= 90){
        avg = "A";
    }
    else if (avg >= 80){
        avg = "B";
    }
    else {
        avg = "C";
    }
    
    



    return avg;

}
var grades = ["A", "B", "C", "C", "B", "A", "A", "A", "A"]; //these inputs can be prompted from a user in future modules 
var gpa;

gpa= calculateGPA(grades);
document.write("Your GPA is " + gpa);
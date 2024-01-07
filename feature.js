const CS135 = [
    new Map([["number", 1], ["concept", "123"], ["explain", ""]]),
    new Map([["number", 2], ["concept", "345"], ["explain", ""]])];

const CS136 = [];

const Math135 = [];

const Math136 = [];


const courses = [
    new Map([["var", CS135], ["name", "CS135"]]),
    new Map([["var", CS136], ["name", "CS136"]]),
    new Map([["var", Math135], ["name", "Math135"]]),
    new Map([["var", Math136], ["name", "Math136"]])];

// Display a concept based on t he choice
// -1 indicate randomly select from all course, a number 
// Require: -1 <= choice < courses.length
function displayConcept(choice) {
    let course;

    if (choice == -1) {
        // Return a random integer from 0 to (array length) - 1
        let randCourse = Math.floor(Math.random() * courses.length); 
        course = courses[randCourse];
    } else {
        course = courses[choice];
    }

    // Get a random concept from the selected course
    let courseVar = course.get("var");
    let randConcept = Math.floor(Math.random() * courseVar.length);
    let concept = courseVar[randConcept];

    document.getElementById('concept').innerHTML = concept.get("concept") + 
    "---" + course.get("name") + " #" + concept.get("number");
}
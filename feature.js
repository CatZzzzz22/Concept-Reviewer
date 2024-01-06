const CS135 = [
    new Map([["number", 1], ["concept", "123"], ["explain", ""]]),
    new Map([["number", 2], ["concept", "345"], ["explain", ""]])];

const CS136 = [];

const Math135 = [];

const Math136 = [];

function displayConcept(choice) {
    const courses = [
        new Map([["name", CS135], ["page", ""]]),
        new Map([["name", CS136], ["page", ""]]),
        new Map([["name", Math135], ["page", ""]]),
        new Map([["name", Math136], ["page", ""]])];

    let course;
    if (choice == -1) {
        // Return a random integer from 0 to (array length) - 1
        let randCourse = Math.floor(Math.random() * courses.length); 
        course = courses[randCourse];
    } else {
        course = courses[choice];
    }

    let courseName = course.get("name");
    let concept = courseName[Math.floor(Math.random() * courseName.length)];
    
    document.getElementById('concept').innerHTML = concept.get("concept") + 
    "---" + Object.keys({courseName})[0] + " #" + concept.get("number");
}
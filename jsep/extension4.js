/* ========== *
* Extension 4 *
* =========== */

function passingStudents(students) {
	const filteredStudents = students.filter(studentObj => {
		const scores = studentObj.grades.map(({ score }) => score);
		const average = Math.floor(scores.reduce((result, score) => result + score) / scores.length);

		return average >= 70;
	});

	return filteredStudents.map(({name}) => name);
}

var students = [
    {
    "name": "Marco",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}],
    },
    {
    "name": "Donna",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
    },
    {
    "name": "Jukay",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
    }
];

console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]

// console.log('length -->', Object.keys(students[0]).length)
// console.log('grades length -->', Object.keys(students[0].grades).length)
// console.log(students[0].grades[0].score)

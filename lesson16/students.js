class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
    }

    // Метод отримання віку
    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    // Метод отримання середнього балу
    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    // Метод відзначення присутності
    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    }

    // Метод відзначення відсутності
    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    }

    // Метод отримання середнього відвідування
    getAttendanceAverage() {
        const attended = this.attendance.filter(day => day === true).length;
        const total = this.attendance.filter(day => day !== null).length;
        return total === 0 ? 0 : attended / total;
    }

    // Метод підсумок
    summary() {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this.getAttendanceAverage();
        if (averageGrade > 90 && averageAttendance > 0.9) {
            return "Чудово.";
        } else if (averageGrade > 90 || averageAttendance > 0.9) {
            return "Добре, але ти можеш краще!";
        } else {
            return "Редиска!";
        }
    }
}

// Студенти
const firstStudent = new Student('Роберт', 'Новак', 2001, [81, 68, 100]);
const secondStudent = new Student('Василина', 'Білоберезко', 1999, [99, 88, 100]);

// Використання методів
firstStudent.present();
firstStudent.absent();

console.log(`Вік студента: ${firstStudent.getAge()}`);
console.log(`Середній бал: ${firstStudent.getAverageGrade()}`);
console.log(`Відвідуваність: ${firstStudent.getAttendanceAverage()}`);
console.log(`Підсумки: ${firstStudent.summary()}`);

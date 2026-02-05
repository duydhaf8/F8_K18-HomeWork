import Student from './Student'

export default class ClassRoom {
    name: string
    students: Student[]

    constructor(name: string) {
        this.name = name
        this.students = []
    }

    addStudent(student: Student): void {
        this.students.push(student)
    }

    removeStudent(student: Student): void {
        this.students = this.students.filter(s => s !== student)
    }

    notify(message: string): void {
        this.students.forEach(student => student.update(message))
    }

    postAnnouncement(message: string): void {
        console.log(`[${this.name}] Thông báo mới:`)
        this.notify(message)
    }
}

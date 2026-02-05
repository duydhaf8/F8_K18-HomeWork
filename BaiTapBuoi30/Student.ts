export default class Student {
    name: string

    constructor(name: string) {
        this.name = name
    }

    update(message: string): void {
        console.log(`${message} 👉 Học sinh ${this.name} nhận được`)
    }

}

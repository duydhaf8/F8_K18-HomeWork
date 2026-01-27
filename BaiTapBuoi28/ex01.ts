interface PartTime {
    id: number,
    name: string,
    salary: number,
    hoursWorked: number
}

const partTime: PartTime = {
    id: 2,
    name: "Binh",
    salary: 20,
    hoursWorked: 40
}

const updatedPartTime: PartTime = {
    ...partTime,
    hoursWorked: 45
}




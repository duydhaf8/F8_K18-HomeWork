import ClassRoom from './ClassRoom'
import Student from './Student'

const classRoom = new ClassRoom('Lớp JS Cơ Bản')

const an = new Student('An')
const binh = new Student('Bình')
const chi = new Student('Chi')

classRoom.addStudent(an)
classRoom.addStudent(binh)


classRoom.postAnnouncement('Mai kiểm tra OOP')

classRoom.addStudent(chi)

classRoom.postAnnouncement('Mai kiểm tra OOP')
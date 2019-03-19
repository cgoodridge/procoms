class Student 
{
    constructor(studentId, firstname, lastname, email, address)
    {
        this.studentId = studentId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.address = address;
    }

    get returnStudentId()
    {
        return this.studentId;
    }
}
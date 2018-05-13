///////////////////////////////////
// Request

///////////////////////////////////
// Response

export class Employee 
{
    public id: number;
    public name: string;
    public age: number;
    public salary: number;
    public hireDate: any;
    public employeeType: string;
    
    constructor(id: number, 
                    name: string,
                    age: number,
                    salary: number,
                    hireDate: any,
                    employeeType: string) {
        
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.hireDate = hireDate;
        this.employeeType = employeeType;
        
        
    }
}


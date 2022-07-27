/* object litral
employee={
    id:"a001",
    name:"mz",
    salary:"10000000"
};
document.write(employee.id+ " "+employee.name+" "+employee.salary);*/
 /*let emp= new Object;
    emp.id="aoo1";
    emp.name="MZ";
    emp.salary="3000000";
    document.write(emp.id+ " "+emp.name+" "+emp.salary);*/

function emp(id,name,salary)
{
    this.id=id;
    this.name=name;
    this.salary=salary;
}
emp=new emp("007","MZ","30000000000");
document.write(emp.id+" "+emp.name+" "+emp.salary);
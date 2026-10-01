package com.vcube.empportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vcube.empportal.model.Employee;
import com.vcube.empportal.repo.EmployeeRepo;

@Service
public class EmployeService {
	@Autowired
	EmployeeRepo employeeRepo;
	
	public List<Employee> getAllEmployeeDetails(){
		return employeeRepo.findAll();
				 
	}
	public Employee getEmployee(Integer eid){
		return employeeRepo.findById(eid).orElseThrow();
		
	}
    public Employee updateEmployee(Employee employee, Integer eid ){
		
		Employee empFromDb  = getEmployee(eid);
		empFromDb.setAge(employee.getAge());
		empFromDb.setCity(employee.getCity());
		empFromDb.setEname(employee.getEname());
		empFromDb.setSalary(employee.getSalary());
		empFromDb.setState(employee.getState());
		return employeeRepo.save (empFromDb);
	}
    public Employee createEmployee(Employee employee){
		employee.setEid(null);
		return employeeRepo.save(employee);
		
	}
    public String deleteEmployee(Integer eid){
		employeeRepo.deleteById(eid);
		return "Employee has been deleted successfully !!" + eid;
	}
	
	

	public static void main(String[] args) {
		

	}

}

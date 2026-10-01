package com.vcube.empportal.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vcube.empportal.model.Employee;
import com.vcube.empportal.service.EmployeService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class HelloController {
	@Autowired
	EmployeService employeService;

	 
	@GetMapping("/getEmpList")
	List<Employee> getAllEmployeeDetails(){
		return employeService.getAllEmployeeDetails();
				 
	}
	
	@GetMapping("/getEmp/{eid}")
	Employee getEmployee(@PathVariable Integer eid){
		return employeService.getEmployee(eid);
		
	}
	
	@PostMapping("/createEmp")
	Employee createEmployee(@RequestBody Employee employee){
		employee.setEid(null);
		return employeService.createEmployee(employee);
		
	}
	@PutMapping("updateEmp/{eid}")
	Employee updateEmployee(@RequestBody Employee employee, @PathVariable Integer eid ){
		
		
		return employeService.updateEmployee(employee, eid);
	}
	
	
	@DeleteMapping("deleteEmp/{eid}")
	String deleteEmployee(@PathVariable Integer eid){
		return employeService.deleteEmployee(eid);
	}
	
	


}

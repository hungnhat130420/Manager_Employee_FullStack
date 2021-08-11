package com.example.employee_manager_backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

import com.example.employee_manager_backend.model.Employee;
import com.example.employee_manager_backend.repository.EmployeeRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployee(){
		return employeeRepository.findAll();
		
	}
	
	//create employee 
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee emp) {
		return employeeRepository.save(emp);
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> findEmployeeById(@PathVariable Long id) {
		Employee emp = employeeRepository.findById(id)
				.orElseThrow(()->new ResourceAccessException("Employee not exist with id : " + id));
		 return ResponseEntity.ok(emp);
	}
	//update employee
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee e){
		Employee emp = employeeRepository.findById(id)
				.orElseThrow(()->new ResourceAccessException("Employee not exist with id : " + id));
		emp.setFirstName(e.getFirstName());
		emp.setLastName(e.getLastName());
		emp.setEmailId(e.getEmailId());
		
		Employee empUpdate = employeeRepository.save(emp);
		return ResponseEntity.ok(empUpdate);
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Employee emp = employeeRepository.findById(id)
				.orElseThrow(()->new ResourceAccessException("Employee not exist with id : " + id));
		employeeRepository.delete(emp);
		Map<String, Boolean> respon = new HashMap<>();
		respon.put("delete",Boolean.TRUE);
		return ResponseEntity.ok(respon);
	}
}

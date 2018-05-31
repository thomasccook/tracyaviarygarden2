package com.thomascookllc.tracyaviarygarden2staff.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/springjwt")
public class EmployeeREST {

    @Autowired
    private EmployeeSearch employeeSearch;

    @Autowired
    private EmployeeEdit employeeEdit;
    
    @RequestMapping(value ="/employee/search", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN_USER') or hasAuthority('STANDARD_USER')")
    public EmployeeSearchResponse search(@RequestBody EmployeeSearchRequest request){
    	
    	int g = 100;
    	g = 1000;
    	
    	return employeeSearch.search(request);
    }    

    @RequestMapping(value ="/employee/retrieve", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN_USER') or hasAuthority('STANDARD_USER')")
    public Employee retrieve(@RequestBody String id){ 
    	
    	int g = 100;
    	g = 1000;
    	
    	return employeeEdit.retrieve(id);
    }    
    
    @RequestMapping(value ="/employee/save", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN_USER') or hasAuthority('STANDARD_USER')")
    public Long saveXXX(@RequestBody Employee employee){
    	    	
    	return employeeEdit.save(employee);
    }     
    
    
}

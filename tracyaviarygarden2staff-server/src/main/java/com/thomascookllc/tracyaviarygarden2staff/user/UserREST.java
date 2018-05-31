package com.thomascookllc.tracyaviarygarden2staff.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.thomascookllc.tracyaviarygarden2staff.login.User;

import java.util.List;

import javax.persistence.EntityManagerFactory;

/**
 * Created by nydiarra on 06/05/17.
 */
@RestController
@RequestMapping("/springjwt")
public class UserREST {
	
    @Autowired
    private UserService userService;

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @RequestMapping(value ="/users", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN_USER') or hasAuthority('STANDARD_USER')")
    public List<User> getUsers(){
        return userService.findAllUsers();
    }    
    
    /*
    
    @RequestMapping(value ="/employees")
    @PreAuthorize("hasAuthority('ADMIN_USER') or hasAuthority('STANDARD_USER')")
    public List<Employee> getEmployees(){
    	
    	Iterable<Game> listGame = gameRepository.findAll();
    	
    	
        EntityManager session = entityManagerFactory.createEntityManager();
        try {
            List list = session.createNativeQuery("Select * from game where name=:name")
                    .setParameter("name", "Ticket to Ride")
                    .getResultList();
            
            int g =100;
            g = 200;            
        }
        catch (NoResultException e){
            return null;
        }
        finally {
            if(session.isOpen()) session.close();
        }    	
    	
    	
    	
    	List<Employee> list = new ArrayList<Employee>();
    	
    	Employee e = new Employee();
    	e.setId(100L);
    	e.setName("E1");
    	list.add(e);
    	
    	e = new Employee();
    	e.setId(200L);
    	e.setName("E2");
    	list.add(e);
    	
    	e = new Employee();
    	e.setId(300L);
    	e.setName("E3");
    	list.add(e);

    	e = new Employee();
    	e.setId(400L);
    	e.setName("E4");
    	list.add(e);
    	
    	e = new Employee();
    	e.setId(500L);
    	e.setName("E5");
    	list.add(e);
    	
    	e = new Employee();
    	e.setId(600L);
    	e.setName("E6");
    	list.add(e);
    	
    	e = new Employee();
    	e.setId(700L);
    	e.setName("E7");
    	list.add(e);
    	
    	e = new Employee();
    	e.setId(800L);
    	e.setName("E8");
    	list.add(e);
    	
        return list;
    }    

    @RequestMapping(value ="/do_employee_search", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN_USER') or hasAuthority('STANDARD_USER')")
    public EmployeeSearchResponse doEmployeeSearch(@RequestBody EmployeeSearchRequest request){
        
    	int g = 100;
    	g = 100;
    	
    	List<Employee> list = new ArrayList<Employee>();
    	
    	Employee e = new Employee();
    	e.setId(100L);
    	e.setName("E1");
    	list.add(e);
    	
    	e = new Employee();
    	e.setId(200L);
    	e.setName("E2");
    	list.add(e);
    	
    	e = new Employee();
    	e.setId(300L);
    	e.setName("E3");
    	list.add(e);

    	e = new Employee();
    	e.setId(400L);
    	e.setName("E4");
    	list.add(e);
    	
    	EmployeeSearchResponse response = new EmployeeSearchResponse();
    	response.setEmployeeList(list);
    	
    	
    	
    	return response;
    }    
    
    */
    

    
    
    
    
}

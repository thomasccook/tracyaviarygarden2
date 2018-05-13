package com.thomascookllc.tracyaviarygarden2staff.workflow.employee.search;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.thomascookllc.tracyaviarygarden2staff.workflow.employee.search.schema.Employee;

@Component
public class EmployeeEdit {

    //@Autowired
    //private EntityManagerFactory entityManagerFactory;
	
	@PersistenceContext
	protected EntityManager entityManager;
	
	
	public Employee retrieve(String id) {
		
		Employee employee = new Employee();
		
        //EntityManager session = entityManager.createEntityManager();
        try {
        	
        	String sql = "SELECT * from employee where id=" + id;
            Object[] obj = (Object[])entityManager.createNativeQuery(sql).getSingleResult();
            
            int n = 0;
            employee.setId(((BigInteger)obj[n++]).longValue());
            employee.setName(((String)obj[n++]));
            employee.setAge(((Integer)obj[n++]).longValue());
            employee.setSalary(((BigDecimal)obj[n++]).doubleValue());
            employee.setHireDate(((Date)obj[n++]));
            employee.setEmployeeType(((String)obj[n++]));

        }
        catch (NoResultException e){
            return null;
        }
        finally {
            //if(session.isOpen()) session.close();
        }  
	    	
		return employee;	
		
	}

	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
	@Transactional
	@Modifying
	public Long save(Employee employee) {
		

        //EntityManager session = entityManagerFactory.createEntityManager();

        try {
        	
            if(employee.getId() == null) {
            	String sql = "INSERT INTO employee (id, name, age, salary, hireDate, employeeType) VALUES (:id, :name, :age, :salary, :hireDate, :employeeType)";
                Query query= entityManager.createNativeQuery(sql);
                query.setParameter("id", employee.getId());
                query.setParameter("name", employee.getName());
                query.setParameter("age", employee.getAge());
                query.setParameter("salary", employee.getSalary());
                query.setParameter("hireDate", employee.getHireDate());
                query.setParameter("employeeType", employee.getEmployeeType());
                query.executeUpdate();
                
            } else {
            	
            	String sql = "UPDATE employee\n"
            				+ "SET\n"
            				+ "name= :name,\n"
            				+ "age= :age,\n"
            				+ "salary= :salary,\n"
            				+ "hireDate= :hireDate,\n"
            				+ "employeeType= :employeeType\n"
            				+ "WHERE id = :id";
            				
                Query query= entityManager.createNativeQuery(sql);
                query.setParameter("id", employee.getId());
                query.setParameter("name", employee.getName());
                query.setParameter("age", employee.getAge());
                query.setParameter("salary", employee.getSalary());
                query.setParameter("hireDate", employee.getHireDate());
                query.setParameter("employeeType", employee.getEmployeeType());
                query.executeUpdate();
            	
            }

        }
        catch (NoResultException e){
            return null;
        }
        finally {
            //if(session.isOpen()) session.close();
        }  

	    	
		return 1L;	
		
	}
	
	
}

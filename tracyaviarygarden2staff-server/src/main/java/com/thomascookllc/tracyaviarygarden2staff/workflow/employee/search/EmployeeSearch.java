package com.thomascookllc.tracyaviarygarden2staff.workflow.employee.search;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.thomascookllc.tracyaviarygarden2staff.shared.SqlBuilder;
import com.thomascookllc.tracyaviarygarden2staff.workflow.employee.search.schema.Column;
import com.thomascookllc.tracyaviarygarden2staff.workflow.employee.search.schema.Employee;
import com.thomascookllc.tracyaviarygarden2staff.workflow.employee.search.schema.EmployeeSearchRequest;
import com.thomascookllc.tracyaviarygarden2staff.workflow.employee.search.schema.EmployeeSearchResponse;

@Component
public class EmployeeSearch {

    @Autowired
    private EntityManagerFactory entityManagerFactory;
	
	public EmployeeSearchResponse search(EmployeeSearchRequest request) {
		
		int totalRowCount = 0;
		List<Employee> employeeList = new ArrayList<Employee>();
		
		
        EntityManager session = entityManagerFactory.createEntityManager();
        try {
        	
        	HashMap<String, Column> hmColumns = new HashMap<String, Column>();
        	for(Column column : request.getColumnList()) {
        		if(column.getSelected().booleanValue())
        			hmColumns.put(column.getName(), column);
        	}
        	
        	SqlBuilder sb = new SqlBuilder();
			sb.add("SELECT");
			sb.add("count(id)");
			sb.add("FROM");
			sb.add("employee");
			sb.add("WHERE 1=1");
			sb.addIntegerIn("id", request.getIdList());
			sb.addLikeIn("name", request.getNamePatternList());
			sb.addNumberRange("age", request.getAgeRangeList());
			sb.addNumberRange("salary", request.getSalaryRangeList());
			sb.addDateRange("hireDate", request.getHireDateRangeList());
			sb.addStringIn("employeeType", request.getEmployeeTypeList());
			sb.add("ORDER BY " + request.getSort() + " " + request.getDirection());        	
			String sql = sb.getSql();
			
            BigInteger biCount = (BigInteger)session.createNativeQuery(sql).getSingleResult();  
            totalRowCount = biCount.intValue();
        	
        	sb = new SqlBuilder();
			sb.add("SELECT 1");
			sb.addCol("id", hmColumns);
			sb.addCol("name", hmColumns);
			sb.addCol("age", hmColumns);
			sb.addCol("salary", hmColumns);
			sb.addCol("hireDate", hmColumns);
			sb.addCol("employeeType", hmColumns);
			sb.add("FROM");
			sb.add("employee");
			sb.add("WHERE 1=1");
			sb.addIntegerIn("id", request.getIdList());
			sb.addLikeIn("name", request.getNamePatternList());
			sb.addNumberRange("age", request.getAgeRangeList());
			sb.addNumberRange("salary", request.getSalaryRangeList());
			sb.addDateRange("hireDate", request.getHireDateRangeList());
			sb.addStringIn("employeeType", request.getEmployeeTypeList());
			sb.add("ORDER BY " + request.getSort() + " " + request.getDirection());
			sb.add("LIMIT " + request.getPageNumber() * request.getRowsPerPage() + "," + request.getRowsPerPage());
        	sql = sb.getSql();
            List list = session.createNativeQuery(sql).getResultList();
            
            

            for(Object objArray : list) {
            
            	Object[] obj = (Object[])objArray;
            	
            	int n = 1;
                Employee employee = new Employee();
                if(hmColumns.get("id")!=null)
                	employee.setId(((BigInteger)obj[n++]).longValue());
                if(hmColumns.get("name")!=null)
                	employee.setName(((String)obj[n++]));
                if(hmColumns.get("age")!=null)
                	employee.setAge(((Integer)obj[n++]).longValue());
                if(hmColumns.get("salary")!=null)
                	employee.setSalary(((BigDecimal)obj[n++]).doubleValue());
                if(hmColumns.get("hireDate")!=null)
                	employee.setHireDate(((Date)obj[n++]));
                if(hmColumns.get("employeeType")!=null)
                	employee.setEmployeeType(((String)obj[n++]));
                	
                employeeList.add(employee);
            }
        }
        catch (NoResultException e){
            return null;
        }
        finally {
            if(session.isOpen()) session.close();
        }  

        EmployeeSearchResponse response = new EmployeeSearchResponse();
        response.setTotalRowCount(totalRowCount);
        response.setTotalPageCount((int) Math.ceil(((double)totalRowCount / (double)request.getRowsPerPage())) );
    	response.setPageNumber(request.getPageNumber());
    	response.setRowsPerPage(request.getRowsPerPage());
    	response.setEmployeeList(employeeList);
    	response.setColumnList(request.getColumnList());		
    	
		return response;
	}


	
}

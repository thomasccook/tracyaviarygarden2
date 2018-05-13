package com.thomascookllc.tracyaviarygarden2staff.workflow.employee.search.schema;

import java.util.List;

public class EmployeeSearchResponse {

	private Integer totalRowCount;
	private Integer totalPageCount;
	private Long pageNumber;
	private Long rowsPerPage;
	
    private List<Employee> employeeList;
    private List<Column> columnList;
    
	public Integer getTotalRowCount() {
		return totalRowCount;
	}
	public void setTotalRowCount(Integer totalRowCount) {
		this.totalRowCount = totalRowCount;
	}
	public Integer getTotalPageCount() {
		return totalPageCount;
	}
	public void setTotalPageCount(Integer totalPageCount) {
		this.totalPageCount = totalPageCount;
	}
	public Long getPageNumber() {
		return pageNumber;
	}
	public void setPageNumber(Long pageNumber) {
		this.pageNumber = pageNumber;
	}
	public Long getRowsPerPage() {
		return rowsPerPage;
	}
	public void setRowsPerPage(Long rowsPerPage) {
		this.rowsPerPage = rowsPerPage;
	}
	public List<Employee> getEmployeeList() {
		return employeeList;
	}
	public void setEmployeeList(List<Employee> employeeList) {
		this.employeeList = employeeList;
	}
	public List<Column> getColumnList() {
		return columnList;
	}
	public void setColumnList(List<Column> columnList) {
		this.columnList = columnList;
	}
    


}

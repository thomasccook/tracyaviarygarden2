package com.thomascookllc.tracyaviarygarden2staff.employee;

import java.util.List;

import com.thomascookllc.tracyaviarygarden2staff.a_shared.schema.Column;
import com.thomascookllc.tracyaviarygarden2staff.a_shared.schema.DateRange;
import com.thomascookllc.tracyaviarygarden2staff.a_shared.schema.NumberRange;

public class EmployeeSearchRequest {

    private Long pageNumber;
    private Long rowsPerPage;

    private String sort;
    private String direction;

    private List<String> idList;
    private List<String> namePatternList;
    private List<NumberRange> ageRangeList;
    private List<NumberRange> salaryRangeList;
    private List<DateRange> hireDateRangeList;
    private List<String> employeeTypeList;
    
    private List<Column> columnList;
    
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
	public String getSort() {
		return sort;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
	public List<String> getIdList() {
		return idList;
	}
	public void setIdList(List<String> idList) {
		this.idList = idList;
	}
	public List<String> getNamePatternList() {
		return namePatternList;
	}
	public void setNamePatternList(List<String> namePatternList) {
		this.namePatternList = namePatternList;
	}
	public List<NumberRange> getAgeRangeList() {
		return ageRangeList;
	}
	public void setAgeRangeList(List<NumberRange> ageRangeList) {
		this.ageRangeList = ageRangeList;
	}
	public List<NumberRange> getSalaryRangeList() {
		return salaryRangeList;
	}
	public void setSalaryRangeList(List<NumberRange> salaryRangeList) {
		this.salaryRangeList = salaryRangeList;
	}
	public List<DateRange> getHireDateRangeList() {
		return hireDateRangeList;
	}
	public void setHireDateRangeList(List<DateRange> hireDateRangeList) {
		this.hireDateRangeList = hireDateRangeList;
	}
	public List<String> getEmployeeTypeList() {
		return employeeTypeList;
	}
	public void setEmployeeTypeList(List<String> employeeTypeList) {
		this.employeeTypeList = employeeTypeList;
	}
	
	public List<Column> getColumnList() {
		return columnList;
	}
	public void setColumnList(List<Column> columnList) {
		this.columnList = columnList;
	}


    
}

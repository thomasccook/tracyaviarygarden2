package com.thomascookllc.tracyaviarygarden2staff.shared;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;

import com.mysql.jdbc.StringUtils;
import com.thomascookllc.tracyaviarygarden2staff.workflow.employee.search.schema.Column;
import com.thomascookllc.tracyaviarygarden2staff.workflow.employee.search.schema.DateRange;
import com.thomascookllc.tracyaviarygarden2staff.workflow.employee.search.schema.NumberRange;

public class SqlBuilder {

	StringBuilder sb = new StringBuilder();
	List<Object> lstParam = new ArrayList<Object>();
	
	
	public void add(String line) {
		sb.append(line + "\n");
	}

	public void add(Boolean param, String line ) {
		if(param!=null) {
			sb.append(line + "\n");			
		}
	}		

//	public void add2(Boolean param, String line ) {
//		if(param!=null) {
//			sb.append(line + "\n");	
//			lstParam.add(param);
//		}
//	}		
	
	public void add(Integer param, String line ) {
		if(param!=null) {
			sb.append(line + "\n");			
		}
	}	

	public void addCol(String column, HashMap<String, Column> hm ) {
		if(hm.get(column)!=null) {
			sb.append("," + column + "\n");			
		}
	}		
	
	
//	public void add2(Integer param, String line ) {
//		if(param!=null) {
//			sb.append(line + "\n");
//			lstParam.add(param);
//		}
//	}	
	
	public void add(Float param, String line ) {
		if(param!=null) {
			sb.append(line + "\n");			
		}
	}		
	
//	public void add2(Float param, String line ) {
//		if(param!=null) {
//			sb.append(line + "\n");	
//			lstParam.add(param);
//		}
//	}		
	
	public void add(Long param, String line ) {
		if(param!=null) {
			sb.append(line + "\n");			
		}
	}
	
	/*
	public void add(String param, String line ) {
		if(!StringUtils.isEmptyOrWhitespaceOnly(param)) {
			sb.append(line + "\n");			
		}
	}
	*/

//	public void add2(String param, String line ) {
//		if(!StringUtils.isEmptyOrWhitespaceOnly(param)) {
//			sb.append(line + "\n");	
//			lstParam.add("%" + param + "%");
//		}
//	}	
	
//	public void add(String param, String line, List<Object> params ) {
//		if(!StringUtils.isEmptyOrWhitespaceOnly(param)) {
//			sb.append(line + "\n");	
//			params.add(param);
//		}
//	}	
	
//	public void add(Date start, Date end, String line ) {	
//		if(start!=null && end!=null) {
//			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//			sb.append(line + " BETWEEN '"+sdf.format(start)+"' AND '"+sdf.format(end)+"'" + "\n");		
//		}
//	}	
	
	public void add2(Object param, String line ) {

		if(param instanceof String) {
			String str = (String)param;
			if(str.trim().length() == 0 )
				return;
			param = "%" + ((String)param) + "%";
		}
			
		if(param!=null) {
			sb.append(line + "\n");	
			lstParam.add(param);
		}
	}	

	public void add3(Object param, String line ) {

		if(param instanceof String) {
			String str = (String)param;
			if(str.trim().length() == 0 )
				return;
			param = ((String)param) + "%";
		}
			
		if(param!=null) {
			sb.append(line + "\n");	
			lstParam.add(param);
		}
	}		
	
	/*
	public void addIn(Object param, String line ) {
			
		if(param!=null) {
			sb.append(line + "\n");	
		}
	}
	*/		
	
	public void addIntegerIn(String column, List<String> list ) {
		
		if(list!=null && list.size()>0) {
			int count = 0;
			sb.append("AND " + column + " IN (");	
			for(String id : list) {
				if(count > 0)
					sb.append(",");
				sb.append(id);
				count++;
			}
			sb.append(")" + "\n");	
		}
	}		
	
	public void addStringIn(String column, List<String> list ) {
		
		if(list!=null && list.size()>0) {
			int count = 0;
			sb.append("AND " + column + " IN (");	
			for(String id : list) {
				if(count > 0)
					sb.append(",");
				sb.append("'" + id + "'");
				count++;
			}
			sb.append(")" + "\n");	
		}
	}		
	
	public void addLikeIn(String column, List<String>  list ) {

		if(list!= null && list.size() > 0) {
			boolean firstPass = true;
			sb.append("AND (\n");
			for(String pattern : list) {
				if(firstPass == false)
					sb.append("OR ");	
				sb.append(column + " LIKE '%" + pattern + "%'\n");
				firstPass = false;
			}
			sb.append(")\n");
		}
	}	
	
	public void addNumberRange(String column, List<NumberRange> list ) {

		if(list!= null && list.size() > 0) {
			boolean firstPass = true;
			sb.append("AND (\n");
			for(NumberRange range : list) {
				if(firstPass == false)
					sb.append("OR ");	
				sb.append("(" +column + " BETWEEN "+range.getStart()+" AND "+range.getEnd()+" )\n");
				firstPass = false;
			}
			sb.append(")\n");
		}
		

	}	
	
	public void addDateRange(String column, List<DateRange> list ) {

		if(list!= null && list.size() > 0) {
			boolean firstPass = true;
			sb.append("AND (\n");
			for(DateRange range : list) {
				if(firstPass == false)
					sb.append("OR ");	
				sb.append("(" +column + " BETWEEN '"+range.getStart()+"' AND '"+range.getEnd()+"' )\n");
				firstPass = false;
			}
			sb.append(")\n");
		}
		

	}	
	
	public void add2(Date start, Date end, String variable ) {	

		if(start!=null && end == null) {
			sb.append("and ? <= "+variable + "\n");
			lstParam.add(start);
		} else if(start==null && end != null) {
			sb.append("and "+variable + " <= ? \n");
			lstParam.add(end);
		 }else if(start!=null && end != null) {
			sb.append("and "+variable+" BETWEEN ? and ? \n");
			lstParam.add(start);
			lstParam.add(end);
		}
		
	}	
	
	public void removeFinalUnion() {
		if(sb.length() > 6)
			sb.setLength(sb.length() - 6);
	}
	
	public String getSql() {
		return sb.toString();
	}
	
	///////////////////////////////////////////////
	// PreparedStatementSetter
	
	public PreparedStatementSetter getPreparedStatementSetter() {
		return new ThePreparedStatementSetter();
	}
	
    private class ThePreparedStatementSetter implements PreparedStatementSetter{

        public void setValues(PreparedStatement preparedStatement) throws SQLException 
        {        
        	for(int i=1; i <= lstParam.size(); i++) {
        		Object obj = lstParam.get(i-1);
        		if(obj instanceof String)        		
                    preparedStatement.setString(i, (String)obj);
        		else if(obj instanceof Boolean)        		
                    preparedStatement.setBoolean(i, (Boolean)obj);
        		else if(obj instanceof Integer)        		
                    preparedStatement.setInt(i, (Integer)obj);
        		else if(obj instanceof Float)        		
                    preparedStatement.setFloat(i, (Float)obj);        		
        		else if(obj instanceof Date) {
        			Date date = (Date)obj;
        			java.sql.Date sqlDate = new java.sql.Date(date.getTime());
        			preparedStatement.setDate(i, sqlDate);    
        			
        		}
        		
        	}
        }    	
    }	
	
	///////////////////////////////////////////////
	// ResultSetExtractor
    
	public ResultSetExtractor<Long> getLongResultSetExtractor() {
		return new LongResultSetExtractor();
	}    
    
	private class LongResultSetExtractor implements ResultSetExtractor
	{
		public Long extractData(ResultSet resultSet) throws SQLException, DataAccessException
		{			
			if (resultSet.next()) 
			{	
				return resultSet.getLong(1);
			}
			return null;

		}
	}	
	
}

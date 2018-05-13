package com.thomascookllc.tracyaviarygarden2staff.service;

import java.util.List;

import com.thomascookllc.tracyaviarygarden2staff.domain.RandomCity;
import com.thomascookllc.tracyaviarygarden2staff.domain.User;

/**
 * Created by nydiarra on 06/05/17.
 */
public interface GenericService {
	
    User findByUsername(String username);

    List<User> findAllUsers();

    List<RandomCity> findAllRandomCities();
}

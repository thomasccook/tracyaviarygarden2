package com.thomascookllc.tracyaviarygarden2staff.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thomascookllc.tracyaviarygarden2staff.login.User;
import com.thomascookllc.tracyaviarygarden2staff.login.UserRepository;

import java.util.List;

/**
 * Created by nydiarra on 07/05/17.
 */
@Service
public class UserService {
	
    @Autowired
    private UserRepository userRepository;

    /*
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    */

    public List<User> findAllUsers() {
        return (List<User>)userRepository.findAll();
    }

}

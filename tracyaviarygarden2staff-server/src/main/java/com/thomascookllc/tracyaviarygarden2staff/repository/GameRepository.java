package com.thomascookllc.tracyaviarygarden2staff.repository;

import org.springframework.data.repository.CrudRepository;

import com.thomascookllc.tracyaviarygarden2staff.domain.Game;

public interface GameRepository extends CrudRepository<Game, Integer> {

}
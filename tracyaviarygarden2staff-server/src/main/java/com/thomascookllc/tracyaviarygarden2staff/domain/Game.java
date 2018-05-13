package com.thomascookllc.tracyaviarygarden2staff.domain;

import javax.persistence.*;

@Entity
public class Game {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)
 private Integer id;

 private String name;

 private String description;

 public Game() {}

 public Game(String name, String description) {
   this.name = name;
   this.description = description;
 }

 public Integer getId() {
   return id;
 }

 public void setId(Integer id) {
   this.id = id;
 }

 public String getName() {
   return name;
 }

 public void setName(String name) {
   this.name = name;
 }

 public String getDescription() {
   return description;
 }

 public void setDescription(String description) {
   this.description = description;
 }
}
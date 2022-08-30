package com.example.springcrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springcrud.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
}

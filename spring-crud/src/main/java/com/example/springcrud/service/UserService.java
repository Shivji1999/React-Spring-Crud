package com.example.springcrud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springcrud.model.User;
import com.example.springcrud.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repo;
	
	public List<User> getAllUsers(){
		return repo.findAll();
	}
	
	public User getUserById(int id) {
		User user = repo.findById(id).get();
		if(user == null) {
			throw new RuntimeException("User not found");
		}
		return user;
	}
	
	public User deleteUser(int id) {
		User user = repo.findById(id).get();
		if(user == null) {
			throw new RuntimeException("User not found");
		}
		repo.deleteById(id);
		return user;
	}
	
	public User saveUser(User user) {
		return repo.save(user);
	}
	
//	public User updateUser(int id, User user) {
//		User userFound = repo.findById(id).get();
//		if(userFound == null) {
//			throw new RuntimeException("User not found");
//		}
//		
//		userFound = user;
//		
//		return user;
//	}

}

package com.example.springcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springcrud.model.User;
import com.example.springcrud.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/users")  
	private List<User> getAllBooks()   
	{  
	return userService.getAllUsers();  
	}  

	@GetMapping("/users/{id}")  
	private User getBooks(@PathVariable("id") int id)   
	{  
	return userService.getUserById(id);  
	}  
 
	@DeleteMapping("/users/{id}")  
	private void deleteBook(@PathVariable("id") int id)   
	{  
		userService.deleteUser(id);  
	}  
 
	@PostMapping("/users")  
	private User saveBook(@RequestBody User user)   
	{  
		return userService.saveUser(user);  
	}  

	@PutMapping("/users")  
	private User update(@RequestBody User books)   
	{  
		userService.saveUser(books);  
	return books;  
	}  

}

package com.hitam.todo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hitam.todo.entity.Todo;
import com.hitam.todo.repo.TodoRepository;
import com.hitam.todo.service.TodoService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class TodoController {
	@Autowired
	TodoService todoService;
	@Autowired
	TodoRepository todoRepo;
	
	@PostMapping("/todos")
	@ResponseBody
	public Todo insert(@RequestBody Todo todo) {
		
		todoService.insert(todo);
		
		return todo;
		
	}
	
	
	@GetMapping("/todos")
	@ResponseBody
	public List<Todo> fetch(){
		return  todoService.fetch();
		
	}
	
	
	@PutMapping("/todos/{id}")
	@ResponseBody
	public Todo update(@RequestBody Todo todo,@PathVariable int id) {
		if(todoRepo.existsById(id)) {
			todo.setId(id);
			todoService.insert(todo);
		}
		else {
			return null;
		}
		return todo;
	
	}	
	@GetMapping("/todos/{id}")
	@ResponseBody
	public Todo fetch1(@PathVariable int id) {
		if(todoRepo.existsById(id)) {
			List<Todo> i=todoService.fetch();
			return i.get(id-1);
		}
		else {
			return null;
		}
		
	
	}	
	
	
	}


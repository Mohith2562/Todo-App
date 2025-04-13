package com.hitam.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hitam.todo.entity.Todo;
import com.hitam.todo.repo.TodoRepository;

@Service
public class TodoService {
	
	@Autowired
	TodoRepository todoRepository;

	public void insert(Todo todo) {
		// TODO Auto-generated method stub
		todoRepository.save(todo);
	}

	public  List<Todo> fetch() {
		// TODO Auto-generated method stub
		
		List<Todo> i= (List<Todo>) todoRepository.findAll();
		return i;
	}

	
	

	
}

package com.hitam.todo.repo;

import org.springframework.data.repository.CrudRepository;

import com.hitam.todo.entity.Todo;

public interface TodoRepository extends CrudRepository<Todo, Integer> {

}

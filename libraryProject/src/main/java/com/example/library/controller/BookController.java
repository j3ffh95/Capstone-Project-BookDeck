package com.example.library.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.library.exception.ResourceNotFoundException;
import com.example.library.model.Book;
import com.example.library.repository.BookRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")

public class BookController {
	@Autowired
	private BookRepository bookRepo;

	// get all students
	@GetMapping("/allbooks")
	public List<Book> getAllBooks() {
		return bookRepo.findAll();
	}

	@PostMapping("/addbook")
	public Book newBook(@RequestBody Book s) {
		return bookRepo.save(s);
	}

	@GetMapping("/book/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable int id) {
		Book s = bookRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book not found"));
		return ResponseEntity.ok(s);
	}

	@GetMapping("/books/{title}")
	public List<Book> getBookByTitle(@PathVariable String title) {
		// return bookRepo.findByTitle(title);
		List<Book> books = bookRepo.findByTitle(title);
		if (books.isEmpty()) {
			System.out.println(new ResourceNotFoundException("Book(s) with the title " + title + " not found"));
		}
		return bookRepo.findByTitle(title);
	}

	@PutMapping("/book/{id}")
	public ResponseEntity<Book> updateBook(@PathVariable int id, @RequestBody Book book) {
		Book s = bookRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book not found"));
		s.setTitle(book.getTitle());
		s.setAuthor(book.getAuthor());
		s.setGenre(book.getGenre());
		Book updatedBook = bookRepo.save(s);
		return ResponseEntity.ok(updatedBook);
	}

	@DeleteMapping("/book/{id}")
	public String deleteBook(@PathVariable int id) {
		bookRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book not found"));
		bookRepo.deleteById(id);
		return "The book with id: " + id + " is removed from the database.";
	}

}

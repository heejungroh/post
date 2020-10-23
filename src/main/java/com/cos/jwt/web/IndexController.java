package com.cos.jwt.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.board.Board;
import com.cos.jwt.domain.board.BoardRepository;
import com.cos.jwt.domain.person.Person;
import com.cos.jwt.domain.person.PersonRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class IndexController {
	
	private final PersonRepository personRepository;
	
	private final BoardRepository boardRepository;
	
	@GetMapping({"", "/"})
	public String index() {
		return "index";
	}
	
	
	@PostMapping("/joinProc")
	public String 회원가입(@RequestBody Person person) {
		
		personRepository.save(person);
		return "ok";
	}
	
	//@CrossOrigin(origins = "http://127.0.0.1:5500", methods = RequestMethod.GET)
	@GetMapping("/person/{id}")
	public ResponseEntity<?> 회원정보(@PathVariable int id,
			HttpServletRequest request) {
		HttpSession session = request.getSession();
		if(session.getAttribute("principal") != null) {
			Person personEntity = personRepository.findById(id).get();
			return new ResponseEntity<Person>(personEntity,HttpStatus.OK);
		}
		return new ResponseEntity<String>("You don't have authorization",HttpStatus.FORBIDDEN);
	}
	
	@PostMapping("/board")
	public String 글쓰기(@RequestBody Board board) {
		Person personEntity = personRepository.findById(1).get();	
		board.setReadCount(0);
		board.setPerson(personEntity);
		boardRepository.save(board);
		return "ok";
	}
	
	@Transactional
	@GetMapping("/board")
	public List<Board> 글목록(){
		return boardRepository.findAll();
	}
	
	@Transactional
	@GetMapping("/board/{id}")
	public Board 글상세(@PathVariable int id){
		Board board =  boardRepository.findById(id).get();
		return board;//Jackson라이브러리 getter실행
	}
	
	@Transactional
	@RequestMapping(value="/board/{id}", method = RequestMethod.PUT)
	public @ResponseBody String 글수정(@RequestBody Board board){
	    return "ok";
	}
	
}










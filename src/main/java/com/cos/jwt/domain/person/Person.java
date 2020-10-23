package com.cos.jwt.domain.person;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.cos.jwt.domain.board.Board;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Person {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(unique = true)
	private String username; 
	private String password;
	private String email;
	
	@JsonIgnoreProperties({"person", "content"})//무시하고 싶은 변수명
	@OneToMany(mappedBy="person", fetch = FetchType.LAZY)//Post오브젝트의 user변수
	private List<Board> boards;
}


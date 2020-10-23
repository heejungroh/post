package com.cos.jwt.domain.board;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.cos.jwt.domain.person.Person;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Board {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;	
	private String title;
	@Column(length=100000)
	private String content;
	private int readCount;
	
	
	//User를 통해서 post를 호출할때무시
	@JsonIgnoreProperties({"boards"})
	@JoinColumn(name="personId")//외래키 이름 설정
	@ManyToOne//외래키 생성
	private Person person;
	

	
	
}

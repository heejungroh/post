package com.cos.jwt.config.jwt;

//interface = public static final
interface JwtProps {
	String secret = "비밀키";
	String auth = "Brearer";
	String header = "Authorization";
}


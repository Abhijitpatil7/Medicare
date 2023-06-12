package com.example.custom_exceptiom;

public class ResourceNotFoundException extends RuntimeException {
	
	public ResourceNotFoundException(String mesg) {
		super(mesg);
	}

}

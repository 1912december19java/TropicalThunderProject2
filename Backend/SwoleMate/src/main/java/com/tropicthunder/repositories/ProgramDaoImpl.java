package com.tropicthunder.repositories;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Repository
@Transactional
@EnableTransactionManagement
public class ProgramDaoImpl {

<<<<<<< HEAD
}
=======
	@Autowired
	private SessionFactory sf;

	public ProgramDaoImpl(SessionFactory sf) {
		this.sf = sf;
	}

}
>>>>>>> Development

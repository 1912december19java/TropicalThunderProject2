package com.tropicthunder.repositories;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.tropicthunder.models.Athlete;
import com.tropicthunder.models.Coach;

@Repository
@Transactional
@EnableTransactionManagement
public class LoginDaoImpl {

	@Autowired
	private SessionFactory sf;

	public LoginDaoImpl(SessionFactory sf) {
		this.sf = sf;
	}

	public String getAthleteEmail(Integer id) {
		Session session = sf.getCurrentSession();

		Athlete a = (Athlete) session.get(Athlete.class, id);

		return a.getEmail();
	}

	public String getCoachEmail(Integer id) {
		Session session = sf.getCurrentSession();

		Coach c = (Coach) session.get(Coach.class, id);

		return c.getEmail();
	}

	public String getAthletePw(Integer id) {
		Session session = sf.getCurrentSession();

		Athlete a = (Athlete) session.get(Athlete.class, id);

		return a.getPassword();
	}

	public String getCoachPw(Integer id) {
		Session session = sf.getCurrentSession();

		Coach c = (Coach) session.get(Coach.class, id);

		return c.getPassword();
	}

}

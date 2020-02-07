package com.tropicthunder.repositories;

import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.tropicthunder.models.Athlete;

@Repository
@Transactional
@EnableTransactionManagement
public class AthleteDaoImpl {

	@Autowired
	private SessionFactory sf;

	public AthleteDaoImpl(SessionFactory sf) {
		this.sf = sf;
	}

	public List<Athlete> getAllAthlete() {
		Session session = sf.getCurrentSession();

		Criteria c = session.createCriteria(Athlete.class);
		@SuppressWarnings("unchecked")
		List<Athlete> athlete = c.list();

		return athlete;
	}

	public Athlete getByEmail(String email) {
		Session session = sf.getCurrentSession();

		String hql = "FROM Athlete A WHERE A.email = :email";

		Query query = session.createQuery(hql);
		query.setString("email", email);

		Athlete athlete = (Athlete) query.list().get(0);
		return athlete;
	}

	public Athlete getById(Integer id) {
		Session session = sf.getCurrentSession();
		Athlete genre = (Athlete) session.get(Athlete.class, id);
		return genre;
	}

	public void saveOrUpdate(Athlete athlete) {
		Session session = sf.getCurrentSession();
		session.saveOrUpdate(athlete);
	}

	public Integer save(Athlete athlete) {
		Session session = sf.getCurrentSession();
		Integer id = (Integer) session.save(athlete);
		return id;
	}

	public void update(Athlete athlete) {
		Session session = sf.getCurrentSession();
		session.saveOrUpdate(athlete);
	}

	public void delete(Athlete athlete) {
		Session session = sf.getCurrentSession();
		session.delete(athlete);
	}

}

package com.tropicthunder.repositories;

import java.util.List;
import javax.transaction.Transactional;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import com.tropicthunder.models.Exercise;

@Repository
@Transactional
@EnableTransactionManagement
public class ExerciseDaoImpl {

	@Autowired
	private SessionFactory sf;

	public ExerciseDaoImpl(SessionFactory sf) {
		super();
		this.sf = sf;
	}

	public List<Exercise> getAllexercises() {
		Session session = sf.getCurrentSession();

		// Query q = (Query) session.createQuery("from Exercise");
		// List<Exercise> exercises = ((org.hibernate.Query) q).list();

		Criteria c = session.createCriteria(Exercise.class);
		@SuppressWarnings("unchecked")
		List<Exercise> exercises = c.list();
		return exercises;
	}

	public Exercise getById(Integer id) {
		Session session = sf.getCurrentSession();

		Exercise exercise = (Exercise) session.get(Exercise.class, id);
		System.out.println("I made it here");
		System.out.println(exercise);
		return exercise;
	}

	public void saveOrUpdate(Exercise exercise) {
		Session session = sf.getCurrentSession();

		session.saveOrUpdate(exercise);
	}

}

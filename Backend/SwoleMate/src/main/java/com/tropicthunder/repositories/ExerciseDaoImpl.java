package com.tropicthunder.repositories;

import java.util.List;
import javax.transaction.Transactional;
import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
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
		SQLQuery c = session.createSQLQuery("Select * from exercise_table;");		
		@SuppressWarnings("unchecked")
		List<Exercise> exercises = c.list();
		return exercises;
	}

	public Exercise getById(Integer id) {
		Session session = sf.getCurrentSession();
		int exercise_id = id;
		Exercise exercise = (Exercise) session.get(Exercise.class, exercise_id);
		return exercise;
	}

	public void save(Exercise exercise) {
		Session session = sf.getCurrentSession();
		exercise.setIsComplete(false);
		session.saveOrUpdate(exercise);
	}
	
	public void update(Exercise exercise) {
		Session session = sf.getCurrentSession();
		exercise.setIsComplete(true);
		session.saveOrUpdate(exercise);
	}

}

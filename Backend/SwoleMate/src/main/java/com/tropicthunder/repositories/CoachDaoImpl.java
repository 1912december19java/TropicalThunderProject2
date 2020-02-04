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
import com.tropicthunder.models.Coach;
import com.tropicthunder.models.Program;

@Repository
@Transactional
@EnableTransactionManagement
public class CoachDaoImpl {

  @Autowired
  private SessionFactory sf;
  
  public CoachDaoImpl(SessionFactory sf) {
    this.sf = sf;
  }
  
  public List<Athlete> getAthletes(int id){
    Session session = sf.getCurrentSession();
    Query q = session.createQuery("from athlete_table where coach_id = " + id);
    List<Athlete> athletes = q.list(); 
    return athletes;
  }

  public List<Coach> getAllCoaches() {
    Session session = sf.getCurrentSession();

    Criteria c = session.createCriteria(Coach.class);
    List<Coach> coaches = c.list();

    return coaches;
  }

  public Coach getById(Integer id) {
    Session session = sf.getCurrentSession();

    Coach coach = (Coach) session.get(Coach.class, id);

    return coach;
  }

  public void saveOrUpdate(Coach coach) {
    Session session = sf.getCurrentSession();
    session.saveOrUpdate(coach);
  }

  public void delete(Coach coach) {
    Session session = sf.getCurrentSession();

    session.delete(coach);
  }
  
  
  public List<Program> getPrograms(int coachId, int athleteId) {
    Session session = sf.getCurrentSession();
    Query q = session.createQuery("from program_table where coach_id = " + coachId + " AND athlete_id = " + athleteId);
    List<Program> programs = q.list();
    return programs;
  }
  
  public void saveOrUpdateProgram(Program program) {
    Session session = sf.getCurrentSession();

    session.save(program);
  }
  
  public void deleteProgram(Program program) {
    Session session = sf.getCurrentSession();

    session.delete(program);
  }
  
  public void addAthlete(int coachId, int athleteId) {
    Session session = sf.getCurrentSession();
    
    
  }
  
  public void deleteAthlete(int coachId, int athleteId) {
    Session session = sf.getCurrentSession();
    
  }
}

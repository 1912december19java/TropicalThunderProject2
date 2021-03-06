package com.tropicthunder.repositories;

import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import com.tropicthunder.models.Athlete;
import com.tropicthunder.models.Coach;
import com.tropicthunder.models.Exercise;
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

  public List<Athlete> getAthletes(int id) {
    Session session = sf.getCurrentSession();
    SQLQuery q = session.createSQLQuery("Select * from athlete_table where coach_id = " + id + ";");
    @SuppressWarnings("unchecked")
    List<Athlete> athletes = q.list();
    return athletes;
  }

  public List<Coach> getAllCoaches() {
    Session session = sf.getCurrentSession();

    Criteria c = session.createCriteria(Coach.class);
    @SuppressWarnings("unchecked")
    List<Coach> coaches = c.list();

    return coaches;
  }

  public Coach getByEmail(String email) {
    Session session = sf.getCurrentSession();

    String hql = "FROM Coach C WHERE C.email = :email";

    Query query = session.createQuery(hql);
    query.setString("email", email);

    Coach coach = (Coach) query.list().get(0);

    return coach;
  }

  public Coach getById(Integer id) {
    Session session = sf.getCurrentSession();

    Coach coach = (Coach) session.get(Coach.class, id);

    return coach;
  }

  public void saveOrUpdate(Coach coach) {
    Session session = sf.getCurrentSession();
    System.out.println(coach);
    session.saveOrUpdate(coach);
  }

  public void delete(Coach coach) {
    Session session = sf.getCurrentSession();
    session.delete(coach);
  }

  public List<Program> getPrograms(int coachId, int athleteId) {
    Session session = sf.getCurrentSession();
    SQLQuery q = session.createSQLQuery("Select * from program_table where coach_id = " + coachId
        + " AND athlete_id = " + athleteId + ";");
    @SuppressWarnings("unchecked")
    List<Program> programs = q.list();
    return programs;
  }

  public int saveOrUpdateProgram(Program program) {
    Session session = sf.getCurrentSession();
    session.save(program);
    SQLQuery q = session.createSQLQuery(
        "Select program_id from program_table where is_active = true AND athlete_id = " + program.getAthlete() + ";");
    @SuppressWarnings("unchecked")
    List<Integer> programId = q.list();
    return programId.get(0);
  }

  public void deleteProgram(Program program) {
    Session session = sf.getCurrentSession();
    session.delete(program);
  }

  public void addAthlete(int coachId, int athleteId) {
    Session session = sf.getCurrentSession();
    Query q = session.createSQLQuery("update athlete_table set coach_id = " + coachId
        + " WHERE athlete_id = " + athleteId + ";");
    q.executeUpdate();

  }

  public void deleteAthlete(int athleteId) {
    Session session = sf.getCurrentSession();
    Query q = session.createSQLQuery(
        "update athlete_table set coach_id = null where athlete_id =" + athleteId + ";");
    q.executeUpdate();
  }

  public Program getProgram(int athleteId) {
    Session session = sf.getCurrentSession();
    SQLQuery q = session.createSQLQuery(
        "Select * from program_table where is_active = true AND athlete_id = " + athleteId + ";");
    @SuppressWarnings("unchecked")
    List<Program> programs = q.list();
    return programs.get(0);
  }

  public void createProgramExercises(List<Exercise> exercises) {
    Session session = sf.getCurrentSession();
    SQLQuery q = null;
    for (Exercise e : exercises) {
      q = session.createSQLQuery(
          "insert into exercise_table (program_id, exercise_sets, exercise_reps, exercise_name, exercise_day, coach_notes, exercise_is_complete, exercise_load) values("
              + e.getProgram().getProgramId() + "," + e.getExerciseSets() + " , "
              + e.getExerciseReps() + ", " + e.getExerciseName() + "," + e.getExerciseDay() + ", "
              + e.getCoachNotes() + "," + e.getIsComplete() + "," + e.getCoachNotes() + ");");
      q.executeUpdate();
    }
  }
}

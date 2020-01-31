package com.revature.models;

public class Exercise {

  private int exercise_id;
  private int coach_id;
  private int sets;
  private int reps;
  private int load;
  private String name;
  private int day;
  private String video;
  private String coach_notes;
  private String athlete_notes;
  private boolean is_complete;

  public Exercise() {
   
  }
  public Exercise(int exercise_id, int coach_id, int sets, int reps, int load, String name, int day,
      String video, String coach_notes, String athlete_notes, boolean is_complete) {
    super();
    this.exercise_id = exercise_id;
    this.coach_id = coach_id;
    this.sets = sets;
    this.reps = reps;
    this.load = load;
    this.name = name;
    this.day = day;
    this.video = video;
    this.coach_notes = coach_notes;
    this.athlete_notes = athlete_notes;
    this.is_complete = is_complete;
  }

  public int getExercise_id() {
    return exercise_id;
  }

  public void setExercise_id(int exercise_id) {
    this.exercise_id = exercise_id;
  }

  public int getCoach_id() {
    return coach_id;
  }

  public void setCoach_id(int coach_id) {
    this.coach_id = coach_id;
  }

  public int getSets() {
    return sets;
  }

  public void setSets(int sets) {
    this.sets = sets;
  }

  public int getReps() {
    return reps;
  }

  public void setReps(int reps) {
    this.reps = reps;
  }

  public int getLoad() {
    return load;
  }

  public void setLoad(int load) {
    this.load = load;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getDay() {
    return day;
  }

  public void setDay(int day) {
    this.day = day;
  }

  public String getVideo() {
    return video;
  }

  public void setVideo(String video) {
    this.video = video;
  }

  public String getCoach_notes() {
    return coach_notes;
  }

  public void setCoach_notes(String coach_notes) {
    this.coach_notes = coach_notes;
  }

  public String getAthlete_notes() {
    return athlete_notes;
  }

  public void setAthlete_notes(String athlete_notes) {
    this.athlete_notes = athlete_notes;
  }

  public boolean isIs_complete() {
    return is_complete;
  }

  public void setIs_complete(boolean is_complete) {
    this.is_complete = is_complete;
  }

  @Override
  public String toString() {
    return "Exercise [exercise_id=" + exercise_id + ", coach_id=" + coach_id + ", sets=" + sets
        + ", reps=" + reps + ", load=" + load + ", name=" + name + ", day=" + day + ", video="
        + video + ", coach_notes=" + coach_notes + ", athlete_notes=" + athlete_notes
        + ", is_complete=" + is_complete + "]";
  }
}

package com.tropicthunder.swolemate.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="athlete_table")
public class Athlete {
 @Id
 @Column
 @GeneratedValue(strategy = GenerationType.IDENTITY)
  private String Athlete_id;
 @Column
  private String Coach_id;
 @Column
  private String name;
 @Column
  private String email;
 @Column
 private  String password;
  
  public Athlete(String athlete_id, String coach_id, String name, String email, String password) {
    super();
    Athlete_id = athlete_id;
    Coach_id = coach_id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  

  public Athlete() {
    super();
  }


  public String getAthlete_id() {
    return Athlete_id;
  }

  public void setAthlete_id(String athlete_id) {
    Athlete_id = athlete_id;
  }

  public String getCoach_id() {
    return Coach_id;
  }

  public void setCoach_id(String coach_id) {
    Coach_id = coach_id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @Override
  public String toString() {
    return "Athlete [Athlete_id=" + Athlete_id + ", Coach_id=" + Coach_id + ", name=" + name
        + ", email=" + email + ", password=" + password + "]";
  }
 

}

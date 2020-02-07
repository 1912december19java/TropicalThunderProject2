package com.tropicthunder.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "athlete_table")
public class Athlete {

	@Id
	@Column(name = "athlete_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer athleteId;

	@OneToOne()
	@JoinColumn(name = "coach_id")
	private Coach coach;

	@Column(name = "athlete_name")
	private String name;

	@Column(name = "athlete_email")
	private String email;

	@Column(name = "athlete_password")
	private String password;

	public Coach getCoach() {
		return coach;
	}

	public void setCoach(Coach coach) {
		this.coach = coach;
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

	public Integer getAthleteId() {
		return athleteId;
	}

	public void setAthleteId(Integer athleteId) {
		this.athleteId = athleteId;
	}

	public Athlete(Integer athleteId, Coach coach, String name, String email, String password) {
		super();
		this.athleteId = athleteId;
		this.coach = coach;
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public Athlete() {
		super();
	}

	@Override
	public String toString() {
		return "Athlete [athleteId=" + athleteId + ", coach=" + coach + ", name=" + name + ", email=" + email
				+ ", password=" + password + "]";
	}

}
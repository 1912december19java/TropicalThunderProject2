package com.tropicthunder.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "program_table")
public class Program {

	public Program() {
		super();
	}

	@Id
	@Column(name = "program_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int programId;

//	@Column(name = "coach_id")
//	private int coachId;
//
//	@Column(name = "athlete_id")
//	private int athleteId;

	@Column(name = "program_duration")
	private int programDuration;

	@Column(name = "program_frequency")
	private int programFrequency;

	@Column(name = "program_is_active")
	private boolean isActive;

	@Column(name = "program_is_complete")
	private boolean isComplete;

//	@OneToMany(mappedBy = "program_id", fetch = FetchType.EAGER)
//	@JsonIgnoreProperties()
//	@Column(name = "program_exercises")
//	private List<Exercise> exercises;

	@ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
	@JoinColumn(name = "coach_id")
	@JsonIgnoreProperties()
	private Coach coach;

	@ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
	@JoinColumn(name = "athlete_id")
	@JsonIgnoreProperties()
	private Athlete athlete;

	public int getProgramId() {
		return programId;
	}

	public void setProgramId(int programId) {
		this.programId = programId;
	}

	public int getProgramDuration() {
		return programDuration;
	}

	public void setProgramDuration(int programDuration) {
		this.programDuration = programDuration;
	}

	public int getProgramFrequency() {
		return programFrequency;
	}

	public void setProgramFrequency(int programFrequency) {
		this.programFrequency = programFrequency;
	}

	public boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(boolean isActive) {
		this.isActive = isActive;
	}

	public boolean getIsComplete() {
		return isComplete;
	}

	public void setIsComplete(boolean isComplete) {
		this.isComplete = isComplete;
	}

//	public List<Exercise> getExercises() {
//		return exercises;
//	}
//
//	public void setExercises(List<Exercise> exercises) {
//		this.exercises = exercises;
//	}

	public Coach getCoach() {
		return coach;
	}

	public void setCoach(Coach coach) {
		this.coach = coach;
	}

	public Athlete getAthlete() {
		return athlete;
	}

	public void setAthlete(Athlete athlete) {
		this.athlete = athlete;
	}

	public Program(int programId, int programDuration, int programFrequency, boolean isActive, boolean isComplete,
			List<Exercise> exercises, Coach coach, Athlete athlete) {
		super();
		this.programId = programId;
		this.programDuration = programDuration;
		this.programFrequency = programFrequency;
		this.isActive = isActive;
		this.isComplete = isComplete;
//		this.exercises = exercises;
		this.coach = coach;
		this.athlete = athlete;
	}
	
}

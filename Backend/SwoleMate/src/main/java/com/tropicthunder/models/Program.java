package com.tropicthunder.models;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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

	@OneToMany(mappedBy = "program_id", fetch = FetchType.EAGER)
	@JsonIgnoreProperties()
	@Column(name = "program_exercises")
	private List<Exercise> exercises;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "coach_id")
	@JsonIgnoreProperties()
	private Coach coach;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "athlete_id")
	@JsonIgnoreProperties()
	private Athlete athlete;

	public int getProgramId() {
		return programId;
	}

	public void setProgramId(int programId) {
		this.programId = programId;
	}

//	public int getCoachId() {
//		return coachId;
//	}
//
//	public void setCoachId(int coachId) {
//		this.coachId = coachId;
//	}
//
//	public int getAthleteId() {
//		return athleteId;
//	}
//
//	public void setAthleteId(int athleteId) {
//		this.athleteId = athleteId;
//	}

	public List<Exercise> getExercises() {
		return exercises;
	}

	public void setExercises(List<Exercise> exercises) {
		this.exercises = exercises;
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

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public boolean isComplete() {
		return isComplete;
	}

	public void setComplete(boolean isComplete) {
		this.isComplete = isComplete;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
//		result = prime * result + athleteId;
//		result = prime * result + coachId;
		result = prime * result + ((exercises == null) ? 0 : exercises.hashCode());
		result = prime * result + (isActive ? 1231 : 1237);
		result = prime * result + (isComplete ? 1231 : 1237);
		result = prime * result + programDuration;
		result = prime * result + programFrequency;
		result = prime * result + programId;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Program other = (Program) obj;
//		if (athleteId != other.athleteId)
//			return false;
//		if (coachId != other.coachId)
//			return false;
		if (exercises == null) {
			if (other.exercises != null)
				return false;
		} else if (!exercises.equals(other.exercises))
			return false;
		if (isActive != other.isActive)
			return false;
		if (isComplete != other.isComplete)
			return false;
		if (programDuration != other.programDuration)
			return false;
		if (programFrequency != other.programFrequency)
			return false;
		if (programId != other.programId)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Program [programId=" + programId + ",  exercises="
				+ exercises + ", programDuration=" + programDuration + ", programFrequency=" + programFrequency
				+ ", isActive=" + isActive + ", isComplete=" + isComplete + "]";
	}

}

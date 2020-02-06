package com.tropicthunder.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "exercise_table")
public class Exercise {

	@Id
	@Column(name = "exercise_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int exerciseId;

	@Column(name = "exercise_sets")
	private int exerciseSets;

	@Column(name = "exercise_reps")
	private int exerciseReps;

	@Column(name = "exercise_load")
	private String exerciseLoad;

	@Column(name = "exercise_name")
	private String exerciseName;

	@Column(name = "exercise_day")
	private int exerciseDay;

	@Column(name = "coach_notes")
	private String coachNotes;

	@Column(name = "athlete_notes")
	private String athleteNotes;

	@Column(name = "exercise_url")
	private String exerciseUrl;

	@Column(name = "exercise_is_complete")
	private boolean isComplete;

	@OneToOne
	@JoinColumn(name = "program_id")
	@JsonIgnoreProperties({"exercises","coach","athlete"})
	private Program program;

	public Exercise(int exerciseId, int exerciseSets, int exerciseReps, String exerciseLoad, String exerciseName,
			int exerciseDay, String coachNotes, String athleteNotes, String exerciseUrl, boolean isComplete,
			Program program) {
		super();
		this.exerciseId = exerciseId;
		this.exerciseSets = exerciseSets;
		this.exerciseReps = exerciseReps;
		this.exerciseLoad = exerciseLoad;
		this.exerciseName = exerciseName;
		this.exerciseDay = exerciseDay;
		this.coachNotes = coachNotes;
		this.athleteNotes = athleteNotes;
		this.exerciseUrl = exerciseUrl;
		this.isComplete = isComplete;
		this.program = program;
	}
	public Exercise() {
		super();
	}

	public int getExerciseId() {
		return exerciseId;
	}

	public void setExerciseId(int exerciseId) {
		this.exerciseId = exerciseId;
	}

	public int getExerciseSets() {
		return exerciseSets;
	}

	public void setExerciseSets(int exerciseSets) {
		this.exerciseSets = exerciseSets;
	}

	public int getExerciseReps() {
		return exerciseReps;
	}

	public void setExerciseReps(int exerciseReps) {
		this.exerciseReps = exerciseReps;
	}

	public String getExerciseLoad() {
		return exerciseLoad;
	}

	public void setExerciseLoad(String exerciseLoad) {
		this.exerciseLoad = exerciseLoad;
	}

	public String getExerciseName() {
		return exerciseName;
	}

	public void setExerciseName(String exerciseName) {
		this.exerciseName = exerciseName;
	}

	public int getExerciseDay() {
		return exerciseDay;
	}

	public void setExerciseDay(int exerciseDay) {
		this.exerciseDay = exerciseDay;
	}

	public String getCoachNotes() {
		return coachNotes;
	}

	public void setCoachNotes(String coachNotes) {
		this.coachNotes = coachNotes;
	}

	public String getAthleteNotes() {
		return athleteNotes;
	}

	public void setAthleteNotes(String athleteNotes) {
		this.athleteNotes = athleteNotes;
	}

	public String getExerciseUrl() {
		return exerciseUrl;
	}

	public void setExerciseUrl(String exerciseUrl) {
		this.exerciseUrl = exerciseUrl;
	}

	public boolean isComplete() {
		return isComplete;
	}

	public void setComplete(boolean isComplete) {
		this.isComplete = isComplete;
	}

	public Program getProgram() {
		return program;
	}

	public void setProgram(Program program) {
		this.program = program;
	}
	@Override
	public String toString() {
		return "Exercise [exerciseId=" + exerciseId + ", exerciseSets=" + exerciseSets + ", exerciseReps="
				+ exerciseReps + ", exerciseLoad=" + exerciseLoad + ", exerciseName=" + exerciseName + ", exerciseDay="
				+ exerciseDay + ", coachNotes=" + coachNotes + ", athleteNotes=" + athleteNotes + ", exerciseUrl="
				+ exerciseUrl + ", isComplete=" + isComplete + ", program=" + program + "]";
	}
	
	

}
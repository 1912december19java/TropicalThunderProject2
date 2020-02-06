package com.tropicthunder.models;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "exercise_table")
public class Exercise {

    @Id
    @Column(name = "exercise_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int exercise_id;

    @Column(name = "exercise_sets")
    private int exercise_sets;

    @Column(name = "exercise_reps")
    private int exercise_reps;

    @Column(name = "exercise_load")
    private int exercise_load;

    @Column(name = "exercise_name")
    private String exercise_name;

    @Column(name = "exercise_day")
    private int exercise_day;

    @Column(name = "coach_notes")
    private String coach_notes;

    @Column(name = "athlete_notes")
    private String athlete_notes;

    @Column(name = "exercise_url")
    private String exercise_url;

    @Column(name = "is_complete")
    private boolean is_complete;

    @OneToOne
    @JoinColumn(name = "program_id")
    private int program_id;

    public Exercise() {
        super();
        // TODO Auto-generated constructor stub
    }

    public Exercise(int exercise_id, int program_id, int exercise_sets, int exercise_reps, int exercise_load,
            String exercise_name, int exercise_day, String coach_notes, String athlete_notes, String exercise_url,
            boolean is_complete, List<Program> programs) {
        super();
        this.exercise_id = exercise_id;

        this.exercise_sets = exercise_sets;
        this.exercise_reps = exercise_reps;
        this.exercise_load = exercise_load;
        this.exercise_name = exercise_name;
        this.exercise_day = exercise_day;
        this.coach_notes = coach_notes;
        this.athlete_notes = athlete_notes;
        this.exercise_url = exercise_url;
        this.is_complete = is_complete;
        this.program_id = program_id;
    }

    public int getExercise_id() {
        return exercise_id;
    }

    public void setExercise_id(int exercise_id) {
        this.exercise_id = exercise_id;
    }

    public int getProgram_id() {
        return program_id;
    }

    public void setProgram_id(int program_id) {
        this.program_id = program_id;
    }

    public int getExercise_sets() {
        return exercise_sets;
    }

    public void setExercise_sets(int exercise_sets) {
        this.exercise_sets = exercise_sets;
    }

    public int getExercise_reps() {
        return exercise_reps;
    }

    public void setExercise_reps(int exercise_reps) {
        this.exercise_reps = exercise_reps;
    }

    public int getExercise_load() {
        return exercise_load;
    }

    public void setExercise_load(int exercise_load) {
        this.exercise_load = exercise_load;
    }

    public String getExercise_name() {
        return exercise_name;
    }

    public void setExercise_name(String exercise_name) {
        this.exercise_name = exercise_name;
    }

    public int getExercise_day() {
        return exercise_day;
    }

    public void setExercise_day(int exercise_day) {
        this.exercise_day = exercise_day;
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

    public String getExercise_url() {
        return exercise_url;
    }

    public void setExercise_url(String exercise_url) {
        this.exercise_url = exercise_url;
    }

    public boolean isIs_complete() {
        return is_complete;
    }

    public void setIs_complete(boolean is_complete) {
        this.is_complete = is_complete;
    }

    public int getProgram_table() {
        return program_id;
    }

    public void setProgram_table(Integer program_id) {
        this.program_id = program_id;
    }

    @Override
    public String toString() {
        return "Exercise [exercise_id=" + exercise_id + ", program_id=" + program_id + ", exercise_sets="
                + exercise_sets + ", exercise_reps=" + exercise_reps + ", exercise_load=" + exercise_load
                + ", exercise_name=" + exercise_name + ", exercise_day=" + exercise_day + ", coach_notes=" + coach_notes
                + ", athlete_notes=" + athlete_notes + ", exercise_url=" + exercise_url + ", is_complete=" + is_complete
                + ", program_id=" + program_id + "]";
    }

}
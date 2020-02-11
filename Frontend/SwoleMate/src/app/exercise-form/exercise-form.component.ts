import { Component, OnInit } from "@angular/core";
import { Exercise } from "../exercise";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Program } from '../program';
import { CoachServiceService } from '../coach.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { AthleteService } from '../athlete.service';
import { Athlete } from '../athlete';
import { Coach } from '../coach';
import { Exercises } from '../exercises';
import { ExercisesService } from '../exercises.service';

@Component({
  selector: "app-exercise-form",
  templateUrl: "./exercise-form.component.html",
  styleUrls: ["./exercise-form.component.css"]
})
export class ExerciseFormComponent implements OnInit {

  athleteName: string;

  constructor(private fb: FormBuilder, private coachService: CoachServiceService, private router: Router, private athleteService: AthleteService, private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.athleteService.get(+localStorage.getItem('athleteId'))
      .subscribe(
        data => this.athleteName = data.name
      );
  }


  workoutForm1 = this.fb.group({
    exercise1: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    }),
    exercise2: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    }),
    exercise3: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    })
  });

  workoutForm2 = this.fb.group({
    exercise1: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    }),
    exercise2: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    }),
    exercise3: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    })
  });

  workoutForm3 = this.fb.group({
    exercise1: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    }),
    exercise2: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    }),
    exercise3: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    })
  });

  workoutForm4 = this.fb.group({
    exercise1: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    }),
    exercise2: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    }),
    exercise3: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    })
  });

  workoutForm5 = this.fb.group({
    exercise1: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    }),
    exercise2: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    }),
    exercise3: this.fb.group({
      name: [""],
      sets: [""],
      reps: [""],
      load: [""],
      coachNotes: [""]
    })
  });

  uploadProgram() {
    let program = new Program();
    let workouts: FormGroup[] = [
      this.workoutForm1,
      this.workoutForm2,
      this.workoutForm3,
      this.workoutForm4,
      this.workoutForm5
    ];
    for (let i = 0; i < 5; i++) {
      let e: Exercise = new Exercise();
      e.exerciseName = workouts[i].value.exercise1.name;
      e.exerciseSets = workouts[i].value.exercise1.sets;
      e.exerciseReps = workouts[i].value.exercise1.reps;
      e.exerciseLoad = workouts[i].value.exercise1.load;
      e.coachNotes = workouts[i].value.exercise1.coachNotes;
      e.exerciseDay = i + 1;
      e.isComplete = false;
      program.programExercises.push(e);

      e = new Exercise();
      e.exerciseName = workouts[i].value.exercise2.name;
      e.exerciseSets = workouts[i].value.exercise2.sets;
      e.exerciseReps = workouts[i].value.exercise2.reps;
      e.exerciseLoad = workouts[i].value.exercise2.load;
      e.coachNotes = workouts[i].value.exercise2.coachNotes;
      e.exerciseDay = i + 1;
      e.isComplete = false;
      program.programExercises.push(e);

      e = new Exercise();
      e.exerciseName = workouts[i].value.exercise3.name;
      e.exerciseSets = workouts[i].value.exercise3.sets;
      e.exerciseReps = workouts[i].value.exercise3.reps;
      e.exerciseLoad = workouts[i].value.exercise3.load;
      e.coachNotes = workouts[i].value.exercise3.coachNotes;
      e.exerciseDay = i + 1;
      e.isComplete = false;
      program.programExercises.push(e);
    }
    program.coach = new Coach();
    program.athlete = new Athlete();
    program.coach.id = +localStorage.getItem('id');
    program.athlete.athleteId = +localStorage.getItem('athleteId');
    program.isActive = true;
    program.isComplete = false;
    program.programDuration = 1;
    program.programFrequency = 5;
    let id = this.coachService.createProgram(program);
    for (let a of program.programExercises) {
       a.program.programId = +id;
    }
    this.exercisesService.saveProgramExercises(program.programExercises);
  }
}

import { Component, OnInit } from "@angular/core";
import { Exercise } from "../exercise";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Program } from '../program';
import { CoachServiceService } from '../coach.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: "app-exercise-form",
  templateUrl: "./exercise-form.component.html",
  styleUrls: ["./exercise-form.component.css"]
})
export class ExerciseFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private coachService: CoachServiceService) { }

  ngOnInit() {
  }

  workoutForm1 = this.fb.group({
    exercise1: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    }),
    exercise2: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    }),
    exercise3: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    })
  });

  workoutForm2 = this.fb.group({
    exercise1: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    }),
    exercise2: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    }),
    exercise3: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    })
  });

  workoutForm3 = this.fb.group({
    exercise1: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    }),
    exercise2: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    }),
    exercise3: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    })
  });

  workoutForm4 = this.fb.group({
    exercise1: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    }),
    exercise2: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    }),
    exercise3: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    })
  });

  workoutForm5 = this.fb.group({
    exercise1: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    }),
    exercise2: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    }),
    exercise3: this.fb.group({
      name: [''],
      sets: [''],
      reps: [''],
      load: [''],
      coachNotes: ['']
    })
  });

  uploadProgram() {
    let program = new Program();
    let workouts: FormGroup[] = [this.workoutForm1, this.workoutForm2, this.workoutForm3, this.workoutForm4, this.workoutForm5];
    program.programDuration = 1;
    program.programFrequency = 5;
    for (let i = 0; i < 5; i++) {
        program.programExercises.push(new Exercise (workouts[i].value.exercise1.name,
         workouts[i].value.exercise1.sets,
         workouts[i].value.exercise1.reps,
         workouts[i].value.exercise1.load,
         workouts[i].value.exercise1.coachNotes,
         i+1));

         program.programExercises.push(new Exercise (workouts[i].value.exercise2.name,
          workouts[i].value.exercise2.sets,
          workouts[i].value.exercise2.reps,
          workouts[i].value.exercise2.load,
          workouts[i].value.exercise2.coachNotes,
          i+1));

          program.programExercises.push(new Exercise (workouts[i].value.exercise3.name,
            workouts[i].value.exercise3.sets,
            workouts[i].value.exercise3.reps,
            workouts[i].value.exercise3.load,
            workouts[i].value.exercise3.coachNotes,
            i+1));
    }
    this.coachService.createProgram(program);
  }
}


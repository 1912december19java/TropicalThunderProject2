package com.tropicthunder.services;

import java.util.List;
import com.tropicthunder.models.Coach;
import com.tropicthunder.models.Program;

public interface ModelService<T> {

	List<T> getAll();

	T get(int id);

	void saveOrUpdate(T t);

	default Integer save(T t) {
		throw new ServiceMethodNotImplementedException();
	}

	default void update(T t) {
		throw new ServiceMethodNotImplementedException();
	}

	default void delete(T t) {
		throw new ServiceMethodNotImplementedException();
	}

  List<Program> getPrograms(int coachId, int athleteId);

  default Coach getCoach(int t) {
    throw new ServiceMethodNotImplementedException();
}

  void saveOrUpdateProgram(Program program);

  default Program getCurrentProgram(int id) {
    throw new ServiceMethodNotImplementedException();
  }

}

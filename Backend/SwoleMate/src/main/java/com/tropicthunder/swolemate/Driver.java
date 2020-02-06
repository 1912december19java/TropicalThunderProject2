package com.tropicthunder.swolemate;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.tropicthunder.models.Athlete;
import com.tropicthunder.repositories.AthleteDaoImpl;

@Deprecated
public class Driver {
  
  public static void main(String[] args) {
    
    ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
    
    AthleteDaoImpl athleteDao = ac.getBean(AthleteDaoImpl.class);
    
   System.out.println(athleteDao.getAllAthlete());
  }
   

}

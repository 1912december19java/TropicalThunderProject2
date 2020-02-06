package com.tropicthunder;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.tropicthunder.models.Athlete;
import com.tropicthunder.repositories.AthleteDaoImpl;

public class Driver {

  public static void main(String[] args) {
    ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
    
    AthleteDaoImpl genreDao = ac.getBean(AthleteDaoImpl.class);
    
    Athlete horror = genreDao.getById(1);
    

    System.out.println(horror); 
    }

}

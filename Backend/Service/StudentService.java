package com.studentapi.student.portal.management.Service;

import com.studentapi.student.portal.management.DTO.StudentDTO;
import com.studentapi.student.portal.management.Entity.StudentEntity;

import java.util.List;

//hidden
public interface StudentService {
    public StudentEntity Registerlogic(StudentDTO sd);

    boolean Loginlogic(Long reg, String password);

    List<StudentDTO> DisplayUsingRegLogic(Long reg);

    String Update(StudentDTO sdf);

    public String deletebyid(long reg);
//    public StudentEntity Updatedbyid(long reg,StudentDTO ste)
}

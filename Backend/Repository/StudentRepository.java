package com.studentapi.student.portal.management.Repository;

import com.studentapi.student.portal.management.Entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
//save,findall,findById,deleteById,Count
@Repository
public interface StudentRepository extends JpaRepository<StudentEntity,Long> {
    //login
    Optional<StudentEntity> findByRegAndPassword(Long reg,String password);//boolean =>1(true)//0(false)
    //select *from student where reg=? and password=?


    List<StudentEntity> findByReg(Long reg);
    // select * from student where reg=?
}

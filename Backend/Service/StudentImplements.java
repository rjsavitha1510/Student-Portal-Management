package com.studentapi.student.portal.management.Service;

import com.studentapi.student.portal.management.DTO.StudentDTO;
import com.studentapi.student.portal.management.Entity.StudentEntity;
import com.studentapi.student.portal.management.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentImplements  implements StudentService{

    @Autowired
    private StudentRepository std;

//post
    @Override
    public StudentEntity Registerlogic(StudentDTO sd)
    {
        StudentEntity se=new StudentEntity(sd.getReg(), sd.getName(),sd.getPassword(),sd.getCollege(),sd.getYear(),sd.getSemester());
       return   std.save(se);
    }

//get
    @Override
    public List<StudentDTO> DisplayUsingRegLogic(Long reg)//0
    {
        List<StudentEntity> getdata=std.findByReg(reg);//0
        List<StudentDTO> transfer=new ArrayList<>();//add,get,set,remove,clear
        for(StudentEntity getdatas:getdata)
        {
            StudentDTO setdata= new StudentDTO();
            setdata.setName(getdatas.getName());//entity=>dto
            setdata.setReg(getdatas.getReg());
            setdata.setCollege(getdatas.getCollege());
            setdata.setYear(getdatas.getYear());
            setdata.setSemester(getdatas.getSemester());
            transfer.add(setdata);

        }
        return transfer;
    }
    //put
    @Override
    public String Update(StudentDTO get)//00
    {
        List<StudentEntity> updates=std.findByReg(get.getReg());//00
        if(!updates.isEmpty()){
            StudentEntity se=updates.get(0);//dto=>entity
            se.setName(get.getName());
            se.setPassword(get.getPassword());
            se.setCollege(get.getCollege());
            se.setYear(get.getYear());
            se.setSemester(get.getSemester());
            std.save(se);
            return "Data updated successfully";
        }
        else
        {
            return "Data not present in the database";
        }
    }
    //delete
    @Override
    public String deletebyid(long reg)
    {
        if(std.existsById(reg))
        {
            std.deleteById(reg);
           return "value deleted successfully";
        }
        else
        {
            return "Value not deleted";
        }
    }
    //login validation
    @Override
    public boolean Loginlogic(Long reg, String password)
    {
        Optional<StudentEntity> login=std.findByRegAndPassword(reg,password);
        return login.isPresent() && login.get().getPassword().equals(password);

    }
}

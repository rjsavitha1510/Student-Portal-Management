package com.studentapi.student.portal.management.Controller;

import com.studentapi.student.portal.management.DTO.StudentDTO;
import com.studentapi.student.portal.management.Entity.StudentEntity;
import com.studentapi.student.portal.management.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class StudentController {
    @Autowired
    private StudentService ss;
    @PostMapping("/student-register")
    public StudentEntity RegisterApi(@RequestBody StudentDTO sts)
    {
        return ss.Registerlogic(sts);
    }

    @PostMapping("/loginpage")
    public ResponseEntity<String> loginapi(@RequestBody StudentDTO sf)
    {
        if(ss.Loginlogic(sf.getReg(),sf.getPassword()))
        {
            return ResponseEntity.ok("Login Successfully");//

        }
        else
        {
            return ResponseEntity.ok("Login failed");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<String> Updateapi(@RequestBody StudentDTO df)//00
    {
        String response=ss.Update(df);//00

        if(response.equals("Data updated successfully")){
            return ResponseEntity.ok("Data updated successfully");
        }
        else {
            return ResponseEntity.ok("Data not present in the database");
        }
    }

    @GetMapping("/displaydata/{reg}")
    public List<StudentDTO> Displayapi(@PathVariable(name="reg") Long reg)//0
    {
        return ss.DisplayUsingRegLogic(reg);//0
    }

  @DeleteMapping("/student-delete/{reg}")
    public String deletereg(@PathVariable(name = "reg") long reg)
  {
      return ss.deletebyid(reg);
  }


}

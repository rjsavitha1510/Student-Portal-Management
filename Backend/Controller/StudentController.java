package com.studentapi.student.portal.management.Controller;

import com.studentapi.student.portal.management.DTO.MarkDTO;
import com.studentapi.student.portal.management.Entity.MarkEntity;
import com.studentapi.student.portal.management.Service.MarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class MarkController {
    @Autowired
    private MarkService msd;
    //post
    @PostMapping("/postmarks")
    public MarkEntity showmark(@RequestBody  MarkDTO ml)
    {
        System.out.println("name"+ml.getName());
        return msd.postdata(ml);
    }
    //get
    @GetMapping("/getmarks/{reg}")
    public List<MarkDTO> getstudentmark(@PathVariable(name="reg") Long reg)
    {
        return msd.getmark(reg);
    }
    //update
    @PutMapping("/putmarks")
    public ResponseEntity<String> updatedmark(@RequestBody MarkDTO mp)
    {
        String res=msd.Updated(mp);
        if(res.equals("Data updated successfully"))
        {
            return ResponseEntity.ok("Data updated successfully");
        }
        else {
            return ResponseEntity.ok("Data not present in the database");
        }
    }

    @GetMapping("/all-marks")
    public List<MarkDTO> Displayall(){
        return msd.getall();
    }

  @DeleteMapping(path="/delete/{reg}")
    public ResponseEntity<String> Markdelete(@PathVariable Long reg)
  {
      String response=msd.Deletelogic(reg);
      if(response.equals("deleted successfully"))
      {
          return ResponseEntity.ok("deleted successfully");
      }
      else {
          return ResponseEntity.ok("delete failed");
      }
  }
}

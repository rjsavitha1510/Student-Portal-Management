package com.studentapi.student.portal.management.Service;
import com.studentapi.student.portal.management.DTO.MarkDTO;
import com.studentapi.student.portal.management.Entity.MarkEntity;
import com.studentapi.student.portal.management.Repository.MarkRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
@Service
public class MarkImplements implements  MarkService{
    @Autowired
    private MarkRepository mr;
    //post
    @Override
    public MarkEntity postdata(MarkDTO mk)
    {
        MarkEntity ms=new MarkEntity( mk.getReg(), mk.getName(), mk.getSubject(), mk.getSubcode(), mk.getMark(), mk.getGrade(), mk.getResult(), mk.getCgpa());
        return  mr.save(ms);
    }
    //get
    @Override
    public List<MarkDTO>getmark(Long reg)
    {
        List<MarkEntity> mo=mr.findByReg(reg);
        List<MarkDTO> mn=new ArrayList<>();
        for(MarkEntity mov:mo)
        {
            MarkDTO mj=new MarkDTO();
            mj.setReg(mov.getReg());
            mj.setName(mov.getName());
            mj.setSubject(mov.getSubject());
            mj.setSubcode(mov.getSubcode());
            mj.setMark(mov.getMark());
            mj.setGrade(mov.getGrade());
            mj.setResult(mov.getResult());
            mj.setCgpa(mov.getCgpa());
            mn.add(mj);
        }
       return mn;

    }
@Override
public List<MarkDTO> getall()
    {
        List<MarkEntity> mo=mr.findAll();
        List<MarkDTO> mn=new ArrayList<>();
        for(MarkEntity mov:mo)
        {
            MarkDTO mj=new MarkDTO();
            mj.setReg(mov.getReg());
            mj.setName(mov.getName());
            mj.setSubject(mov.getSubject());
            mj.setSubcode(mov.getSubcode());
            mj.setMark(mov.getMark());
            mj.setGrade(mov.getGrade());
            mj.setResult(mov.getResult());
            mj.setCgpa(mov.getCgpa());
            mn.add(mj);
        }
        return mn;

    }
    //update
    @Override
    public String Updated(MarkDTO mc)
    {
        List<MarkEntity> mh=mr.findByReg(mc.getReg());
        if(!mh.isEmpty())
        {
            MarkEntity mrt=mh.get(0);
            mrt.setReg(mc.getReg());
            mrt.setName(mc.getName());
            mrt.setSubject(mc.getSubject());
            mrt.setSubcode(mc.getSubcode());
            mrt.setMark(mc.getMark());
            mrt.setResult(mc.getResult());
            mrt.setGrade(mc.getGrade());
            mrt.setCgpa(mc.getCgpa());
            mr.save(mrt);
            return "Data updated successfully";

        }
        else
        {
            return "Data not present in the database";
        }
    }
//delete
@Transactional
@Override
public String Deletelogic(Long reg)
    {
        List<MarkEntity> deletel=mr.deleteByReg(reg);
        if(!deletel.isEmpty())
        {
            return "deleted successfully";
        }
        else {
            return "delete failed";
        }
    }

}


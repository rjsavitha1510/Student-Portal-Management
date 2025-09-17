package com.studentapi.student.portal.management.Service;

import com.studentapi.student.portal.management.DTO.MarkDTO;
import com.studentapi.student.portal.management.Entity.MarkEntity;
import jakarta.transaction.Transactional;

import java.util.List;

public interface MarkService {
    public MarkEntity postdata(MarkDTO mk);
    public List<MarkDTO> getmark(Long reg);

    List<MarkDTO> getall();

    public String Updated(MarkDTO mc);

    //delete
        @Transactional
        String Deletelogic(Long reg);


    //delete

}

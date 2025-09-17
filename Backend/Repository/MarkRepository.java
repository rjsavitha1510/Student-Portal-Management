package com.studentapi.student.portal.management.Repository;

import com.studentapi.student.portal.management.Entity.MarkEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MarkRepository extends JpaRepository<MarkEntity,Long> {
List<MarkEntity>findByReg(Long reg);
@Transactional
    List<MarkEntity> deleteByReg(Long reg);
}

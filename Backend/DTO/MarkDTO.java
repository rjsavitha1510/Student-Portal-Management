package com.studentapi.student.portal.management.DTO;


public class MarkDTO {
    private Long reg;
    public String name;
    public String subject;
    public String subcode;
    public int mark;
    public char grade;
    public String result;
    public double cgpa;

    public Long getReg() {
        return reg;
    }

    public void setReg(Long reg) {
        this.reg = reg;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getSubcode() {
        return subcode;
    }

    public void setSubcode(String subcode) {
        this.subcode = subcode;
    }

    public int getMark() {
        return mark;
    }

    public void setMark(int mark) {
        this.mark = mark;
    }

    public char getGrade() {
        return grade;
    }

    public void setGrade(char grade) {
        this.grade = grade;
    }


    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public double getCgpa() {
        return cgpa;
    }

    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }

    public MarkDTO( Long reg, String name, String subject, String subcode, int mark, char grade, String result, double cgpa) {
        this.reg = reg;
        this.name = name;
        this.subject = subject;
        this.subcode = subcode;
        this.mark = mark;
        this.grade = grade;
        this.result = result;
        this.cgpa = cgpa;
    }

    public MarkDTO() {
    }


}

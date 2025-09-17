package com.studentapi.student.portal.management.DTO;

public class StudentDTO {

    private Long reg;
    private String name;
    private String password;
    private String college;
    private int year;
    private int semester;

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public StudentDTO(Long reg, String name, String password, String college, int year, int semester) {
        this.reg = reg;
        this.name = name;
        this.password = password;
        this.college = college;
        this.year = year;
        this.semester = semester;
    }

    public StudentDTO() {
    }
}

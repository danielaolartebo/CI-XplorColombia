package com.xplorcolombia.xplorcolombia.dto;

import java.io.Serializable;
import java.util.Date;

public class ModificationsDTO implements Serializable {
    private Integer id;
    private String name;
    private String description;
    private String modification;
    private Date modificationDate;
    private Integer useragId;

    public ModificationsDTO(Integer id, String name, String description, String modification, Date modificationDate, Integer useragId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.modification = modification;
        this.modificationDate = modificationDate;
        this.useragId = useragId;
    }

    public ModificationsDTO(String name){
        this.name = name;
    }
}



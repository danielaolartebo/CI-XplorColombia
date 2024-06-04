package com.xplorcolombia.xplorcolombia.dto;

import java.io.Serializable;
import java.util.Date;

public class PackageDestinationDTO implements Serializable {
    private Integer id;
    private Integer packageId;
    private Integer destinationId;

    public PackageDestinationDTO(Integer id, Integer packageId, Integer destinationId) {
        this.id = id;
        this.packageId = packageId;
        this.destinationId = destinationId;
    }
}

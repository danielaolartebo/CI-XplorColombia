package com.xplorcolombia.xplorcolombia.service;

import com.xplorcolombia.xplorcolombia.domain.Package;
import com.xplorcolombia.xplorcolombia.dto.PackageDTO;

import java.util.List;

public interface PackageService extends GenericService<Package, Integer> {


    public List<PackageDTO> seePackages();
}
package com.xplorcolombia.xplorcolombia.repository;

import com.xplorcolombia.xplorcolombia.domain.UserAG;
import com.xplorcolombia.xplorcolombia.dto.UserAGDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserAGRepository extends JpaRepository<UserAG,Integer> {
    @Query(nativeQuery = true)
    Optional<UserAG> findByEmail(@Param("email") String email);
}

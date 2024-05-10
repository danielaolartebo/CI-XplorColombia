package com.xplorcolombia.xplorcolombia.security;

import com.xplorcolombia.xplorcolombia.domain.UserAG;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.security.SignatureException;
import java.util.Date;

@Service
public class JwtTokenProvider {

    private static final String SECRET_KEY = "claveSecretaJWT";

    private static final long EXPIRATION_TIME = 3600000;

    public static String generateToken(String username) {
        Date now = new Date();
        Date expiration = new Date(now.getTime() + EXPIRATION_TIME);

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public static String validateToken(String token) {
        try {
            return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getSubject();
        } catch (Exception e) {
            return null; // Token inválido
        }
    }
}


package com.mayaparsons.meowmatters;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Reads cats from the SQL database using plain SQL queries.
 */
@Repository
public class CatRepository {

    private final JdbcTemplate jdbcTemplate;

    public CatRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Cat> findAll() {
        String sql = "SELECT id, name, age, breed, image, summary, alt FROM cats ORDER BY id";
        return jdbcTemplate.query(sql, (rs, rowNum) -> new Cat(
                rs.getLong("id"),
                rs.getString("name"),
                rs.getInt("age"),
                rs.getString("breed"),
                rs.getString("image"),
                rs.getString("summary"),
                rs.getString("alt")
        ));
    }
}

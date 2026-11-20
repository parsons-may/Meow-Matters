package com.mayaparsons.meowmatters;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cats")
@CrossOrigin(origins = "http://localhost:5173")
public class CatController {

    private final CatRepository catRepository;

    public CatController(CatRepository catRepository) {
        this.catRepository = catRepository;
    }

    @GetMapping
    public List<Cat> getAllCats() {
        return catRepository.findAll();
    }
}

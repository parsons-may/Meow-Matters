package com.mayaparsons.meowmatters;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cats")
public class CatController {

    @GetMapping
    public List<Cat> getAllCats() {
        return List.of(
                new Cat(
                        1L,
                        "Luna",
                        2,
                        "Domestic Shorthair",
                        "A playful and affectionate cat."
                ),
                new Cat(
                        2L,
                        "Milo",
                        4,
                        "Persian",
                        "A calm cat who enjoys quiet afternoons."
                ),
                new Cat(
                        3L,
                        "Oliver",
                        1,
                        "Tabby",
                        "An energetic cat who loves toys."
                )
        );
    }
}
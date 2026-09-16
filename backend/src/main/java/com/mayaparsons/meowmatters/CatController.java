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

    @GetMapping
    public List<Cat> getAllCats() {
        return List.of(
                new Cat(
                        1L,
                        "Lily",
                        3,
                        "Domestic Shorthair",
                        "/images/Lily.jpeg",
                        "Lily is a snugglebug who needs lots of attention and loves meeting new people!",
                        "Lily the cat smiling at the camera"
                ),
                new Cat(
                        2L,
                        "Max",
                        1,
                        "Domestic Shorthair",
                        "/images/Max.jpeg",
                        "Max is a rambunctious kitten! He loves toys and snuggling with his twin sister Ruby!",
                        "Max the cat sitting and looking at the camera"
                ),
                new Cat(
                        3L,
                        "Coco",
                        4,
                        "Domestic Shorthair",
                        "/images/Coco.jpeg",
                        "Coco loves snuggles and naps. He is shy at first but affectionate once he knows you!",
                        "Coco the cat sleeping"
                ),
                new Cat(
                        4L,
                        "Reice",
                        2,
                        "Domestic Shorthair",
                        "/images/Reice.jpeg",
                        "Reice is a cuddly cat who loves treats and gives plenty of affection.",
                        "Reice the cat sitting and looking at the camera"
                ),
                new Cat(
                        5L,
                        "Ruby",
                        1,
                        "Domestic Shorthair",
                        "/images/Ruby.jpeg",
                        "Ruby may be shy at first, but with her brother they are an unstoppable duo!",
                        "Ruby the cat looking at the camera"
                ),
                new Cat(
                        6L,
                        "Pumpkin",
                        9,
                        "Domestic Shorthair",
                        "/images/Pumpkin.jpeg",
                        "Pumpkin may be one of our older and slightly grumpier cats, but he has a soft spot for affection.",
                        "Pumpkin the cat sleeping"
                )
        );
    }
}
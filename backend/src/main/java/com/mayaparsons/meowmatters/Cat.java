package com.mayaparsons.meowmatters;

public record Cat(
        Long id,
        String name,
        int age,
        String breed,
        String description
) {
}
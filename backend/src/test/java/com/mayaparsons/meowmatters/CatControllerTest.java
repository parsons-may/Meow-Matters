package com.mayaparsons.meowmatters;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class CatControllerTest {

    @Autowired
    private CatController catController;

    @Test
    void shouldReturnSixCats() {
        List<Cat> cats = catController.getAllCats();

        assertEquals(6, cats.size());
    }

    @Test
    void shouldReturnLilyAsFirstCat() {
        List<Cat> cats = catController.getAllCats();
        Cat firstCat = cats.get(0);

        assertEquals(1L, firstCat.id());
        assertEquals("Lily", firstCat.name());
    }

    @Test
    void shouldGiveEveryCatANameAndImage() {
        List<Cat> cats = catController.getAllCats();

        assertTrue(
                cats.stream().allMatch(cat ->
                        cat.name() != null
                                && !cat.name().isBlank()
                                && cat.image() != null
                                && !cat.image().isBlank()
                )
        );
    }

    @Test
    void shouldGiveEveryCatAccessibleAltText() {
        List<Cat> cats = catController.getAllCats();

        assertFalse(
                cats.stream().anyMatch(cat ->
                        cat.alt() == null || cat.alt().isBlank()
                )
        );
    }
}

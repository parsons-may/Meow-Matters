CREATE TABLE IF NOT EXISTS cats (
    id      BIGINT       PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    age     INT          NOT NULL,
    breed   VARCHAR(100) NOT NULL,
    image   VARCHAR(255) NOT NULL,
    summary VARCHAR(500) NOT NULL,
    alt     VARCHAR(255) NOT NULL
);

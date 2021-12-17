DROP DATABASE IF EXISTS leaderboard;
CREATE DATABASE leaderboard;
USE leaderboard;

CREATE TABLE players (
    id SERIAL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    CONSTRAINT "players_pkey" PRIMARY KEY (id ASC)
);

CREATE TABLE player_scores (
    id SERIAL,
    player_id INTEGER NOT NULL,
    score INTEGER NOT NULL,
    CONSTRAINT "player_scores_pkey" PRIMARY KEY (id ASC),
    CONSTRAINT fk_player FOREIGN KEY (player_id) REFERENCES players(id)
);

CREATE INDEX player_scores_player_id on player_scores(player_id);
CREATE INDEX player_scores_score on player_scores(score);

INSERT INTO players (name, email) VALUES ('Test Player 1', 'test_player_1@example.com');
INSERT INTO players (name, email) VALUES ('Test Player 2', 'test_player_2@example.com');
INSERT INTO players (name, email) VALUES ('Test Player 3', 'test_player_3@example.com');
INSERT INTO players (name, email) VALUES ('Test Player 4', 'test_player_4@example.com');
INSERT INTO players (name, email) VALUES ('Test Player 5', 'test_player_5@example.com');


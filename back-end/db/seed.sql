\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('What''s going on', 'Marvin Gaye', 'What''s Going On', '3:53', true),
('Bad', 'Michael Jackson', 'Bad', '4:07', false),
('Lean On Me', 'Bill Withers', 'Still Bill', '4:18', true),
('With a Little Help from My Friends', 'Joe Cocker', 'With a Little Help from My Friends', '5:13', true),
('I''ll Make Love To You', 'Boyz II Men', 'II', '3:56', false),
('Life', 'Des''ree', 'Supernatural', '3:29', false);

-- Insert initial data into the reviews table
INSERT INTO reviews (song_id, reviewer, title, content, rating) VALUES
(1, 'Jane Doe', 'Marvin Gaye''s Masterpiece', 'A timeless classic that never gets old.', 5),
(1, 'John Smith', 'Meaningful lyrics', 'Great song with a powerful message.', 4),
(2, 'Chris P. Bacon', 'MJ is Bad!', 'Iconic beats but feels a bit repetitive.', 3),
(3, 'Terry Aki', 'Lean on this song', 'A soulful rendition that lifts the spirits.', 5),
(4, 'Sam Saturday', 'With a Little Help from My Heart', 'Joe Cocker at his finest. The emotion is palpable.', 5),
(5, 'Pat Myback', 'Boyz II Men review', 'Feels like a nineties relic. Not their best.', 2),
(6, 'Paige Turner', 'Life is Good', 'An underrated gem with a strong vocal performance.', 4),
(3, 'Sam Reed', 'Lean on This Classic', 'Bill Withers'' iconic voice shines in this timeless track.', 5),
(5, 'Cleo Patra', 'Romantic Overload', 'Boyz II Men bring their A-game to this soulful ballad. Pure nostalgia.', 4);

select
  "filmId",
  "title"
from
  "films"
where
  "rentalRate" < 30
limit
  50

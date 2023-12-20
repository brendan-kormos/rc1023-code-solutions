select
  "firstName",
  "lastName"
from
  "rentals"
  join "inventory" using ("inventoryId")
  join "customers" using ("customerId")
  join "films" using ("filmId")
where
  "title" = 'Magic Mallrats'

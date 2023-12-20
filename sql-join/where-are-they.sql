select
  "line1",
  "cities"."name",
  "district",
  "countries"."name" -- can not just use "name" (I THINK because the key names are not unique)
from "addresses"
join "cities" using ("cityId") join "countries" using ("countryId")

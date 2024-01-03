select
  "countries"."name" as "country",
  count("cities"."countryId") as "cities"
from
  "cities"
  join "countries" using ("countryId")
group by
  "countries"."name"

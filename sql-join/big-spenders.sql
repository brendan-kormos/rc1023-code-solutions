select
  "amount",
  "firstName",
  "lastName" --can do "customers"."firstName", "customers"."lastName",
  --"amount", "firstName', "lastName" works (I THINK because the key names are unique, this wouldn't work if names were not unique)
from
  "payments"
  join "customers" using ("customerId")
order by
  "amount" desc
limit
  10

select
  "firstName",
  "lastName",
  sum("amount") as "totalSpent"
from
  "payments"
  join "customers" using ("customerId")
group by
  "customerId"
order by
  "totalSpent"

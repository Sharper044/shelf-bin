Update shelves1
Set name = $2, price = $3
Where bin_id = $1;

Select name, price
From shelves1
Where bin_id = $1;
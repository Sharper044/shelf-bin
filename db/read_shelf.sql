Select name, bin_id
From shelves1
Where shelf_id = $1
Order By bin_id;
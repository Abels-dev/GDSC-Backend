use("test");

//Q1
db.sales.aggregate([
   {
      $group: {
         _id: "$date",
         averageSales: { $avg: "$amount" },
      },
   },
   {
      $sort: { averageSales: -1 },
   },
   {
      $limit: 5,
   },
]);

//Q2

db.person.aggregate([
   {
      $group: {
         _id: "$favoriteFruit",
         count: { $sum: 1 },
      },
   },
   { $sort: { count: -1 } },
]);

// Q3
db.person.aggregate([
   {
      $group: {
         _id: {
            gender: "$gender",
            isActive: "$isActive",
         },
         count: { $sum: 1 },
      },
   },
   {
      $project: {
         _id: 0,
         gender: "$_id.gender",
         isActive: "$_id.isActive",
         count: 1,
      },
   },
   {
      $sort: {
         gender: 1,
      },
   },
]);

// Q4

db.person.aggregate([
   {
      $group: {
         _id: "$company.location.country",
         averageAge: { $avg: "$age" },
      },
   },
   {
      $project: {
         _id: 0,
         averageAge: 1,
         country: "$_id",
      },
   },
   {
      $sort: {
         country: 1,
      },
   },
]);

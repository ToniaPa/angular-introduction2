export interface Person {
  givenName: string;
  surName: string;
  age: number;
  email: string;
  address: string;
}

export interface EPerson {
  givenName: string;
  surName: string;
  age: string;
  email: string;
  education: string;
}

// το παρακάτω το βάλαμε για ευκολία, κανονικά θα έπρεπε να το βάζαμε αλλού και όχι στο Interface π.χ. στο component που κανουμε display τα data (= simple-database-example.component.ts)
export const ManyPerson: EPerson[] = [
  {
    "givenName": "Aubrey",
    "surName": "Young",
    "age": "27",
    "email": "a.young39@gmail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Aaron",
    "surName": "Russell",
    "age": "45",
    "email": "aarussell@live.com",
    "education": "Bachelor’s degree"
  },
  {
    "givenName": "Daniel",
    "surName": "Cooper",
    "age": "45",
    "email": "daniel.e.cooper@rocketmail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Natalie",
    "surName": "Evans",
    "age": "55",
    "email": "n.m@aol.com",
    "education": "Bachelor’s degree"
  },
  {
    "givenName": "Lillian",
    "surName": "Simmons",
    "age": "33",
    "email": "l.simmons@gmail.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Sean",
    "surName": "Walker",
    "age": "54",
    "email": "s_walker@hotmail.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Samantha",
    "surName": "Sanchez",
    "age": "74",
    "email": "s_sanchez@hotmail.com",
    "education": "High school diploma or equivalent"
  },
  {
    "givenName": "Jonathan",
    "surName": "Brown",
    "age": "28",
    "email": "j_brown@gmail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Timothy",
    "surName": "Washington",
    "age": "53",
    "email": "t.washington11@aol.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Sofia",
    "surName": "Powell",
    "age": "46",
    "email": "sofia.powell60@aol.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Mark",
    "surName": "Rodriguez",
    "age": "26",
    "email": "mark_w_rodriguez@ymail.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Jonathan",
    "surName": "Ramirez",
    "age": "26",
    "email": "jonathan.ramirez@hotmail.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Justin",
    "surName": "Campbell",
    "age": "44",
    "email": "justin90@aol.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Brianna",
    "surName": "Price",
    "age": "28",
    "email": "brianna_faith_price@ymail.com",
    "education": "Bachelor’s degree"
  },
  {
    "givenName": "William",
    "surName": "Adams",
    "age": "49",
    "email": "william78@yahoo.com",
    "education": "High school diploma or equivalent"
  },
  {
    "givenName": "Mary",
    "surName": "Henderson",
    "age": "20",
    "email": "mhenderson@rocketmail.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "John",
    "surName": "Moore",
    "age": "72",
    "email": "jmoore@hotmail.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Ethan",
    "surName": "Alexander",
    "age": "58",
    "email": "e_alexander@outlook.com",
    "education": "Bachelor’s degree"
  },
  {
    "givenName": "Amelia",
    "surName": "Lopez",
    "age": "58",
    "email": "amlopez@ymail.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Anthony",
    "surName": "Alexander",
    "age": "43",
    "email": "a_h@hotmail.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Brittany",
    "surName": "Parker",
    "age": "20",
    "email": "brittany_l_parker@aol.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Amber",
    "surName": "Bryant",
    "age": "36",
    "email": "ambermbryant@rocketmail.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Brittany",
    "surName": "Morgan",
    "age": "60",
    "email": "b_m_morgan10@rocketmail.com",
    "education": "Bachelor’s degree"
  },
  {
    "givenName": "Dylan",
    "surName": "Barnes",
    "age": "62",
    "email": "d.d.barnes@yahoo.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Mary",
    "surName": "Russell",
    "age": "30",
    "email": "mary@rocketmail.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Henry",
    "surName": "Bryant",
    "age": "19",
    "email": "henry.a.bryant@outlook.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Jack",
    "surName": "Torres",
    "age": "64",
    "email": "j_torres@ymail.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Robert",
    "surName": "Washington",
    "age": "26",
    "email": "r.washington13@ymail.com",
    "education": "Bachelor’s degree"
  },
  {
    "givenName": "Lauren",
    "surName": "Johnson",
    "age": "50",
    "email": "l_j_johnson@rocketmail.com",
    "education": "Bachelor’s degree"
  },
  {
    "givenName": "Joseph",
    "surName": "Lopez",
    "age": "57",
    "email": "j.lopez@yahoo.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Ethan",
    "surName": "Richardson",
    "age": "77",
    "email": "e.a.richardson@yahoo.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Christopher",
    "surName": "Wright",
    "age": "64",
    "email": "christopher_wright@live.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Hannah",
    "surName": "Butler",
    "age": "70",
    "email": "hlbutler@aol.com",
    "education": "Bachelor’s degree"
  },
  {
    "givenName": "Jack",
    "surName": "Hall",
    "age": "45",
    "email": "jackhall@rocketmail.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Lauren",
    "surName": "Roberts",
    "age": "37",
    "email": "lauren@ymail.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Alexander",
    "surName": "Collins",
    "age": "65",
    "email": "a.collins71@ymail.com",
    "education": "High school diploma or equivalent"
  },
  {
    "givenName": "Theodore",
    "surName": "Walker",
    "age": "29",
    "email": "t.walker@live.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Stephanie",
    "surName": "Walker",
    "age": "60",
    "email": "stephaniemwalker78@yahoo.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Joseph",
    "surName": "Rodriguez",
    "age": "30",
    "email": "joseph.eugene@outlook.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Gabriel",
    "surName": "Alexander",
    "age": "19",
    "email": "gabriel.alexander@hotmail.com",
    "education": "High school diploma or equivalent"
  },
  {
    "givenName": "Joshua",
    "surName": "Kelly",
    "age": "63",
    "email": "j_t_kelly@ymail.com",
    "education": "Bachelor’s degree"
  },
  {
    "givenName": "Sebastian",
    "surName": "Coleman",
    "age": "22",
    "email": "swcoleman@aol.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Jonathan",
    "surName": "Mitchell",
    "age": "43",
    "email": "jmitchell75@rocketmail.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Emily",
    "surName": "Howard",
    "age": "50",
    "email": "ehoward85@live.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Layla",
    "surName": "Thomas",
    "age": "50",
    "email": "l.thomas@ymail.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Alexis",
    "surName": "Murphy",
    "age": "20",
    "email": "a.murphy@hotmail.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Joshua",
    "surName": "Kelly",
    "age": "44",
    "email": "j_e_kelly@yahoo.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Alexander",
    "surName": "Barnes",
    "age": "77",
    "email": "alexander_barnes@rocketmail.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Emma",
    "surName": "Martin",
    "age": "72",
    "email": "emma.r.martin@yahoo.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Alexander",
    "surName": "Reed",
    "age": "32",
    "email": "alexander.reed@ymail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Ashley",
    "surName": "Ross",
    "age": "22",
    "email": "ashley_ross@gmail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Amanda",
    "surName": "Long",
    "age": "47",
    "email": "amanda_r_long@hotmail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Samantha",
    "surName": "Washington",
    "age": "75",
    "email": "samantha.washington@aol.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Jason",
    "surName": "Parker",
    "age": "42",
    "email": "jason_charles_parker@live.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Rachel",
    "surName": "Davis",
    "age": "65",
    "email": "rachel.a.davis@hotmail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Jose",
    "surName": "Hill",
    "age": "70",
    "email": "josehill@yahoo.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Jennifer",
    "surName": "White",
    "age": "19",
    "email": "js15@ymail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Amanda",
    "surName": "Cook",
    "age": "32",
    "email": "amanda.g.cook@hotmail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Layla",
    "surName": "Phillips",
    "age": "46",
    "email": "layla.phillips@aol.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Jessica",
    "surName": "Perry",
    "age": "36",
    "email": "jessicarperry@rocketmail.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Isabella",
    "surName": "Brooks",
    "age": "19",
    "email": "i_r_brooks11@live.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Michael",
    "surName": "Reed",
    "age": "70",
    "email": "m_reed@aol.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Jasmine",
    "surName": "Perez",
    "age": "73",
    "email": "jasminemayperez@outlook.com",
    "education": "Bachelor’s degree"
  },
  {
    "givenName": "Lauren",
    "surName": "Murphy",
    "age": "66",
    "email": "l.a97@yahoo.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Jeremy",
    "surName": "Diaz",
    "age": "48",
    "email": "jdiaz@gmail.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "David",
    "surName": "Wood",
    "age": "34",
    "email": "d_a_wood@ymail.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Jose",
    "surName": "Bryant",
    "age": "28",
    "email": "j_a_bryant43@rocketmail.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Thomas",
    "surName": "Perez",
    "age": "42",
    "email": "thomas.james.perez@gmail.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Brittany",
    "surName": "Ramirez",
    "age": "46",
    "email": "brittany.ann.ramirez47@live.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Nicholas",
    "surName": "Sanchez",
    "age": "22",
    "email": "nicholas.a.sanchez@yahoo.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Timothy",
    "surName": "Jenkins",
    "age": "51",
    "email": "timothy.r.jenkins@live.com",
    "education": "Bachelor’s degree"
  },
  {
    "givenName": "Katherine",
    "surName": "Rivera",
    "age": "69",
    "email": "katherine@rocketmail.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Tiffany",
    "surName": "Ward",
    "age": "26",
    "email": "t.ward@yahoo.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Abigail",
    "surName": "Coleman",
    "age": "63",
    "email": "a_s_coleman@outlook.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Isaac",
    "surName": "Henderson",
    "age": "41",
    "email": "isaachenderson@rocketmail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Sara",
    "surName": "Ramirez",
    "age": "72",
    "email": "sarajeanramirez@outlook.com",
    "education": "High school diploma or equivalent"
  },
  {
    "givenName": "Amelia",
    "surName": "Lewis",
    "age": "55",
    "email": "a_a_lewis@hotmail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Lillian",
    "surName": "Cook",
    "age": "55",
    "email": "lillian_dawn_cook@ymail.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Sara",
    "surName": "Smith",
    "age": "51",
    "email": "s.m.smith@aol.com",
    "education": "High school diploma or equivalent"
  },
  {
    "givenName": "Allison",
    "surName": "Hernandez",
    "age": "52",
    "email": "a_s_hernandez@aol.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Anna",
    "surName": "Garcia",
    "age": "30",
    "email": "anna@live.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Isaac",
    "surName": "Russell",
    "age": "24",
    "email": "isaac_w@rocketmail.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Katherine",
    "surName": "Sanders",
    "age": "26",
    "email": "katherinemichellesanders10@hotmail.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Victoria",
    "surName": "Wilson",
    "age": "51",
    "email": "victoriawilson@hotmail.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Eric",
    "surName": "Moore",
    "age": "18",
    "email": "eric.g@yahoo.com",
    "education": "High school diploma or equivalent"
  },
  {
    "givenName": "Lillian",
    "surName": "King",
    "age": "38",
    "email": "lking@ymail.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Brianna",
    "surName": "Clark",
    "age": "70",
    "email": "bkclark@ymail.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Alyssa",
    "surName": "Bennett",
    "age": "48",
    "email": "a.a@gmail.com",
    "education": "Associate degree"
  },
  {
    "givenName": "Lillian",
    "surName": "White",
    "age": "64",
    "email": "lrwhite@yahoo.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Andrew",
    "surName": "Mitchell",
    "age": "22",
    "email": "amitchell@ymail.com",
    "education": "Some college, no degree"
  },
  {
    "givenName": "Samantha",
    "surName": "Rivera",
    "age": "39",
    "email": "samantharivera@live.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Rebecca",
    "surName": "Wood",
    "age": "69",
    "email": "r_wood@hotmail.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Tyler",
    "surName": "Alexander",
    "age": "32",
    "email": "tyleraalexander@yahoo.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Emma",
    "surName": "Martin",
    "age": "71",
    "email": "emma_martin@aol.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Joseph",
    "surName": "Murphy",
    "age": "44",
    "email": "j_w@outlook.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Oliver",
    "surName": "Davis",
    "age": "66",
    "email": "oliver_a@gmail.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Lillian",
    "surName": "Watson",
    "age": "56",
    "email": "l_watson11@hotmail.com",
    "education": "Master’s degree"
  },
  {
    "givenName": "Megan",
    "surName": "Bryant",
    "age": "74",
    "email": "megan_nicole_bryant@hotmail.com",
    "education": "Doctoral degree"
  },
  {
    "givenName": "Sara",
    "surName": "Gray",
    "age": "77",
    "email": "s.g.gray@aol.com",
    "education": "Less than high school"
  },
  {
    "givenName": "Kimberly",
    "surName": "Johnson",
    "age": "35",
    "email": "kimberly@outlook.com",
    "education": "Some college, no degree"
  }
]
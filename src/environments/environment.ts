
// εδώ είναι το apiURL που κοιτάει η εφαρμογή όταν τρέχει σε κανονικό mode δηλ όταν την έχω κάνει deploy (την έχω ανεβάσει σε ένα link) και τη τρέχει ο πελάτης για τον οποίο την έφτιαξα
// όταν τρέχει σε development mode δηλ την τρέχω εγώ στο Laptop Μου τότε το apiURL το παίρνει από το environment.development.ts, δες στο angular.json το πρακάτω (δημιουργήθηκε όταν έδωσα την eντολή ng generate environments)
// "fileReplacements": [
//   {
//     "replace": "src/environments/environment.ts",
//     "with": "src/environments/environment.development.ts"
  // }

//η ίδια η angular βλέπει είτε το παρόν είτε το environment.development.ts,
// εγώ δεν κάνω κάτι για την εναλλαγή αυτή, το κάνει η angular

// και τα δύο αρχεία τα φτιάχνει η Angular όταν δίνω την εντολή ng generate environments

export const environment = {
  production: true,
  apiURL: 'https://coding-factory-api.ddns.net', //του καθηγητή, έχει ανεβάσει την δική του ΒΔ σε αυτό το Link (πως γίνεται δεν ξέρω..) -> σε αυτό το link έχει ανεβάσει την δική του MongoDB -> ΕΊΠΕ ΟΤΙ ΜΕ ΤΟ Link ΑΥΤΟ ΣΤΗΝ ΣΥΝΕΧΕΙΑ ΣΥΝΔΕΕΤΑΙ ΣΤΟΝ Atlas MongoDB όπου είναι η MongoDB του 
};

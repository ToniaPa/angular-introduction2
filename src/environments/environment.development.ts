
// εδώ είναι το apiURL που κοιτάει η εφαρμογή όταν τρέχει σε development mode

//η ίδια η angular βλέπει είτε το παρόν είτε το environment.ts,
// εγώ δεν κάνω κάτι για την εναλλαγή αυτή, το κάνει η angular, δες στο angular.json το πρακάτω (δημιουργήθηκε όταν έδωσα την eντολή ng generate environments)
// "fileReplacements": [
//   {
//     "replace": "src/environments/environment.ts",
//     "with": "src/environments/environment.development.ts"
  // }

// και τα δύο αρχεία τα φτιάχνει η Angular όταν δίνω την εντολή ng generate environments

export const environment = {
  production: false, //false = development mode
  apiURL: 'http://localhost:5000', //όταν τρέχω την εφαρμογή στο laptop Μου δηλ είναι σε develpment mode (δεν την έχω παραδώσει στον πελάτη, δεν την έχω κάνει deploy κάπου στο ίντερνετ) τότε η πόρτα στο laptop Μου για την MongoDB είναι η 5000

  //η 5000 είναι δίαυλος για την ΒΔ δηλ είναι ο δίαυλος επικοινωνίας της angular με την ΒΔ μου που είναι η MongoDB Atlas => πρέπει να τρέχει για να είναι ανοιχτός ο δίαυλος επικοινωνίας και να μπορούμε να στείλουμε τις εντολές get, post, patch Κλπ

  // apiURL: 'http://localhost:3000', //για MongoDB απ'ευθείας (δεν ξέρω τι σημαίνει)

  // όμως τι γίνεται όταν την κάνω deploy, άρα την παίρνει ο πελάτης και την τρέχει; τότε το backend δεν είναι στο laptop Μου, τότε λοιπόν δεν είμαι σε development mode -> στην περίπτωση αυτή η εφαρμογή κοιτάει το apiURL του environment.ts
};

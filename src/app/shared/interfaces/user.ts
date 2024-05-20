export interface User {
  givenName: string;
  surName: string;
  email: string;
  password: string;
}

export interface Credentials { //εδώ ορίζουμε ποιά είναι τα διεπιστευτήρια ενός χρήστη, από αυτά εξαρτάται εάν θα γίνει logged in ή όχι => εξαρτάται από το αν θα βρεθεί στην ΒΔ χρήστης με το τάδε email και password, εάν ναι τότε τον κάνουμε Logged in, αλλιώς όχι
  email: string;
  password: string;
}

export interface LoggedInUser { //εδώ κρατάω την πληροφορία για τον User που μου στέλνει το backend δηλ το ποιός έχει κάνει Login (ποιος είναι)
  //ΔΕΣ και το user.service.ts, εκεί κρατώ την πληροφορία (δες user = signal())
  fullname: string;
  email: string;
  //δες angular-introduction-python-backend -> src -> user_blueprint.py
  //συγκεκριμένα το @user.route("/login", methods=["POST"])
  //εκεί βλέπω τι μου επιστρέφει το backend στο Login του user
}
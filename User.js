var User = function(userName, firstName, lastName, email) {
    this.userName = userName || "";
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.email = email || "";
    this.street = "";
    this.city = "";
    this.zipCode = "";
    this.creditCard = "";
}

User.prototype.getUserName = function() {
    return this.userName;
}
User.prototype.setUserName = function(userName) {
    this.userName = userName;
}

User.prototype.getFirstName = function() { return this.firstName; }
User.prototype.setFirstName = function(firstName) { this.firstName = firstName; }
User.prototype.getLastName = function() { return this.lastName; }
User.prototype.setLastName = function(lastName) { this.lastName = lastName; }
User.prototype.getEmail = function() { return this.email; }
User.prototype.setEmail = function(email) { this.email = email; }
User.prototype.getCity = function() { return this.city; }
User.prototype.setCity = function(city) { this.city = city; }
User.prototype.getStreet = function() { return this.street; }
User.prototype.setStreet = function(street) { this.street = street; }
User.prototype.getZipCode = function() { return this.zipCode; }
User.prototype.setZipCode = function(zipCode) { this.zipCode = zipCode; }
User.prototype.getCreditCard = function() { return this.creditCard; }
User.prototype.setCreditCard = function(creditCard) { this.creditCard = creditCard; }

User.prototype.toString = function() {
    return "User: " + this.getUserName() + " Name: " + this.getFirstName() + " " + this.getLastName()
            + " Email: " + this.getEmail();
}
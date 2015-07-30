Guests = new Mongo.Collection("guests");

// Not sure if conditionals are necessary
if (Meteor.isClient) {

  Template.bplusb.events({
    "submit .new-task": function (event) {
      event.preventDefault();
      var name = event.target.text.value
      var password = event.target.password.value

      // === does not use type conversion
      // == uses type conversion
      if (password == Meteor.settings.public.test) {
        alert('nailed it!');
        // Guests.insert({
        //   name: name,
        //   createdAt: new Date()
        // })
      }

      // Clear Form
      event.target.text.value = ""; 
      event.target.password.value = "";
    }
  });
}

if (Meteor.isServer) {

}

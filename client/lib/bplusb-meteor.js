Guests = new Mongo.Collection("guests");

// Not sure if conditionals are necessary
// meteor run --settings settings.json
if (Meteor.isClient) {

  Template.bplusb.events({
    "submit .new-task": function (event) {
      event.preventDefault();
      var name = event.target.nameOne.value
      var password = event.target.password.value
      var message = event.target.message.value

      // === does not use type conversion
      // == uses type conversion
      if (password == Meteor.settings.public.test) {
        Guests.insert({
          name: name,
          // email: email
          message: message,
          createdAt: new Date()
        })
      }

      $('.modal-body').html('<h1>Thanks</h1>')
    }
  });
}

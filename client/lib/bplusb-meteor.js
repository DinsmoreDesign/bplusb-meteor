Guests = new Mongo.Collection("guests");

// Not sure if conditionals are necessary
// meteor run --settings settings.json
if (Meteor.isClient) {

  Template.bplusb.events({
    "submit .new-task": function (event) {
      event.preventDefault();

      Meteor.call('sendLogMessage');
      var name = event.target.nameOne.value
      var password = event.target.password.value
      var message = event.target.message.value
      
      opts = {
        'name': name,
        'password' : password,
        'message' : message
        // add food choice etc
      }
      Meteor.call('insertRsvpData', opts);

      $('.modal-body').html('<h1>Thanks</h1>')
    }
  });
}

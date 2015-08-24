Guests = new Mongo.Collection("guests");

// meteor run --settings settings.json
if (Meteor.isClient) {

  Template.bplusb.events({
    "submit .new-task": function (event) {
      event.preventDefault();

      Meteor.call('sendLogMessage');

      var password = event.target.password.value 
      var numGuests = event.target.numGuests.value 
      var names = event.target.names.value
      var willAttend = event.target.willAttend.value
      var dietText = event.target.dietText.value 
      var noteText = event.target.noteText.value
      
      var opts = {
        'numGuests': numGuests,
        'name': names,
        'password' : password,
        'note' : noteText,
        'diet' : dietText,
        'attend' : willAttend
      }
      // add form validations
      Meteor.call('insertRsvpData', opts, function(error, result) {
        if (result == true) {
          alert('Sucess');
        } else {
          alert('Fail');
        }
      });

      $('.modal-body').html('<h1>Thanks</h1>')
    }
  });
}

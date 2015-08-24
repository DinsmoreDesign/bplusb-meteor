Guests = new Mongo.Collection("guests");

// meteor run --settings settings.json
if (Meteor.isClient) {

  Template.bplusb.events({
    "submit .new-task": function (event) {
      event.preventDefault();

      $('.flash-error').hide();
      $('.flash-error').html('');

      Meteor.call('sendLogMessage');

      var password = event.target.password.value 
      var numGuests = event.target.numGuests.value 
      var names = event.target.names.value
      var willAttend = event.target.willAttend.value
      var dietText = event.target.dietText.value 
      var noteText = event.target.noteText.value
      
      var opts = {
        'numGuests': numGuests,
        'names': names,
        'password' : password,
        'note' : noteText,
        'diet' : dietText,
        'attend' : willAttend
      }

      // Num Guests
      if ( opts.numGuests.length == 0 ) {
        $('.numGuests-group').addClass('has-error');
        
        $('.flash-error').show();
        $('.flash-error').html('Please fill out the number of guests that will be attending');
        return null;

      // Names
      } else if ( opts.names.length == 0 ) {
        $('.names-group').addClass('has-error');

        $('.flash-error').show();
        $('.flash-error').html('Please enter your name(s)');

      // Attend
      } else if ( opts.attend.length == 0 ) {
        $('.attend-group').addClass('has-error');

        $('.flash-error').show();
        $('.flash-error').html('Please check if you will be attending');

      // Password
      } else if ( opts.password.length == 0 ) {
        $('.password-group').addClass('has-error');

        $('.flash-error').show();
        $('.flash-error').html('Please enter the password');
      
      } else {

        // add form validations
        Meteor.call('insertRsvpData', opts, function(error, result) {
          if (result == true) {
            $('.guest-info-form').html('');

            $('.flash-good').show();
            $('.flash-good').html('Success! See you there!')
          } else {
            $('.flash-error').show();
            $('.flash-error').html("Incorrect password. If you are having trouble, please email bcutrell13@gmail.com (it's probably my fault) ");
          }
        });
      }
    } // end event method

  });
}

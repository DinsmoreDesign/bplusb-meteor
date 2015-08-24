Guests = new Mongo.Collection("guests");

// SERVER TODO ITEMS
// 1. remove autopublish
// meteor remove autopublish

// 2. remove insecure
// meteor remove insecure

// 3. Add server methods
// 4. Call them from the client
Meteor.methods({
    // methods go here
    'sendLogMessage': function(){
      console.log(Meteor.settings.rsvpCode);
      console.log('Demo Log Message');
    },
    
    'insertRsvpData': function(opts){
        // code goes here
        opts['password'];
        opts['name'];
        opts['message'];

      if (password == Meteor.settings.rsvpCode) {
        Guests.insert({
          name: name,
          // email: email
          message: message,
          createdAt: new Date()
        })
      }
    }


});





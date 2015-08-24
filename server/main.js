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
      if (opts.password.toLowerCase() == Meteor.settings.rsvpCode) {
        Guests.insert({
          names: opts.names,
          numGuests: opts.numGuests,
          diet: opts.diet,
          attend: opts.attend,
          note: opts.note,
          createdAt: new Date()
        })
        return true;
      } else {
        return false
      }
    }

});





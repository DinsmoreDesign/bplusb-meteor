// Tasks = new Mongo.Collection("guests");
// PlayersList.insert({
//   name: text,
//   rsvp: boolean,
//   createdAt: new Date()
// })


if (Meteor.isClient) {

  Template.bplusb.events({
    "submit .new-task": function (event) {
      alert('submitted');
      
      var name = event.target.text.value
      var password = event.target.password.value

      // Clear Form
      event.target.text.value = ""; 
      event.target.password.value = "";

      return false; // Prevent default form submit
    }
  });



}

if (Meteor.isServer) {

}

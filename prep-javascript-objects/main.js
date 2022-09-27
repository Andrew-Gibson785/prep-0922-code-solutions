var person = {
  firstName: 'Andrew',
  lastName: 'Gibson',
  hobby: 'Warhammer',
  job: 'Veterinary Nurse',
  previousJob: 'Dog Groomer'
};
console.log(person);

var fullname = person.firstName + ' ' + person.lastName;
console.log("The person's full name is", fullname);

var job = person.job;
console.log("The Person's job is", job);

var previousJob = person.previousJob;
console.log("The Person's previous job was", previousJob);

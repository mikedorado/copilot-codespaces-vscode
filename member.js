function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Django'];
    var member = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        skills: skills,
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        }
    };
    console.log(member.fullName());
    console.log(member.skills);
}
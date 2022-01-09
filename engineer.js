const employee = require('./employee');

class engineer extends employee {
    constructor(name, id, email, github, employee) {
        super(name, id, email, github);
        this.github = github;
    }

    getRoles() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }

}

module.exports = engineer;
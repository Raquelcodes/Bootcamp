class Event {
    constructor(location, date, assistants) {
        this.location = location;
        this.date = date;
        this.assistants = assistants;
    }

    printInvitation(name) {
        let msg = 'Hey ' + name + '!!!\nHoping to see you in my Event on the ' + this.date.toDateString() + ' in ' + this.location + '!!!\ Cheers!!';
        console.log(msg);
    }

    confirmAssistance() {
        let isComing = console.log('Hey ' + name + '!!\nCan I count with you???');
        if (isComing) {
            this.assistants.push(name);
        }
    }

    printAssistants() {
        console.log(this.assistants.join('\n'));
    }
}
const event1 = new Event('Zürich', new Date(2025, 11, 17), ['Llorenç', 'Colin', 'Laurent']);
event1.printInvitation("john")

//don't understand the rest of the tasks ?
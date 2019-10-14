class DateCreator {
    constructor() {
        this.year = ''
        this.month = ''
        this.day = ''
        this.hour = ''
        this.minutes = ''
        this.seconds = ''
    }
    addDate() {
        this.year = new Date().getFullYear()
        this.month = new Date().getMonth() + 1
        this.day = new Date().getDate()
        this.hour = new Date().getHours()
        this.minutes = new Date().getMinutes()
        this.seconds = new Date().getSeconds()



        return ({
            year: this.year,
            month: this.month,
            day: this.day,
            hour: this.hour,
            minutes: this.minutes,
            seconds: this.seconds,
        })
    }
}

export default DateCreator;
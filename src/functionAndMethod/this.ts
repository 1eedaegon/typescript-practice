function fancyDate(this: Date) {
    return `${ this.getDate() }/${this.getMonth()}/${this.getFullYear()}`
}
fancyDate.call(new Date);
fancyDate() // Error.
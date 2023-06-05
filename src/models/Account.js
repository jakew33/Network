export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.resume = data.resume
    this.socialPlatform = data.github || data.linkedin
    this.class = data.class
    this.graduated = data.graduated
  }
}
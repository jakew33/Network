export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.resume = data.resume
    this.socialPlatform = data.github ||data.linkedin
    this.email = data.email
    this.subs = data.subs
    this.graduated = data.graduated
    this.class = data.class
  }
}
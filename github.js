class GitHub {
  constructor() {
    this.client_id = "0ff79b7534290ff0bad9";
    this.client_secret = "0a1ae91eed7ebafa75fe76c66d1e4c8897de7d21";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}

import { AtpAgent } from '@atproto/api'

const agent = new AtpAgent({
  service: 'https://bsky.social'
})

const loginResult = await agent.login({
  identifier: 'patrick.j.holmes@gmail.com',
  password: process.env.BLUESKY_PASSWORD
})

console.log("Login result:")
console.log(JSON.stringify(loginResult, null, 2))

// post a message

// await agent.post({
//   text: 'Hello world! I posted this via the API.',
//   createdAt: new Date().toISOString()
// })

// get the first page of the timeline

// const { data } = await agent.getTimeline({
//   cursor: "",
//   limit: 30,
// });
// const { feed: postsArray, cursor: nextPage } = data;
// console.log(JSON.stringify(postsArray, null, 2));

// get a user's profile

const { data } = await agent.getProfile({ actor: 'did:plc:5k7u2ygbcigv2v62nawsuxsa' })
console.log("getProfile result:")
console.log(JSON.stringify(data, null, 2))

// the end
console.log('--end--')
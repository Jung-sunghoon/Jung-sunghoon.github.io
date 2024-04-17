import axios from 'axios'
import { Octokit } from '@octokit/rest'

const myKey = import.meta.env.VITE_GITHUB_KEY
const repo = `auto-test`

export const fileRead = async (path: any) => {
  try {
    const octokit = new Octokit({
      auth: myKey,
    })

    const result = await octokit.request(
      `GET /repos/Jung-sunghoon/${repo}/contents/${path}`,
      {
        owner: 'Jung-sunghoon',
        repo: `${repo}`,
        path: `${path}`,
        encoding: 'utf-8',
        decoding: 'utf-8',
      },
    )
    return result
  } catch (e) {
    console.log('error : ', e)
    return undefined
  }
}

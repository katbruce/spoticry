
export default function HomePage(){
    
    
return <h1>token</h1>
}



// export default function Blog({ posts }) {
//     // Render posts...
//   }
  
//   // This function gets called at build time
//   export async function getStaticProps() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://.../posts')
//     const posts = await res.json()
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }

// This function gets called at build time
// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://.../posts')
//     const posts = await res.json()
  
//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//       params: { id: post.id },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
//   }

// import type { OAuthConfig, OAuthUserConfig } from "."

// export interface SpotifyImage {
//   url: string
// }

// export interface SpotifyProfile extends Record<string, any> {
//   id: string
//   display_name: string
//   email: string
//   images: SpotifyImage[]
// }
// export default function Spotify<P extends SpotifyProfile>(
//   options: OAuthUserConfig<P>
// ): OAuthConfig<P> {
//   return {
//     id: "spotify",
//     name: "Spotify",
//     type: "oauth",
//     authorization:
//       "https://accounts.spotify.com/authorize?scope=user-read-email",
//     token: "https://accounts.spotify.com/api/token",
//     userinfo: "https://api.spotify.com/v1/me",
//     profile(profile) {
//       return {
//         id: profile.id,
//         name: profile.display_name,
//         email: profile.email,
//         image: profile.images?.[0]?.url,
//       }
//     },
//     style: {
//       logo: "/spotify.svg",
//       logoDark: "/spotify.svg",
//       bg: "#fff",
//       text: "#2ebd59",
//       bgDark: "#fff",
//       textDark: "#2ebd59",
//     },
//     options,
//   }
// }
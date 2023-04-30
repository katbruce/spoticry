import {getGenres} from "../../lib/token.jsx"
import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(NextApiRequest, NextApiResponse) {
    const response = await getGenres();
    const items = await response.json();

    NextApiResponse.setHeader(
        "Cache-Control",
        "public, s-maxage=86400, stale-while-revalidate=43200"
    );
    return NextApiResponse.status(200).json(items);
}
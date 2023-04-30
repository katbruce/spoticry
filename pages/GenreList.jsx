import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GenreList(){
    const { data, error, isLoading } = useSwr('http://localhost:3000/lib/localData', fetcher)
    
    
    
    if (error) return <div>Failed to load users</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null
      
    return (    
      <ul>
        {data.forEach(element => {
            <li>{data.name}</li>
        })}
      </ul>
        
        
      
    
    )
}
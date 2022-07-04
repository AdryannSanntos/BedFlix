import { gql, useQuery } from "@apollo/client";
import { Movie } from "./Movie";

const GET_MOVIES = gql`
  query GetMovies {
    movies {
      id
      slug
      title
      released
      image
    }
  }
`;

interface GetMoviesQueryResponse {
  movies: {
    id: string;
    slug: string;
    title: string;
    released: Date;
    image: string;
  }[]
}

interface MovieRowProps {
  title: string;
}

export function MovieRow(props : MovieRowProps) {
  const { data } = useQuery<GetMoviesQueryResponse>(GET_MOVIES);
  if(!data){
    return (
    <div className="flex-1">
      <h1>
        Carregando filmes...
      </h1>
    </div>
    )
  }
  return (
    <section className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-8 bg-red-300"></div>
        <span className="title">{props.title}</span>
      </div>
      <div className="ml-4 gap-5 flex">
        {data?.movies.map(movies =>{
          return(
            <Movie title={movies.title} date={new Date(movies.released)} image={movies.image} slug={movies.slug}/>
          )
        })}
      </div>
    </section>
  )
}
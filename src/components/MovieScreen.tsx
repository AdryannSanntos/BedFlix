import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SelectedMovie } from "../components/SelectedMovie";
import { Sidebar } from "../components/Sidebar";

const GET_MOVIE_BY_SLUG = gql`
  query GetMovie($slug: String) {
    movie(where: {slug: $slug}) {
      image
      movieUrl
      released
      title
      description
    }
  }
`;

interface GetMovieBySlug {
  movie: {
    title: string;
    movieURL: string;
    description: string;
    released: Date;
    image: string;
  }
}

interface MovieProps {
  movieSlug: string;
}

export function MovieScreen(props : MovieProps) {
  const { data } = useQuery<GetMovieBySlug>(GET_MOVIE_BY_SLUG, {
    variables: {
      slug: props.movieSlug
    }
  })
  if(!data){
    return (
    <div className="flex-1">
      <h1>
        Carregando...
      </h1>
    </div>
    )
  }
  return (
    <div className="flex flex-1">
      <SelectedMovie 
        title={data.movie.title}
        description={data.movie.description}
        imageUrl={data.movie.image}
        movieUrl={data.movie.movieURL}
        released={new Date(data.movie.released)}
      />
    </div>
      
  )
}
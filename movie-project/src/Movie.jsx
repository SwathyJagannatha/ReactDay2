const Movie = ({title,genre,description,showDetails}) =>{
    // <li key={pet.id}>{pet.name} the {pet.type} and their owner {pet.owner}</li>
    return (
       <li>{title} the {genre} and {description }</li>
     )
   }
   
   export default Movie;
   
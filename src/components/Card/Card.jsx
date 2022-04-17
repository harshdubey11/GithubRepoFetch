import './card.scss';

function Card({repo}) {
  return (
    <div className='card'>
    <img className='avatar' src={repo.owner.avatar_url} alt="avatar"></img>
    <ul className='details'>
    <li className='item'>
      
            <span className='key'>Repo Name :</span>
            <span className='value'>{repo.name}</span>
       
        </li>
        <li className='item'>
     
            <span className='key'>Description :</span>
            <span className='value'>{repo.description}</span>
       
        </li>
        <li className='item'>
       
            <span className='key'>Owner Name :</span>
            <span className='value'>{repo.owner.login}</span>
      
        </li>
        <li className='item'>
     
            <span className='key'>Stars Count :</span>
            <span className='value'>{repo.stargazers_count}</span>
       
        </li>
        <li className='item'>
      
            <span className='key'>Number of forks :</span>
            <span className='value'>{repo.forks_count}</span>
       
        </li>
        <li className='item'>
       
            <span className='key'>Language :</span>
            <span className='value'>{repo.language}</span>
        
        </li>
  </ul>
    </div>
  )
}

export default Card
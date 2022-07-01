const jokes=document.querySelector('#jokes');
const button=document.querySelector('button');

const addNewJoke=async()=>{
  const jokeText=await getDadJoke()
  const newLI=document.createElement('LI');
  newLI.append(jokeText);
  jokes.append(newLI)
}

const getDadJoke=async()=>{
  try{
    const config={headers: {Accept: 'application/json'}}
    const res=await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke;
  }catch(e){
    return "no jokes available"
  }
}

button.addEventListener('click', addNewJoke)

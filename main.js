onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener('DOMContentLoaded', function() {
  const message = "I LOVE U";
  const typingDiv = document.getElementById('love-typing');
  let i = 0;

  // Wait for the flowers to start growing (timing matches CSS animation)
  setTimeout(() => {
    typingDiv.classList.add('visible');
    const typeInterval = setInterval(() => {
      typingDiv.textContent = message.slice(0, i + 1);
      i++;
      if (i === message.length) {
        clearInterval(typeInterval);
      }
    }, 350); // increased writing speed
  }, 800); 
});
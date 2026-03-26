

const users = [
  {
    name: "Aarav Sharma",
    pic: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww",
    bio: "Frontend developer who loves building UI with React."
  },
  {
    name: "Priya Verma",
    pic: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "UI/UX designer passionate about user-friendly designs."
  },
  {
    name: "Aarav Sharma",
    pic: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww",
    bio: "Backend developer specializing in Node.js and APIs."
  },
  {
    name: "Neha Gupta",
    pic: "https://media.istockphoto.com/id/530741832/photo/anxious-and-scared-young-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=1WtsGa32VhO-dnzSs_L36CRrZLPlht6w1048VrtYn8o=",
    bio: "Digital marketer focused on SEO and content strategy."
  },
  {
    name: "Karan Mehta",
    pic: "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmx8ZW58MHx8MHx8fDA%3D",
    bio: "Full stack developer with MERN stack experience."
  },
  {
    name: "Ananya Das",
    pic: "https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmx8ZW58MHx8MHx8fDA%3D",
    bio: "Mobile app developer building apps with Flutter."
  },
  {
    name: "Vikram Patel",
    pic: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww",
    bio: "Data analyst who loves working with Python and SQL."
  },
  {
    name: "Sneha Kapoor",
    pic: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww",
    bio: "Content writer creating engaging blog articles."
  },
  {
    name: "Rohit Jain",
    pic: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "DevOps engineer managing cloud infrastructure."
  },
  {
    name: "Meera Iyer",
    pic: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "AI enthusiast exploring machine learning models."
  }
];

function showUsers(arr){
  arr.forEach(function(user){
    
    // -----------------------creating card----------------------------------------
    const card = document.createElement("div")
    card.classList.add("card")

    // ---------------------------creating image-----------------------------------
    const img = document.createElement("img")
    img.src = user.pic
    img.classList.add("img")

    // --------------------create content-------------------------------------
    const content = document.createElement("div")
    content.classList.add("container")

    // ---------------------------para and heading-------------------------------
    const heading = document.createElement("h3")
    heading.classList.add("name")
    heading.textContent = user.name;

    const para = document.createElement("p")
    para.classList.add("bio");
    para.textContent = user.bio;

    // --------------appending heading and para ----------------------------------
    content.appendChild(heading)
    content.appendChild(para)

    // ------------------append all to card ------------------------------
    card.appendChild(img)
    card.appendChild(content)

    // --------------------append to all to card -----------------------------
    document.querySelector(".parent2").appendChild(card)
  })

}
showUsers(users)

let inp = document.querySelector(".inp");
let nothing = document.querySelector(".nothing")

inp.addEventListener("input" , function(){
  let newUser = users.filter((item) => {
    return item.name.startsWith(inp.value)
  })
  
  document.querySelector(".parent2").innerHTML = "";

  if(newUser.length == 0){
     nothing.hidden = false;
  }else{
      showUsers(newUser);
      nothing.hidden = true;
  }
  
})

